
/**
 * 
 * 复制
 * 
 * @param {object} dest 目标对象
 * 
 * @param {object} source 来源对象
 * 
 * @param {string[]} [fields = []] 拷贝字段集合 
 * 
 * @return {object} 目标对象引用
 * 
 */

 for(let field of fields){

    dest[field] = source[field] ;
 }

 return dest ;