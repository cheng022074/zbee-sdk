
/**
 * 
 * 首个子节点
 * 
 * @return {data.model.node.Tree} 节点引用 
 * 
 */

let {
    children
} = this;

if(children.length){

    return children[0] ;
}