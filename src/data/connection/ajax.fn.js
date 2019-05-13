
/**
 * 
 * 基于 AJAX 进行数据交互
 * 
 * @import Connection from data.connection value
 * 
 * @import request from .ajax.request
 * 
 * @require url-join
 * 
 * @param {object} options 配置
 * 
 */

 const join = require('url-join') ;

 class main extends Connection{

    constructor({
        ajax,
        ...options
    }){

        super(options) ;

        let {
            url:ajaxURL
        } = ajax ;

        this.ajaxURL = ajaxURL ;
    }

    processSubscribeParams(subscriber , params){

        let {
            ajaxURL
        } = this ;

        return [
            join(ajaxURL , subscriber.name),
            params
        ] ;
    }

    async doSubscriberOpen(subscriber , url , params){

        let me = this ;

        subscriber.acceptData(me.processData(await request(url , params))) ;
    }
 }
