
/**
 * 
 * 基于 iframe 的 SPA 方案
 * 
 * @import add from event.listener.add
 * 
 * @class
 * 
 */

 class main {

    constructor({
        containerEl,
        urls,
        defaultURL,
        cls = 'zbee-spa-iframe',
        cacheCls = 'zbee-spa-iframe-cache'
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

    async set url(url){

        let me = this ;

        if(url !== getIframeURL.call(me)){

            me.$url = url ;

            if(me.isLoading){

                return ;
            }

            me.isLoading = true ;

            while(true){

                let iframeEl = await getCacheIframe(url) ;

                if(url === me.$url){

                    processCacheIframe(iframeEl) ;

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
        iframeEl,
        cls,
        cacheCls,
        containerEl
    } = this,
    iframeEl = document.createElement('iframe');

    iframeEl.className = `${cls} ${cacheCls}` ;

    containerEl.append(iframeEl) ;

    cacheIframeMap[url] = new Promise(callback => add(iframeEl , 'load' , callback , {
        once:true
    })) ;
 }

 async function getCacheIframe(url){

    let {
        cacheIframeMap
    } = this ;

    return await cacheIframeMap[url] ;
 }

 function processCacheIframe(cacheIframe){


 }

 function getIframeURL(){


 }