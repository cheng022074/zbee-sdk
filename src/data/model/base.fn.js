
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
 * @class
 * 
 */

 const createConvertFn = mapping => data => data[mapping],
       defaultSetOrGetFn = data => data,
       {
           assign
       } = Object;

 class main{

    constructor({
        proxy = {},
        data
    } = {}){

        let me = this;

        proxy = me.proxy = createProxy(assign2({} , proxy , {
            type:'memory',
            model:me.ZBEE_CURRENT_CLASS,
            reader:{
                type:'json'
            }
        })) ;

        proxy.addListeners({
            read:'onProxyRead',
            scope:me
        }) ;

  
        if(data && isMemoryProxy(proxy)){

            proxy.read(data) ;
        }
    }

    onProxyRead(proxy , data){

        console.log('proxy-load' , data) ;

        //this.set(data) ;
    }

    load(options){

        me.proxy.load(options) ;
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
                    set = defaultSetOrGetFn
                } = fieldConfig ;

                if(mapping){

                    convert = createConvertFn(mapping) ;
                
                }

                convert = convert || createConvertFn(name) ;

                fieldConfig = {
                    name,
                    convert,
                    get,
                    set
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

                }

                if(hasOne){

                    association = {
                        type:'hasOne',
                        ...hasOne
                    } ;

                }


                if(belongsTo){

                    association = {
                        type:'belongsTo',
                        ...belongsTo
                    } ;

                }

                if(association){

                    assign(fieldConfig , getAssociationConfig(model , association)) ;
                }
            }

            fields.push(fieldConfig) ;
        }

        return me.$fields = new Fields(fields) ;
    }
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
                            get:key => this.store.getById(key)
                        } ;
    
                    case 'remote-key':

                        // 等待远程 AJAX 代理实现
    
                    break ;
                }
    }
 }