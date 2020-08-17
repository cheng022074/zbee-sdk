/**
 * 
 * 字面量
 * 
 * @param {object} options 配置
 * 
 * @param {string} options.datatype 数据类型
 * 
 * @param {string} options.value 值
 * 
 * @return {string} 代码
 * 
 */

 switch(datatype){

    case 'string':

        return `'${value}'` ;

    case 'number':

        return String(value) ;

    case 'boolean':

        return value ? 'true' : 'false' ;
 }