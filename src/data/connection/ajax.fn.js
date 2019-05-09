
/**
 * 
 * 基于 AJAX 进行数据交互
 * 
 * @import request from .ajax.request
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


    }

    load(url , params , options){

        let me = this,
        {
            loadersMap
        } = me ;

        if(loadersMap.has(url)){

            loadersMap.set(url , me.createLoader(url ,  {
                ...options,
                params
            })) ;
        }

        return loadersMap.get(id)  ;
    }
 }
