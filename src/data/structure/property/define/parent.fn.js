
/**
 * 
 * 定义父级数据属性
 * 
 * @param {mixed} structure 数据结构
 * 
 * @param {mixed} parentStructure 父级数据结构
 * 
 */

 Object.defineProperty(structure , '__ZBEE_DATA_PARENT__' , {
    value:parentStructure,
    writable:true
 }) ;