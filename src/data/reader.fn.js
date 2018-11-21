
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
 * @return {data.Reader} 数据读取器引用 
 * 
 * @once
 * 
 */

const {
    keys
} = Object ;

class Reader {

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

        return data ;
    }

    getRecord(data){

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

        let records = this.read(data) ;

        if(records.length){

            return records[0] ;
        }
    }

    read(data){

        let me = this,
            records = me.getRecords(data),
            result = [];

        me.rawData = data ;

        if(isArray(records)){

            for(let record of records){

                record = me.getRecord(record) ;

                if(isDefined(record)){
                    
                    result.push(record) ;
                }
            }
        }

        return result ;
    }
}

return Reader ;
