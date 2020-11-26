
/**
 * 
 * 设置隐藏属性之后调用
 * 
 * @import register from ..node.unsized.register scoped
 * 
 * @import unregister from ..node.unsized.unregister scoped
 * 
 * @param {data.Record} node 脑图节点
 * 
 */

 if(node.hidden){

    unregister(node) ;
 
 }else{

    register(node) ;
 }


 