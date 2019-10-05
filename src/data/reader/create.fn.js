
/**
 * 
 * 生成数据读取器
 * 
 * @param {object} model 数据模型定义
 * 
 * @param {string} [model.root = '.'] 数据读取根路径
 * 
 * @return {data.Reader} 数据模型对象 
 * 
 */

 const codes = [
     'var get = include("object.value.get") ;',
     'var from = include("array.from");'
 ] ;

 return {
    read:new Function('data' , codes.join(''))
 } ;