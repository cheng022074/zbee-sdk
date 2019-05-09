
/**
 * 
 * 基于 AJAX 进行数据交互
 * 
 * @import request from .ajax.request
 * 
 * @import createLoader from .ajax.loader
 * 
 * @class
 * 
 */

 class main{

    constructor(url){

        let me = this ;

        me.url = url ;

        me.loadersMap = new Map() ;
    }

    createLoader(url , options){

        return createLoader(this , url , options) ;
    }

    tryLoad(url , params){

        return request(url , params) ;
    }

    load(url , params , options){

        let me = this,
        {
            loadersMap
        } = me,
        loader;

        if(loadersMap.has(url)){

            loadersMap.set(url , loader = me.createLoader(url ,  {
                ...options,
                params
            })) ;
        
        }else{

            loader = loadersMap.get(url) ;

            loader.load(params) ;
        }

        return loader  ;
    }
 }
