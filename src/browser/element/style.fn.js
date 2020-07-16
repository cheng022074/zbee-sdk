
/**
 * 
 * 获得元素的样式
 * 
 * @import is.array
 * 
 * @import get from .style
 * 
 * @param {HTMLElement} el 元素
 * 
 * @param {string|array} name 样式名称
 * 
 * @param {boolean} [isNumber = false] 是否输出为数字 
 * 
 * @return {mixed} 样式值 
 * 
 */

 if(isArray(name)){

    let names = name,
        result = {};

    for(let name of names){

        result[name] = get(el , name , isNumber) ;
    }

    return result ;
 }

 let value = getComputedStyle(el , null)[name] ;

 if(isNumber){

    return parseFloat(value) ;
 }

 return value ;