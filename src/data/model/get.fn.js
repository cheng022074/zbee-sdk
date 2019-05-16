/**
 * 
 * 获取数据模型类引用
 * 
 * @import create from class.create.option
 * 
 * @import is.class
 * 
 * @import is.string
 * 
 * @import is.function
 * 
 * @param {mixed} model 数据模型名称
 * 
 * @return {data.Model} 模型类引用
 * 
 */

 if(isString(model)){

    model = include(`data.model.${model}`) ;
 }

 if(isFunction(model)){

    return model() ;
 }

 if(isClass(model)){

    return model ;
 }