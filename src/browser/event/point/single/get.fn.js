
/**
 * 
 * 获取事件的属性值
 * 
 * @import from from array.from
 * 
 * @param {Event} e 事件对象
 * 
 * @param {mixed} names 属性值
 * 
 * @return {object} 对应属性值的集合
 * 
 */

 names = from(names) ;

 if(e.hasOwnProperty('changedTouches')){

    let {
        changedTouches
    } = e ;

    if(changedTouches.length){

        e = changedTouches[0] ;
    }
 }

 let result = {} ;

 for(let name of names){

    result[name] = e[name] ;
 }

 return result ;