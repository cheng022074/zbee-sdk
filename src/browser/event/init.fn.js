
/**
 * 
 * 实始化事件应用环境
 * 
 * @param {HTMLElement} [target = window] 事件应用环境元素，不填写则是当前窗口引用
 * 
 * @once
 * 
 * @scoped
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

    target.addEventListener('touchstart' , preventDefault) ;

    target.addEventListener('touchmove' , preventDefault) ;
}
