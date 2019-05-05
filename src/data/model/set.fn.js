
/**
 * 
 * 设置数据模型的值
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
 * 
 * @param {mixed} name 属性名称或者是一组属性值
 * 
 * @param {mixed} [value] 属性值
 * 
 */

 function getFields(){

    return this.constructor.fields ;
 }

 function set(values){

    let fields = getFields(),
    {
        data
    } = this;

    for(let {
        name
    } of fields){

        if(values.hasOwnProperty(name)){

            data[name] = values[name] ;
        }
    }
 }

 function main(name , value){

    if(isString(name)){

        set({
            [name]:value
        }) ;
    
    }else if(isObject(name)){

        set(name) ;
    }
 }

 