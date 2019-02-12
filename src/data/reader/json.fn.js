
/**
 * 
 * JSON 数据读取器
 * 
 * @import get from object.get
 * 
 * @import getReader from data.reader
 * 
 * @param {object} [config = {}] 读取参数设置
 * 
 * @param {string} [config.rootProperty = '.'] 读取数据的根
 * 
 * @param {string} [config.fields] 读取数据记录的字段项
 * 
 * @return {data.reader.JSON} JSON 数据读取器对象引用
 * 
 * @scoped
 * 
 */

 class Reader{

    getMappingData(data , mapping){

        return get(data , mapping) ;
    }
 }

 function main(config){

    return new Reader(config) ;
 }