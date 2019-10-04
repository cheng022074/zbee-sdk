
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

        this.$fields = fields ;
    }

    create(data){

        let me = this,
            item = createItem(data , me.$fields) ;

        item.$parent = me ;
    }
 }