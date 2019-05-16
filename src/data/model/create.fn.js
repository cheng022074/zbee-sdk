
/**
 * 
 * 根据字段创建一个数据模型类
 * 
 * @import Model from data.model value
 * 
 * @import get from data.model.get
 * 
 * @import define from class.define
 * 
 * @param {object} [config = {}] 配置
 * 
 * @param {mixed} [config.fields = []] 字段定义
 * 
 * @param {string} [config.idProperty] 编号字段名称
 * 
 * @param {mixed} [config.modelClass] 数据模型引用
 * 
 * @return {data.Model} 数据模型类 
 * 
 */

 function main({
     fields,
     idProperty,
     modelClass
 }){

    if(!modelClass){

        modelClass = Model ;
    
    }else{

        modelClass = get(modelClass) ;
    }

    return define(class extends modelClass{

        static get fieldsConfig(){

            return fields;
        }

        get idProperty(){

            return idProperty || super.idProperty;
        }
    }) ;
 }