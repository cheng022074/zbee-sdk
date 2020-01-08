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
 * @import aClone from array.clone
 * 
 * @import oClone from object.clone
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
 * @import isObject from is.object.simple
 * 
 * @import is.function
 * 
 * @import is.string
 * 
 * @import insert from array.insert
 * 
 * @import toNumber from data.convert.number
 * 
 * @import createReader from data.reader.json
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

function createFixedRecordPositions(sorts){

    let results = [] ;

    for(let sort of sorts){

        if(isString(sort)){

            sort = {
                field:sort
            } ;
        }

        if(isObject(sort)){

            let {
                field,
                direction = 'asc'
            } = sort;

            switch(direction){

                case 'asc':

                    sort = (record , appendRecord) => toNumber(record[field]) <= toNumber(appendRecord[field]) ;

                    break ;

                case 'desc':

                    sort = (record , appendRecord) => toNumber(record[field]) >= toNumber(appendRecord[field]) ;
            }            
        }
        
        if(isFunction(sort)){

            results.push(sort) ;
        }
    }

    return results ;
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
        reader = {},
        sorts = [],
        properties = {},
        isEmpty = false,
        ...options
    } = {}){

        super(options) ;

        if(isEmpty === true){

            return ;
        }

        let me = this ;

        me.doRecordMerge = merge ;

        me.doRecordId = id ;

        me.doRecordValid = valid ;

        me.data = [] ;

        me.ids = {} ;

        me.reader = createReader(reader) ;

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

        me.fixedRecordPositions = createFixedRecordPositions(sorts) ;
    }

    clone(){

        let target = new main({
            isEmpty:true
        }),
        {
            doRecordMerge,
            doRecordId,
            doRecordValid,
            data,
            ids,
            reader,
            properties,
            fixedRecordPositions
        } = this;

        target.doRecordMerge = doRecordMerge ;

        target.doRecordId = doRecordId ;

        target.doRecordValid = doRecordValid ;

        target.data = aClone(data) ;

        target.ids = oClone(ids) ;

        target.reader = reader ;

        target.properties = properties ;

        target.fixedRecordPositions = fixedRecordPositions ;

        return target ;
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
            fixedRecordPositions
        } = me,
        {
            length:len
        } = data,
        fixedRecordPosition = 0,
        fixedRecordPositionIndex = 0;

        for(let i = len - 1 ; i >= 0 ; i --){

            let item = data[i],
                j = 0 ;

            for(let doFixedRecordPosition of fixedRecordPositions){

                if(j > fixedRecordPositionIndex){

                    break ;
                }

                if(!doFixedRecordPosition(item , record , me)){

                    break ;
                }

                j ++ ;
            }

            if(j > fixedRecordPositionIndex){

                fixedRecordPosition = i + 1 ;

                fixedRecordPositionIndex ++ ;
            
            }else if(fixedRecordPositionIndex !== 0){

                break ;
            }
        }

        return fixedRecordPosition ;
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