
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
 * @param {string} [config.idProperty = 'id'] 编号字段名称
 * 
 * @return {data.Model} 数据模型类 
 * 
 */

 function main({
     fields,
     idProperty
 }){


    return define(class extends Model{

        static get fieldConfigurations(){

            return fields;
        }

        get idProperty(){

            return idProperty;
        }
    }) ;
 }