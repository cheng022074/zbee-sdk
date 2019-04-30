
/**
 * 
 * 根据字段创建一个数据模型类
 * 
 * @import Model from data.model value
 * 
 * @param {mixed} fields 字段定义
 * 
 * @return {data.Model} 数据模型类 
 * 
 */

 function main(fields){

    console.log(fields) ;

    return class extends Model{

        static get fieldsConfig(){

            return fields ;
        }
    } ;
 }