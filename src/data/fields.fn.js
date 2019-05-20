/**
 * 
 * 标准化字段集合
 * 
 * @import from from array.from
 * 
 * @import is.string
 * 
 * @import empty from function.empty value
 * 
 * @import get from object.value.get
 * 
 * @import is.defined
 * 
 * @import is.empty
 * 
 * @import getModel from data.model.get
 * 
 * @import createStore from data.store.create
 * 
 * @param {mixed} fields 字段集合
 * 
 * @param {data.Model} [model] 数据模型
 * 
 * @return {mixed} 标准化后的字段集合
 * 
 */

 function main(fields , currentModel){

    if(fields instanceof Fields){

        return fields ;
    }

    fields = from(fields) ;

    let result = [] ;

    for(let field of fields){

        if(isString(field)){

            result.push({
                name:field,
                convert:data => get(data , field)
            }) ;
        
        }else{

            let {
                name,
                mapping,
                convert,
                defaultValue,
                hasMany,
                belongsTo
            } = field;

            if(mapping){

                if(isDefined(defaultValue)){

                    convert = data =>{

                        let value = get(data , mapping) ;

                        if(isEmpty(value)){

                            return defaultValue ;
                        }

                        return value ;
                    } ;
                
                }else{

                    convert = data => get(data , mapping) ;
                }

            }else if(hasMany){

                let {
                    model = currentModel,
                    autoLoad,
                    associatedKey,
                    associatedMode = 'data'
                } = hasMany ;

                model = getModel(model) ;

                if(model){

                    switch(associatedMode){

                        case 'data':

                            convert = data =>{

                                let store = createStore({
                                    model,
                                    autoLoad,
                                    defaultLoadOptions:data,
                                    proxy:{
                                        name:'memory',
                                        reader:{
                                            rootProperty:associatedKey
                                        }
                                    }
                                }) ;
        
                                return store ;
                            } ;

                            break ;

                        case 'reference':

                                convert = () =>{

                                    return store.getById(data[associatedName]) ;
                                } ;

                        break ;
                    }
                
                }else{

                    convert = empty ;
                }

            }else if(belongsTo){

                let {
                    model = currentModel,
                    associatedName
                } = belongsTo ;

                model = getModel(model) ;

                if(model){

                    convert = () =>{

                        return store.getById(data[associatedName]) ;
                    } ;
                
                }else{

                    convert = empty ;
                }
            }

            result.push({
                name,
                convert:convert || (() => undefined)
            }) ;
        }
    }


    return new Fields(result) ;
 }

 class Fields{

    constructor(fields){

        let names = [],
            result = [] ;

        for(let field of fields){

            let {
                name
            } = field ;

            if(!names.includes(name)){

                result.push(field) ;

                names.push(name) ;
            
            }else{

                result[names.indexOf(name)] = field ;
            }
        }

        this.fields = result ;
    }

    get names(){

        let {
            fields
        } = this,
        names = [];
    
        for(let {
            name
        } of fields){
    
            names.push(name) ;
        }
    
        return names ;
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