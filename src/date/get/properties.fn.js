
/**
 * 
 * 获得指定日期的属性值
 * 
 * @import from from array.from
 * 
 * @param {Date} date 日期对象
 * 
 * @param {string[]} [names] 属性名称集合
 * 
 * @return {object} 日期描述
 * 
 */

 names = from(names) ;

 let result = {} ;

 for(name of names){

    let value ;

    switch(name){

        case 'year':

            value = date.getFullYear() ;

            break ;

        case 'month':

            value = date.getMonth() + 1 ;

            break ;

        case 'day':

            value = date.getDate() ;
    }

    result[name] = value ;
 }

 return result ;