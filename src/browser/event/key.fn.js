
/**
 * 
 * 得到对应代码的值键值 
 * 
 * @import is.defined
 * 
 * @param {Event} event 键事件对象
 * 
 * @return {mixed} 键值 
 * 
 */

 const KEY_CODES = {
    39:'RIGHT',
    37:'LEFT',
    38:'UP',
    40:'DOWN',
    13:'ENTER',
    46:'DELETE',
    9:'TAB',
    107:'+',
    187:'=',
    27:'ESC'
 };

 function main({
    shiftKey,
    keyCode
 }){

   if(isDefined(shiftKey) && isDefined(keyCode)){

      return {
         shift:shiftKey,
         key:KEY_CODES[keyCode],
         code:keyCode
      } ;
   }
 }