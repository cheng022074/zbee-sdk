
/**
 * 
 * 得到对应代码的值键值 
 * 
 * @param {Event} event 键事件对象
 * 
 * @return {mixed} 键值 
 * 
 */

 const KEY_CODES = {
    39:'DIRECTION::RIGHT',
    37:'DIRECTION::LEFT',
    38:'DIRECTION::UP',
    40:'DIRECTION::DOWN',
    13:'ENTER',
    46:'DELETE',
    9:'TAB',
    107:'ADDITION',
    27:'ESC'
 },
 WITH_SHIFT_KEY_CODES = {
   187:'ADDITION'
 };

 function main({
    shiftKey,
    keyCode
 }){

   let value ;

   if(shiftKey){

      value = WITH_SHIFT_KEY_CODES[keyCode] ;
   }

   if(value){

      return value ;
   }

    return KEY_CODES[keyCode] ;
 }