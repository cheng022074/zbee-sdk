
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
 * @import getId from id.generate
 * 
 * @class
 * 
 */

 const createConvertFn = mapping => data => data[mapping],
       defaultGetFn = data => data,
       defaultEqualsFn = (value , oldValue) => value !== oldValue,
       defaultSetFn = function(value , name){

            this.data[name] = value ;
       },
       {
           assign,
           keys
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

    has(name){

        let {
            fields
        } = this.ZBEE_CURRENT_CLASS ;

        return fields.hasField(name) ;
    }

    get id(){

        let me = this,
        {
            $id
        } = me;

        if($id){

            return $id ;
        }

        let {
            idProperty
        } = me ;

        if(me.has(idProperty)){

            return me.$id =  me.get(idProperty) ;
        
        }

        return me.$id = getId('model-') ;
    }

    get(name){

        let me = this,
        {
            data,
            ZBEE_CURRENT_CLASS
        } = me,
        {
            fields
        } = ZBEE_CURRENT_CLASS,
        field = fields.getField(name);

        if(field){

            return field.get.call(me , data[name]) ;
        }
    }

    set(name , value){

        let values ;

        if(isString(name)){

            values = {
                [name]:value
            } ;

        }else{

            values = name ;
        }
        
        if(isObject(values)){

            let me = this,
            {
                ZBEE_CURRENT_CLASS
            } = me,
            {
                fields
            } = ZBEE_CURRENT_CLASS,
            names = keys(values);

            for(let name of names){

                let field = fields.getField(name);
        
                if(field){
        
                    let value = values[name],
                        oldValue = me.get(name);

                    if(field.equals.call(me , value , oldValue)){

                        field.set.call(me , value , name) ;

                        me.fireEvent('update' , name , value , oldValue) ;
                    }
                }
            }
        }
    }

    onProxyRead(proxy , records){

        if(records.length){

            let me = this ;

            assign(me.data , records[0].data) ;

            me.fireEvent('load') ;
        }
    }

    load(options){

        this.proxy.read(options) ;
    }
 }