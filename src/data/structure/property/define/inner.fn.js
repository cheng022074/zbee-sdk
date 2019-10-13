
/**
 * 
 * 定义内部数据
 * 
 * @param {mixed} structure 数据结构
 * 
 * @param {object} raw 原始数据
 * 
 */

 const NAME = '__ZBEE_DATA_INNER__' ;

 let value ;

 if(raw.hasOwnProperty(NAME)){

    value = raw[NAME] ;
 
 }else{

    value = {} ;
 }

Object.defineProperty(structure , NAME , {
    value
}) ;