
/**
 * 
 * 设置数据模型的值
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
 * 
 * @import isStore from is.data.store
 * 
 * @import isModel from is.data.model
 * 
 * @param {mixed} name 属性名称或者是一组属性值
 * 
 * @param {mixed} [value] 属性值
 * 
 */

 function getFields(){

    return this.constructor.fields.fields ;
 }

 function set(values){

    let me = this,
    fields = getFields.call(me),
    {
        data
    } = me;

    for(let {
        name
    } of fields){

        if(values.hasOwnProperty(name)){

            let target = data[name],
                value = values[name];

            if(isStore(target)){

                target.loadData(value) ;
            
            }else if(isModel(target)){

                target.loadData(value) ;
            
            }else{

                let oldValue = data[name] ;

                me.fireEvent('update' , name , data[name] = values[name] , oldValue) ;
            }
        }
    }
 }

 function main(name , value){

    let me = this ;

    if(isString(name)){

        set.call(me , {
            [name]:value
        }) ;
    
    }else if(isObject(name)){

        set.call(me , name) ;
    }
 }

 