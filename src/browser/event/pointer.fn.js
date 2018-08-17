
/**
 * 
 * 获得可以操作的事件对象
 * 
 * @import isTouch from browser.support.touch
 * 
 * @param {Event} e 事件对象
 * 
 * @param {boolean} [valid = false] 在触摸模式下检测是否多指触控
 * 
 * @return {mixed} 可以操作的事件对象 
 * 
 */

if(isTouch()){

    let {
        changedTouches:touches
    } = e ;

    if(valid){

        if(touches.length == 1){

            return touches[0] ;
        }
    
    }else{

        return touches[0] ;
    }
}

return e ;