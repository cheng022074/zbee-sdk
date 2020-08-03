
/**
 * 
 * 实始化事件应用环境
 * 
 * @import listeners from .init.listeners value
 * 
 * @import add from browser.event.listener.add
 * 
 * @import os from os.name value
 * 
 * @param {HTMLElement} target 事件应用环境元素
 * 
 */

 switch(os){

    case 'iOS':
    case 'Android':

        add(window , listeners) ;

    break ;

    default:

        add(target , listeners) ;
 }