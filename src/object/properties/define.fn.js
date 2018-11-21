/**
 * 
 * 定义一组缓存属性
 * 
 * @import defineProperty from object.property.define
 *
 * @param {object} target 目标对象
 * 
 * @param {string[]} names 属性名称
 * 
 */

 for(let name of names){

    defineProperty(target , name) ;
 }