/**
 * 
 * 定义一组缓存属性
 * 
 * @import defineProperty from object.property.define
 *
 * @import is.array
 * 
 * @param {object} target 目标对象
 * 
 * @param {string[]|object} config 属性名称
 * 
 */

 if(isArray(config)){

   for(let name of config){

      defineProperty(target , name) ;
   }

 }else{

   let names = Object.keys(config) ;

   for(let name of names){

      defineProperty(target , name , config[name]) ;
   }
 }