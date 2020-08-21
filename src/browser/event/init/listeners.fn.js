
/**
 * 
 * 函数实现说明
 * 
 * @import prevent from ..prevent
 * 
 * @import stop from ..stop
 * 
 * @return {object} 初始化事件应用环境所使用到的事件 
 * 
 * @once
 * 
 */

 const doPrevent = e => {

    let {
        target
    } = e ;

    switch(target.nodeName){

        case 'INPUT':
        case 'TEXTAREA':

            return ;

        default:

            if(target.contentEditable === 'true'){

                return ;
            }
    }

    prevent(e) ;
}

return {
    touchstart:doPrevent,
    touchmove:doPrevent,
    mousedown:doPrevent,
    keydown:doPrevent,
    mousewheel:doPrevent,
    contextmenu(e){

        stop(e) ;

        prevent(e) ;
    }
} ;