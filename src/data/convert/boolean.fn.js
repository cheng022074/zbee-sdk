
/**
 * 
 * 将指定数据转换成布尔型
 * 
 * @import is.boolean
 * 
 * @import is.string
 * 
 * @import is.number
 *
 * @param {mixed} data 数据
 * 
 * @return {boolean} 转换后的布尔型 
 * 
 */

 if(isBoolean(data)){

    return data ;
 
 }else if(isString(data)){

    switch(data){

        case 'true':

            return true ;

        case 'false':

            return false ;
    }
    
 }else if(isNumber(data)){

    return Boolean(data) ;
 }

 return data !== undefined && data !== null ;