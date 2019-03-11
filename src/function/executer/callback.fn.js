
/**
 * 
 * 添加回调函数
 * 
 * @import get from function.get
 * 
 * @param {string | function} callback 回调函数
 * 
 * @return {function.Executer} 函数执行器本身
 * 
 */

let me = this,
{
    callbacks
} = me;

callbacks.push(get(callback)) ;

return me ;