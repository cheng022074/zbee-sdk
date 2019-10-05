
/**
 * 
 * 数据组
 * 
 * @import Observable from mixin.observable
 * 
 * @import createItem from ..item
 * 
 * @param {object} data 初始化数据
 * 
 * @param {object} fields 字段定义
 * 
 */

 class main extends mixins({
     extend:Array,
     mixins:[
        Observable
     ]
 }){

    constructor(data , fields){

        super() ;

        let me = this ;

        me.$fields = fields ;

        me.suspendEvents() ;

        for(let item of data){

            me.push(me.create(item)) ;
        }

        me.resumeEvents() ;
    }

    get $bubbleTarget(){

        return this.$parent ;
    }

    create(data){

        let me = this,
            item = createItem(data , me.$fields) ;

        item.$parent = me ;
    }

    push(){


    }

    pop(){


    }

    unshift(){

        
    }

    shift(){


    }
 }