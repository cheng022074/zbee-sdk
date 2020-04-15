
/**
 * 
 * 右键事件配置
 * 
 * @import bind from function.bind
 * 
 * @import longpress from ..longpress
 *
 * @return {array} 事件配置  
 * 
 */

 return [
    'contextmenu',
    {
        event:'touchstart',
        listener:bind(longpress , this , [
            'contextmenu'
        ])
    }
] ;