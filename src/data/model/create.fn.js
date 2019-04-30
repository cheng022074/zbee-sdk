
/**
 * 
 * 根据字段创建一个数据模型类
 * 
 * @import Model from data.model value
 * 
 * @param {mixed} [fields = []] 字段定义
 * 
 * @param {string} [idProperty = 'id'] 编号字段名称
 * 
 * @return {data.Model} 数据模型类 
 * 
 */

 function main(fields , idProperty){

    return class extends Model{

        static get fieldsConfig(){

            return fields ;
        }

        get idProperty(){

            return idProperty ;
        }
    } ;
 }