
/**
 * 
 * 数据模型
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
 * 
 * @import from from array.from
 * 
 * @import Store from data.store value
 * 
 * @import getModel from data.model.get
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
       defaultSetOrGetFn = data => data,
       {
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

        (me.proxy = createProxy(assign2({} , proxy , {
            type:'memory',
            model:ZBEE_CURRENT_CLASS,
            reader:{
                type:'json',
                isModelData:false
            }
        }))).addListeners({
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

    bindStore(store){

        this.store = store ;
    }

    unbindStore(){

        delete this.store ;
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

    onProxyRead(proxy , records){

        if(records.length){

            let me = this ;

            assign(me.data , records[0]) ;

            me.fireEvent('load') ;
        }
    }

    load(options){

        this.proxy.read(options) ;
    }

    static get fieldConfigurations(){

        return [] ;
    }

    static get fields(){

        let me = this,
        {
            $fields
        } = me;

        if($fields){

            return $fields ;
        }

        let {
            fieldConfigurations
        } = me,
        fields = [];

        for(let fieldConfig of fieldConfigurations){

            if(isString(fieldConfig)){

                fieldConfig = {
                    name:fieldConfig,
                    convert:createConvertFn(fieldConfig),
                    get:defaultSetOrGetFn,
                    set:defaultSetOrGetFn
                } ;

            }else if(isObject(fieldConfig)){

                let {
                    name,
                    convert,
                    mapping,
                    get = defaultSetOrGetFn,
                    set = defaultSetOrGetFn,
                    ...otherFieldConfig
                } = fieldConfig ;

                if(mapping){

                    convert = createConvertFn(mapping) ;
                
                }

                convert = convert || createConvertFn(name) ;

                fieldConfig = {
                    name,
                    convert,
                    get,
                    set,
                    ...otherFieldConfig
                } ;
            }

            if(isObject(fieldConfig)){

                let {
                    hasMany,
                    hasOne,
                    belongsTo
                } = fieldConfig ;

                let association ;

                if(hasMany){

                    association = {
                        type:'hasMany',
                        ...hasMany
                    } ;

                    delete fieldConfig.hasMany ;
                }

                if(hasOne){

                    association = {
                        type:'hasOne',
                        ...hasOne
                    } ;
                    
                    delete fieldConfig.hasOne ;
                }


                if(belongsTo){

                    association = {
                        type:'belongsTo',
                        ...belongsTo
                    } ;

                }

                if(association){

                    assign(fieldConfig , getAssociationConfig(me , association)) ;
                }
            }

            fields.push(fieldConfig) ;
        }

        return me.$fields = new Fields(fields) ;
    }
 }

 function getFieldIndex(name){

    let {
        names
    } = this ;

    return names.indexOf(name) ;
 }

 class Fields{

    constructor(fields){

        let me = this,
            names = [],
            innerFields = [] ;

        for(let field of fields){

            let {
                name
            } = field ;

            if(!names.includes(name)){

                innerFields.push(field) ;

                names.push(name) ;
            
            }else{

                innerFields[names.indexOf(name)] = field ;
            }
        }

        me.fields = innerFields ;

        me.names = names ;
    }

    getField(name){

        let me = this,
            index = getFieldIndex.call(me , name);

        if(index !== -1){

           return me.fields[index] ;
        }
    }

    hasField(name){

        return getFieldIndex.call(this , name) !== -1 ;
    }

    get converts(){

        let {
            fields
        } = this,
        converts = {};
    
        for(let {
            name,
            convert
        } of fields){
    
            converts[name] = convert ;
        }

        return converts ;
    }
 }

 function getAssociationConfig(model , {
     model:AssociationModel,
     autoLoad,
     type,
     associationKey,
     assocationMode = 'local-data'
 }){

    if(AssociationModel){

        AssociationModel = getModel(associationModel) ;
    
    }else{

        AssociationModel = model ;
    }

    switch(type){

        case 'hasMany':

            switch(assocationMode){

                case 'local-data':

                    return {
                        convert:data => new Store({
                            model:AssociationModel,
                            autoLoad,
                            data,
                            proxy:{
                                reader:{
                                    rootProperty:associationKey
                                }
                            }
                        })
                    } ;

                case 'local-key':

                    return {
                        convert:data => from(createConvertFn(associationKey)(data)),
                        get:keys => this.store.getByIds(keys)
                    } ;

                case 'remote-key':

                    // 等待远程 AJAX 代理实现

                break ;
            }

            break ;

        case 'hasOne':
        case 'belongsTo':

                switch(assocationMode){

                    case 'local-data':
    
                        return {
                            convert:data => new AssociationModel({
                                autoLoad,
                                data,
                                proxy:{
                                    reader:{
                                        rootProperty:associationKey
                                    }
                                }
                            })
                        } ;
    
                    case 'local-key':

                        return {
                            convert:createConvertFn(associationKey),
                            get(key){

                                let {
                                    store
                                } = this ;

                                if(store){

                                    return store.getById(key) ;
                                }

                                
                            }
                        } ;
    
                    case 'remote-key':

                        // 等待远程 AJAX 代理实现
    
                    break ;
                }
    }
 }