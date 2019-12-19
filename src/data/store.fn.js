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
 * @param {object} config 配置
 * 
 * @class
 * 
 */

function defaultRecordId({
    id
}){

    return id ;
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

        let onPipeStoreLoad = (...args) => store.load(args[1]),
            onPipeStoreAppend = (...args) => store.append(args[1]) ;

        add(me , {
            load:onPipeStoreLoad,
            append:onPipeStoreAppend,
            update:onPipeStoreAppend
        });

        me.onPipeStoreLoad = onPipeStoreLoad ;

        me.onPipeStoreAppend = onPipeStoreAppend ; 
    }

    unpipe(){

        let me = this,
        {
            pipeStore,
            onPipeStoreLoad,
            onPipeStoreAppend
        } = me ;

        if(pipeStore){

            remove(me , {
                load:onPipeStoreLoad,
                append:onPipeStoreAppend,
                update:onPipeStoreAppend
            }) ;

            delete me.pipeStore ;

            delete me.onPipeStoreLoad ;

            delete me.onPipeStoreAppend ;
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
            appends = [];

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

                updates.push(records[me.indexOf(oldRecord)] = doRecordMerge(record , oldRecord , me)) ;

            }else{

                records.push(record) ;

                appends.push(record) ;
                
                ids[id] = records.length - 1 ;
                
            }
        }

        if(appends.length && isFireEvent){

            me.fireEvent('append' , appends) ;

        }

        if(updates.length && isFireEvent){

            me.fireEvent('update' , updates) ;
        }
        
        return {
            updates,
            appends,
            all:[
                ...updates,
                ...appends
            ]
        } ;
    }

    load(data){

        let me = this ;

        me.clear() ;

        me.append(data , false) ;

        me.fireEvent('load' , me.data) ;
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
}