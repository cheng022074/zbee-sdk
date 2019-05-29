
/**
 * 
 * 数据模型
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
 * 
 * @import createProxy from data.proxy.create
 * 
 * @import isMemoryProxy from is.proxy.memory
 * 
 * @import assign2 from object.assign.if
 * 
 * @import observable from mixin.observable
 * 
 * @class
 * 
 */

 const {
           assign
       } = Object;

 class main extends mixins({
     mixins:[
        observable
     ]
 }){

    constructor({
        proxy = {},
        innerData = {},
        data,
        autoLoad
    } = {}){

        super() ;

        let me = this,
        {
            ZBEE_CURRENT_CLASS
        } = me;

        me.fireEventDataCacheCount = 1 ;

        (me.proxy = createProxy(assign2({
            type:'memory',
            model:ZBEE_CURRENT_CLASS,
            reader:{
                type:'json',
                isModelData:false
            }
        } , proxy))).addListeners({
            read:'onProxyRead',
            scope:me
        }) ;

        me.data = innerData || {} ;

        if(data){
            
            let {
                proxy
            } = me ;

            if(isMemoryProxy(proxy)){

                proxy.read(data) ;
            }

        }else if(autoLoad){

            me.load() ;
        }
    }

    get idProperty(){

        return 'id' ;
    }

    get bubbleTarget(){

        return this.store ;
    }

    static get fieldConfigurations(){

        return [] ;
    }

    onProxyRead(proxy , records){

        if(records.length){

            let me = this ;

            assign(me.data , records[0].data) ;

            me.fireEvent('load') ;
        }
    }
 }