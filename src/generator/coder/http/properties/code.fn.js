
/**
 * 
 * 生成的代码
 * 
 * @import getValue from generator.coder.value
 * 
 * @import getVar from generator.coder.var
 * 
 * 
 */

 let {
     el
 } = this ;


 return getVar(el , `await include('http').${el.getAttribute('method') || 'get'}('${el.getAttribute('uri')}' , ${getValue(el , 'config')}) ;`) ;
