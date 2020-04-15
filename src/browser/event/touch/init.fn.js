
/**
 * 
 * 实始化事件应用环境
 * 
 * @import add from browser.event.listener.add
 * 
 * @param {HTMLElement} target 事件应用环境元素
 * 
 */

function preventDefault(e){

    switch(e.target.tagName){

        case 'INPUT':

            return ;
    }

    e.preventDefault() ;
}

function main(target){

    add(target , 'touchstart' , preventDefault) ;

    add(target , 'touchmove' , preventDefault) ;
}
