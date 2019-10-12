
/**
 * 
 * 定义数据结构的编号
 * 
 * @import is.function
 * 
 * @import generate form id.generate
 * 
 * @param {mixed} structure 数据结构
 * 
 * @param {mixed} id 编号策略
 * 
 */

 const {
    defineProperty
 } = Object ;

if(isFunction(id)){

    defineProperty(structure , '__ZBEE_DATA_ID__' , {
        get:id.bind(record)
    }) ;

}else{

    id = generate('data-') ;

    defineProperty(structure , '__ZBEE_DATA_ID__' , {
        value:generate('data-')
    }) ;
}