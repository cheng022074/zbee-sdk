
/**
 * 
 * 定义数据结构的编号
 * 
 * @import is.function
 * 
 * @import generate from id.generate
 * 
 * @import from from array.from
 * 
 * @import get from object.value.get
 * 
 * @import is.string
 * 
 * @param {mixed} structure 数据结构
 * 
 * @param {mixed} id 编号策略
 * 
 */

 const {
    defineProperty
 } = Object,
 NAME = '__ZBEE_DATA_ID__';

 if(isString(id)){

    defineProperty(structure , NAME , {
        get(){

            return get(structure , id) ;　
        }
    }) ;

 }else if(isFunction(id)){

    defineProperty(structure , NAME , {
        get:id.bind(structure)
    }) ;

}else{

    id = generate('data-') ;

    defineProperty(structure , NAME , {
        value:generate('data-')
    }) ;
}