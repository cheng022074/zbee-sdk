
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
 * @import remove from object.property.inner.remove
 * 
 * @import has from object.property.inner.has
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

    constructor(item){

        super() ;

        let me = this ;

        me.item = item ;

        define(me , 'bubbleTarget') ;
    }

    get  belongToObservable(){

        return  get(this , 'bubbleTarget') ;
    }

    belongTo(dataItem , index){

        let me = this ;

        me.independent() ;
        
        if(me.isIndependent && has(dataItem , 'observable')){

            set(this , 'bubbleTarget' , get(dataItem , 'observable')) ;

            me.index = index ;
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

        console.log(isIndependent , get(this , 'bubbleTarget')) ;

        let {
            item:currentItem,
            index,
            belongToObservable
        } = me,
        {
            item:belongToItem
        } = belongToObservable;

        if(isRecord(belongToItem)){

            belongToItem[index] = null;
            
            if(item[index] === null){

                remove(me , 'bubbleTarget') ;
            }
        
        }else{

            belongToItem.splice(index , 1) ;

            if(belongToItem[index] !== currentItem){

                remove(me , 'bubbleTarget') ;
            }
        }
    }
 }