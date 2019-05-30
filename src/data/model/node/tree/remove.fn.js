
/**
 * 
 * 删除子节点
 * 
 * @param {data.model.node.Tree} node 树型节点
 * 
 */

let {
    store,
    children
} = this ;

if(children.includes(node)){

    store.remove(node) ;
}