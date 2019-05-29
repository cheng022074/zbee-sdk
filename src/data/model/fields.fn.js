
/**
 * 
 * 获取数据字段定义集合
 * 
 * @import is.string
 * 
 * @import from from array.from
 * 
 * @import isObject from is.object.simple
 * 
 * @import is.defined
 * 
 * @import getModel from data.model.get
 * 
 * @import Store from data.store value
 * 
 * @return {data.Fields} 字段定义集合 
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

 function main(){

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
                get:defaultGetFn,
                equals:defaultEqualsFn,
                set:defaultSetFn
            } ;

        }else if(isObject(fieldConfig)){

            let {
                name,
                convert,
                mapping,
                persistent = false,
                get = defaultGetFn,
                equals = defaultEqualsFn,
                set = defaultSetFn,
                defaultValue,
                ...otherFieldConfig
            } = fieldConfig ;

            if(persistent){

                convert = () => defaultValue ;

            }else{

                if(mapping){

                    convert = createConvertFn(mapping) ;
                }

                convert = convert || createConvertFn(name) ;

                if(isDefined(defaultValue)){

                    let oldConvert = convert;

                    convert = (data) => {

                        let value = oldConvert(data) ;
                        
                        return isDefined(value) ? value : defaultValue ;

                    } ;
                }
            }

            fieldConfig = {
                name,
                convert,
                get,
                set,
                equals,
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

 function getFieldIndex(name){

    let {
        names
    } = this ;

    return names.indexOf(name) ;
 }