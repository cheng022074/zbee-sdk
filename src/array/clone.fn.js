
/**
 * 
 * 对于数组进行拷贝
 * 
 * @import is.array
 * 
 * @import isObject from is.object.simple
 * 
 * @import is.date
 * 
 * @import array.clone
 * 
 * @import assign from object.assign
 * 
 * @import date.clone
 * 
 * @param {array} data 数组
 * 
 * 
 */

 let result = [] ;

 for(let item of data){

    if(isObject(item)){

        item = assign({} , item) ;

    }else if(isArray(item)){

        item = arrayClone(item) ;
    
    }else if(isDate(item)){

        item = dateClone(item) ;
    }

    result.push(item) ;
 }

 return result ;