
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
 * @class
 * 
 */

 const createConvertFn = mapping => data => data[mapping],
       defaultSetOrGetFn = data => data,
       {
           assign
       } = Object;

 class main{

    static get fieldConfigurations(){

        return {} ;
    }

    static get fields(){

        let me = this,
        {
            fieldConfigurations
        } = me,
        fieldNames = [];

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
                    name,
                    hasMany,
                    hasOne,
                    belongsTo
                } = fieldConfig ;

                if(fieldNames.includes(name)){

                    continue ;
                }

                fieldNames.push(name) ;

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
        }
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