import { isArray } from "util";

/**
 * 
 * JSON 数据合并
 * 
 * @import isObject from is.object.simple
 * 
 * @import is.array
 * 
 * @import is.defined
 * 
 * @import typeOf from data.type
 * 
 * @param {array} [...values] 需要合并的数据
 * 
 * @return {mixed} 合并后的数据 
 * 
 */

 function merge(dest , source){

    if(typeOf(dest) === typeOf(source)){

        if(isObject(dest)){

            let names = Object.keys(source) ;

            for(let name of names){

                let destFieldValue = dest[name],
                    sourceFieldValue = source[name] ;

                if(isObject(destFieldValue) || isArray(destFieldValue)){

                    merge(destFieldValue , sourceFieldValue) ;

                }else{

                    dest[name] = source[name] ;
                }
            }

        }else if(isArray(dest)){

            for(let item of source){

                if(!dest.includes(item)){

                    dest.push(item) ;
                }
            }
        }
    }
 }

 function main(...values){

    let result ;

    for(let value of values){

        if(!isDefined(result)){

            if(isObject(value)){

                result = {} ;
            
            }else if(isArray(value)){

                result = [] ;
            }
        }

        merge(result , value) ;
    }

    return result ;
 }

 