
/**
 * 
 * 创建数据记录观察器
 * 
 * @import Observable from mixin.observable
 * 
 * @import define from object.property.inner.define
 * 
 * @import get from object.property.inner.get
 * 
 * @import set from object.property.inner.set
 * 
 * @import has from object.property.inner.has
 * 
 * @import remove from object.property.inner.remove
 * 
 * @return {data.Observable} 数据观察者对象 
 * 
 */

 class main extends mixins({
     mixins:[
        Observable
     ]
 }){

    constructor(){

        super() ;

        define(this , 'bubbleTarget') ;
    }

    belongTo(dataItem){

        if(has(dataItem , 'observable')){

            set(this , 'bubbleTarget' , get(dataItem , 'observable')) ;
        }
    }

    isIndependent(){

        has(this , 'bubbleTarget') ;
    }

    independent(){

        remove(this , 'bubbleTarget') ;
    }
 }