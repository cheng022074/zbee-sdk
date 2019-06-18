
/**
 * 
 * 获取事件名称
 * 
 * @import isSupportPointer from is.browser.support.pointer
 * 
 * @import isSupportTouch from is.browser.support.touch
 * 
 * @param {string} name 事件名称
 * 
 * @return {mixed} 返回说明 
 * 
 */

 if(isSupportPointer()){

    switch(name){

        case 'start':

            name = 'down' ;

            break ;

        case 'end':

            name = 'up' ;
    }

    return `pointer${name}` ;

 }else if(isSupportTouch()){

    return `touch${name}` ;
 }

 return `mouse${name}` ;

