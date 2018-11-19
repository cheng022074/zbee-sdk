
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
 * @import is.date
 * 
 * @import format from date.format
 * 
 * @return {data.type.String} 字符串类型 
 * 
 * @once
 * 
 */

return {
    convert(value , {
        dateFormat
    } = {}){

        if(isString(value)){

            return value ;
        }

        if(isNumber(value) || isBoolean(value)){

            return String(value) ;
        }

        if(isDate(value)){

            return format(value , dateFormat);
        }
    },

    name:'string'
} ;
