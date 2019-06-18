
/**
 * 
 * 如果当前设备处于多点触控时返回，其它时候返回空
 * 
 * @param {Event} e 事件对象
 * 
 */

let touches ;

switch(name){

   case 'start':
   case 'move':

       touches = e.touches ;

       break ;

   case 'end':

       touches = e.changedTouches
}

if(touches && touches.length > 1){

    return touches ;
}