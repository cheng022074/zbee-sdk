
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
 * @import data.channel.client
 * 
 * @import from from array.from
 * 
 * @class
 * 
 */

class main extends mixins({
    mixins:[
        Observable
    ]
}){

    constructor(target){

        let me = this ;

        if(target){

            define(target , 'bubbleTarget' , me) ;

            define(me , 'target' , createProxy(target)) ;
        }
    }

    static client(classNames){
        
        classNames = from(classNames) ;

        classNames.reverse() ;

        classNames.push('data.channel.client') ;

        let target ;

        for(let className of classNames){

            target = new (include(className)())(target) ;
        }

        return target ;
    }
 }