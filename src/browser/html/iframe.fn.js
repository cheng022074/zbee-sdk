/**
 * 
 * 获得 iframe 的 contentWindow 引用
 * 
 * @import is.html.iframe
 * 
 * @param {HTMLElement} iframeEl iframe元素引用
 * 
 * @return {Window}
 * 
 */

if(!isHtmlIframe(iframeEl)){

    return ;
}

return new Promise(callback =>{

    switch(iframeEl.readyState){

        case 'complete':
        case 'loaded':

            callback(iframeEl) ;

            break ;

        default:
        
            iframeEl.addEventListener('load' , () =>{

                callback(iframeEl) ;

            }) ;
    }

}) ;