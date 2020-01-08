/**
 * 
 * 数据存储器类
 * 
 * @import Observable from mixin.observable
 * 
 * @import aclear from array.clear
 * 
 * @import oclear from object.clear
 * 
 * @import from from array.from
 * 
 * @import isObject from is.object.simple
 * 
 * @import is.function
 * 
 * @import is.number
 * 
 * @import empty from function.empty value
 * 
 * @import add from event.listener.add
 * 
 * @import remove from event.listener.remove
 * 
 * @import generate from id.generate
 * 
 * @import is.empty
 * 
 * @import insert from array.insert
 * 
 * @param {object} config 配置
 * 
 * @class
 * 
 */

function defaultRecordId(){

    return generate('record-') ;
}

function defaultRecordMerge(record){

    return record ;
}

function defaultRecordValid(){

    return true ;
}

class main extends mixins({
    mixins:[
        Observable
    ]
}){

    constructor({
        id = defaultRecordId,
        merge = defaultRecordMerge,
        valid = defaultRecordValid,
        reader,
        properties = {},
        ...options
    } = {}){

        super(options) ;

        let me = this ;

        me.doRecordMerge = merge ;

        me.doRecordId = id ;

        me.doRecordValid = valid ;

        me.data = [] ;

        me.ids = {} ;

        me.reader = include('data.reader.json')(reader) ;

        let names = Object.keys(properties),
            orginProperties = {},
            store = this;

        for(let name of names){

            let property = properties[name] ;

            if(isFunction(property)){

                orginProperties[name] = {
                    enumerable:true,
                    get(){

                        return property(this , store) ;
                    }
                } ;

            }else if(isObject(property)){

                let {
                    set = empty,
                    get = empty
                } = property ;

                orginProperties[name] = {
                    enumerable:true,
                    get(){

                        return get(this , store) ;
                    },

                    set(value){

                        set(value , this , store) ;
                    }
                } ;
            }
        }

        me.properties = orginProperties ;
    }

    get isEmpty(){

        return this.data.length === 0 ;
    }

    pipe(store){

        let me = this ;

        me.pipeStore = store ;

        let onPipeStoreLoad = () => {

            let {
                pipeData
            } = this ;

            if(!isEmpty(pipeData)){

                store.load(pipeData) ;
            }

        },
            onPipeStoreChange = () => {

                let {
                    pipeData
                } = this ;
    
                if(pipeData.length){
    
                    store.append(pipeData) ;
                }
    
            };

        add(me , {
            load:onPipeStoreLoad,
            change:onPipeStoreChange
        });

        me.onPipeStoreLoad = onPipeStoreLoad ;

        me.onPipeStoreChange = onPipeStoreChange ; 

        return store ;
    }

    unpipe(){

        let me = this,
        {
            pipeStore,
            onPipeStoreLoad,
            onPipeStoreChange
        } = me ;

        if(pipeStore){

            remove(me , {
                load:onPipeStoreLoad,
                change:onPipeStoreChange
            }) ;

            delete me.pipeStore ;

            delete me.onPipeStoreLoad ;

            delete me.onPipeStoreChange ;
        }
    }

    getRecordById(id){

        let me = this,
        {
            ids,
            data
        } = me ;

        if(ids.hasOwnProperty(id)){

            return data[ids[id]] ;
        }
    }

    indexOf(record){

        let me = this,
        {
            doRecordId,
            ids
        } = me,
        index = ids[doRecordId(record , me)];

        return isNumber(index) ? index : -1 ;
    }

    getPreviousRecord(record){

        let me = this,
        {
            data
        } = me,
        index = me.indexOf(record);

        if(index > 0){

            return data[index - 1] ;
        }
    }

    get last(){

        let {
            data,
            isEmpty
        } = this ;

        if(!isEmpty){

            return data[data.length - 1] ;
        }
    }

    append(data , isFireEvent = true){

        let me = this,
        {
            data:records,
            ids,
            doRecordMerge,
            doRecordValid,
            doRecordId,
            reader,
            properties
        } = me ;

        data = reader.read(data) ;

        let updates = [],
            appends = [],
            all = [];

        for(let record of data){

            if(!doRecordValid(record , me)){

                continue ;
            }

            if(properties){

                Object.defineProperties(record , properties) ;
            }

            let id = doRecordId(record , me),
                oldRecord = me.getRecordById(id) ;

            if(oldRecord){

                record = records[me.indexOf(oldRecord)] = doRecordMerge(record , oldRecord , me) ;

                updates.push(record) ;

                all.push(record) ;

            }else{

                me.doAppend(record) ;

                appends.push(record) ;

                all.push(record) ;
                
            }
        }

        if(appends.length && isFireEvent){

            me.fireEvent('append' , appends) ;

        }

        if(updates.length && isFireEvent){

            me.fireEvent('update' , updates) ;
        }

        if(all.length && isFireEvent){

            me.fireEvent('change' , all) ;

            me.fireEvent('pipedata' , all) ;
        }
        
        return {
            updates,
            appends,
            all
        } ;
    }

    getAppendRecordIndex(record){

        let me = this,
        {
            data,
            record,
            fixedRecordPositions
        } = me,
        {
            length:len
        } = data;

        for(let i = len - 1 ; i >= 0 ; i --){

            let record = data[i];

            for(let fixedRecordPosition of fixedRecordPositions){

                if(!fixedRecordPosition(data[i] , record , me)){

                    notFind = true ;

                    break ;
                }
            }
        }

        return 0 ;
    }

    doAppend(record){

        let me = this,
        {
            data,
            ids,
            doRecordId
        } = me,
        id = doRecordId(record , me),
        index = me.getAppendRecordIndex(record);

        data.push(record) ;

        insert(data , index , record) ;

        ids[id] = index;
    }

    load(data){

        let me = this ;

        me.clear() ;

        me.append(data , false) ;

        let {
            data:realData
        } = me ;

        me.fireEvent('load' , realData) ;

        me.fireEvent('pipedata' , realData) ;
    }

    refresh(){

        let me = this,
        {
            ids,
            doRecordId,
            data
        } = me ;

        let count = 0 ;

        for(let record of data){

            ids[doRecordId(record , me)] = count ++;
        }

    }

    clear(){

        let me = this,
        {
            data,
            ids
        } = me ;

        aclear(data) ;

        oclear(ids) ;

        me.fireEvent('clear') ;
    }

    get pipeData(){

        return this.data ;
    }
}