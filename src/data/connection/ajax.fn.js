
/**
 * 
 * 基于 AJAX 进行数据交互
 * 
 * @import request from .ajax.request
 * 
 * @import assign from object.assign
 * 
 * @import createLoader from .ajax.loader
 * 
 * @param {object} options 配置
 * 
 */

 class main{

    constructor({
        url,
        defaultLoaderOptions = {},
        processData = message => message
    }){

        let me = this ;

        me.url = url ;

        me.loadersMap = new Map() ;

        me.defaultLoaderOptions = defaultLoaderOptions ;

        me.processData = processData;
    }

    createLoader(url , options){

        return createLoader(this , url , options) ;
    }

    tryLoad(url , params){

        return request(url , params) ;
    }

    load(url , params = {} , options){

        let me = this,
        {
            loadersMap,
            defaultLoaderOptions
        } = me,
        loader;

        if(!loadersMap.has(url)){

            loadersMap.set(url , loader = me.createLoader(url ,  assign({} , defaultLoaderOptions , {
                ...options,
                params
            }))) ;
        
        }else{

            loader = loadersMap.get(url) ;

            loader.load(params) ;
        }

        return loader  ;
    }
 }
