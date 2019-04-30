/**
 * 
 * 标准化字段集合
 * 
 * @import from from array.from
 * 
 * @import is.string
 * 
 * @import empty from function.empty value
 * 
 * @import get from object.get
 * 
 * @import is.defined
 * 
 * @import is.empty
 * 
 * @param {mixed} fields 字段集合
 * 
 * @return {mixed} 标准化后的字段集合
 * 
 */

 function main(fields){

    if(fields instanceof Fields){

        return fields ;
    }

    fields = from(fields) ;

    let result = [] ;

    for(let field of fields){

        if(isString(field)){

            result.push({
                name:field,
                convert:empty
            }) ;
        
        }else{

            let {
                name,
                mapping,
                convert,
                defaultValue
            } = field ;

            if(convert){

                item = {
                    name,
                    convert
                } ;

            }else if(mapping){

                let convert ;

                if(isDefined(defaultValue)){

                    convert = data =>{

                        let value = get(data , mapping) ;

                        if(isEmpty(value)){

                            return defaultValue ;
                        }

                        return value ;
                    } ;
                
                }else{

                    convert = data => get(data , mapping) ;
                }

                result.push({
                    name,
                    convert
                }) ;
            }
        }
    }

    return new Fields(result) ;
 }

 class Fields{

    constructor(fields){

        this.fields = fields ;
    }

    get names(){

        return get_values.call(this , 'name') ;
    }

    get converts(){

        return get_values.call(this , 'convert') ;
    }
 }

 function get_values(key){

    let {
        fields
    } = this,
    values = [];

    for(let field of fields){

        values.push(field[key]) ;
    }

    return values ;
 }