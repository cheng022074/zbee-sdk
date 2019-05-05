
/**
 * 
 * 批量监听字段存储器的事件
 * 
 * @import isStore from is.data.store
 * 
 * @param {object} listeners 一组事件监听
 * 
 */

let {
    data
 } = this,
 keys = Object.keys(data);

 for(let key of keys){

    let value = data[key] ;

  
    if(isStore(value)){

        value.addListeners(listeners) ;
    }
}

 