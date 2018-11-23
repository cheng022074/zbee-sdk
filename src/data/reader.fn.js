
/**
 * 
 * 数据读取器
 * 
 * @import is.array
 * 
 * @import is.defined
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
 * 
 * @import data.reader.json
 * 
 * @return {data.Reader} 数据读取器引用 
 * 
 * @once
 * 
 */

const {
    keys
} = Object ;

class Reader {

    static create(config){

        if(isString(config)){

            return include(`data.reader.${config}`)() ;
         
        }else if(isObject(config)){

        let {
            type,
            ...readerConfig
        } = config ;

        return include(`data.reader.${type || 'json'}`)(readerConfig) ;
        }

        return include('data.reader.json')() ;
    }

    constructor({
        rootProperty,
        fields
    }){

        let me = this ;

        me.rootProperty = rootProperty ;

        {
            if(isArray(fields)){

                let result = {} ;

                for(let field of fields){

                    if(isString(field)){

                        result[field] = data =>{

                            return me.getMappingData(data , field) ;
                        } ;

                    }else if(isObject(field)){

                        let {
                            name,
                            mapping
                        } = field ;

                        result[name] = data =>{

                            return me.getMappingData(data , mapping) ;
                        } ;
                    }
                }

                me.fields = result ;

            }else if(isObject(fields)){

                let names = keys(fields),
                    result = {};

                for(let name of names){

                    result[name] = data =>{

                        return get(data , fields[name]) ;
                    } ;
                }

                me.fields = result ;
            
            }else{

                me.fields = {} ;
            }
        }
    }

    getMappingData(data , mapping){

        return data ;
    }

    getRecords(data){

        if(isArray(data)){

            return data ;

        }else if(isObject(data)){

            return [
                data
            ] ;
        }

        return [] ;
    }

    getRecord(data){

        if(isObject(data)){

            return data ;
        
        }else if(isArray(data) && data.length){

            return data[0] ;
        }

        return {} ;
    }

    parseRecord(data){

        let record = {},
        {
            fields
        } = this,
        names = keys(fields);

        for(let name of names){

            record[name] = fields[name](data) ;
        }

        return record ;
    }

    readOne(data){

        let me = this,
            record = me.getRecord(data);

        me.rawData = data ;

        if(record){

            return me.parseRecord(record) ;
        }

    }

    read(data){

        let me = this,
            records = me.getRecords(data),
            result = [];

        me.rawData = data ;

        for(let record of records){

            record = me.parseRecord(record) ;

            if(isDefined(record)){
                
                result.push(record) ;
            }
        }

        return result ;
    }
}

return Reader ;
