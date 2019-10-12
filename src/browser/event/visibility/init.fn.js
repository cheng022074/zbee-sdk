
/**
 * 
 * 初始化页面隐藏/关闭事件
 * 
 * @import dispatch from ....dispatch
 * 
 */

 document.addEventListener('visibilitychange' , () => dispatch(document , document.visibilityState)) ;