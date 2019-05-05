/**
 * 
 * 获得当前模型的值
 * 
 * @import is.array
 * 
 * @import is.string
 * 
 * @import copy from object.copy
 * 
 * @param {mixed} [name] 字段名称
 * 
 * @return {mixed} 字段值
 * 
 */

 let {
     data
 } = this ;

 if(name){

    if(isString(name)){

        return data[name] ;
    }

    if(isArray(name)){

        return copy({} , data , name) ;
    }

    return ;
 }

 return Object.assign({} , data) ;