
/**
 * 
 * 根据字段创建一个数据模型类
 * 
 * @import Model from data.model value
 * 
 * @param {object} [config = {}] 配置
 * 
 * @param {mixed} [config.fields = []] 字段定义
 * 
 * @param {string} [config.idProperty] 编号字段名称
 * 
 * @return {data.Model} 数据模型类 
 * 
 */

 function main({
     fields,
     idProperty
 }){

    return class extends Model{

        static get fieldsConfig(){

            return fields;
        }

        get idProperty(){

            return idProperty || super.idProperty;
        }
    } ;
 }