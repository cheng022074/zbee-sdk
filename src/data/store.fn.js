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

    append(data){

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

        let result = [],
            store = this;

        for(let record of data){

            if(!doRecordValid(record , store)){

                continue ;
            }

            if(properties){

                Object.defineProperties(record , properties) ;
            }

            let id = doRecordId(record , store),
                oldRecord = store.getRecordById(id) ;

            if(oldRecord){

                result.push(records[me.indexOf(oldRecord)] = doRecordMerge(record , oldRecord)) ;

            }else{

                records.push(record) ;

                result.push(record) ;
                
                ids[id] = records.length - 1 ;
                
            }
        }

        me.fireEvent('append' , result , records) ;

        return result ;
    }

    load(data){

        let me = this ;

        me.clear() ;

        me.suspendEvents() ;

        me.append(data) ;

        me.resumeEvents() ;

        me.fireEvent('load' , me.data) ;
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