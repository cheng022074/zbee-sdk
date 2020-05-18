
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
 * @import isItem from is.data.item
 * 
 * @import isRecord from is.data.record
 * 
 * @import isRecordset from is.data.recordset
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

    get  belongToObservable(){

        return  get(this , 'bubbleTarget') ;
    }

    belongTo(dataItem){

        let me = this ;

        if(me.isIndependent && isItem(dataItem)){

            set(me , 'bubbleTarget' , get(dataItem , 'observable')) ;
        }
    }

    get isIndependent(){

        return !get(this , 'bubbleTarget') ;
    }

    independent(){

        let me = this,
        {
            isIndependent
        } = me ;

        if(isIndependent){

            return ;
        }
   
        set(me , 'bubbleTarget' , null) ;
    }
 }