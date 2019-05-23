/**
* 
* 获取数据模型类引用
* 
* @import Model from data.model value
* 
* @import isModelClass from is.data.model.class
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

if(isModelClass(model)){

   return model ;
}

return Model ;