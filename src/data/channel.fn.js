
/**
 * 
 * 数据通道
 * 
 * @import Observable from mixin.observable
 * 
 * @import define from object.property.inner.define
 * 
 * @import createProxy from object.proxy
 * 
 * @import is.string
 * 
 * @class
 * 
 */

const { resolveInclude } = require("ejs");

class main extends mixins({
    mixins:[
        Observable
    ]
}){

    constructor(target){

        let me = this ;

        if(target){

            define(me , 'bubbleTarget' , target) ;

            define(me , 'target' , createProxy(target)) ;
        }

        super() ;
    }

    static client(classNames){

        classNames.reverse() ;

        classNames.unshift('data.channel.client') ;

        let target ;

        for(let className of classNames){

            target = include(className)(target) ;
        }

        return target ;
    }
 }