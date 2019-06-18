
/**
 * 
 * 获得单一的事件对象
 * 
 * @param {Event} e 事件对象
 * 
 * @param {string} name 事件名称
 *  
 * @return {mixed} 事件对象 
 * 
 */

 let touches ;

 switch(name){

    case 'start':
    case 'move':

        touches = e.touches ;

        break ;

    case 'end':

        touches = e.changedTouches ;
 }

 if(touches){

    return touches[0] ;
 }

 return e ;