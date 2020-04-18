
/**
 * 
 * 右键事件配置
 * 
 * @import bind from function.bind
 * 
 * @import longpress from ..longpress
 * 
 * @import contextmenu from .contextmenu
 *
 * @return {array} 事件配置  
 * 
 */

 return [
    'mouseup',
    {
        event:'contextmenu',
        listener:contextmenu
    },
    {
        event:'touchstart',
        listener:bind(longpress , this , [
            'contextmenu'
        ])
    }
] ;