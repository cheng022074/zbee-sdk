
/**
 * 
 * 基于 AJAX 进行数据交互
 * 
 * @import Connection from data.connection value
 * 
 * @require url-join
 * 
 * @param {object}  配置
 * 
 */

 const join = require('url-join') ;

 class main extends Connection{

    constructor({
        ajax
    }){

        super() ;

        let me = this,
        {
            url:ajaxURL,
            request
        } = ajax ;

        me.ajaxURL = ajaxURL ;

        me.request = request ;
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

    validateMessage(subscriber , {
        subscriber:messageSubscriber
    }){

        return subscriber === messageSubscriber ;
    }

    processMessage(subscriber , data){

        return {
            subscriber,
            data
        } ;
    }

    async doSubscriberOpen(subscriber , url , params){

        this.acceptMessage(subscriber , await request(url , params)) ;

    }
 }
