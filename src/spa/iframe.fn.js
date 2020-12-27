
/**
 * 
 * 基于 iframe 的 SPA 方案
 * 
 * @import on from event.listener.add
 * 
 * @import addCls from browser.element.class.add
 * 
 * @import removeCls from browser.element.class.remove
 * 
 * @class
 * 
 */

 class main {

    constructor({
        containerEl,
        urls,
        defaultURL,
        cls = 'css-spa-iframe',
        cacheCls = 'css-spa-iframe-cache'
    }){

        let me = this ;

        me.containerEl = containerEl ;

        me.cacheIframeMap = {} ;

        me.cls = cls ;

        me.cacheCls = cacheCls ;

        initCacheIframes.call(me , urls) ;

        me.$url = null ;

        me.isLoading = false ;

        me.url = defaultURL ;
    }

    set url(url){

        let me = this ;

        if(url !== getIframeURL.call(me)){

            me.$url = url ;

            if(me.isLoading){

                return ;
            }

            me.isLoading = true ;

            while(true){

                let iframeEl =  getCacheIframe(url) ;

                if(iframeEl.dataset.url === me.$url){

                    processCacheIframe(iframeEl , url) ;

                    createCacheIframe.call(me , url) ;

                    me.isLoading = false ;

                    break ;
                    
                }else{

                    url = me.$url ;
                }
            }
        }
    }

    get url(){

        return this.$url ;
    }
 }

 function initCacheIframes(urls){

    let me = this ;

    for(let url of urls){

        me.createCacheIframe(url) ;
    }
 }

 function createCacheIframe(url){

    let {
        cacheIframeMap,
        cls,
        cacheCls,
        containerEl
    } = this,
    iframeEl = document.createElement('iframe');

    addCls(iframeEl , [
        cls,
        cacheCls
    ]) ;

    iframeEl.dataset.url = url ;

    containerEl.append(iframeEl) ;

    cacheIframeMap[url] = new Promise(callback => on(iframeEl , 'load' , callback , {
        once:true
    })) ;
 }

 async function getCacheIframe(url){

    let {
        cacheIframeMap
    } = this ;

    return await cacheIframeMap[url] ;
 }

 function processCacheIframe(cacheIframeEl){

    let {
        cacheCls,
        cacheIframeMap
    } = this ;

    removeCls(cacheIframeEl , cacheCls) ;

    delete cacheIframeMap[cacheIframeEl.dataset.url] ;

    return cacheIframeEl ;
 }

 function getIframeURL(){

    let {
        containerEl,
        cacheCls
    } = this ;

    let iframeEl = containerEl.querySelector(`iframe:not(.${cacheCls})`) ;

    if(iframeEl){

        return iframeEl.dataset.url ;
    }
 }