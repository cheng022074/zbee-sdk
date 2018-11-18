
/**
 * 
 * 字符串类型
 * 
 * @import is.string
 * 
 * @import is.boolean
 * 
 * @import is.number
 * 
 * @return {data.type.String} 字符串类型 
 * 
 * @once
 * 
 */

return {
    convert(value){

        if(isString(value)){

            return value ;
        }

        if(isNumber(value) || isBoolean(value)){

            return String(value) ;
        }
    },

    name:'string'
} ;
