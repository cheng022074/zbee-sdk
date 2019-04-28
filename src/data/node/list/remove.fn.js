
/**
 * 
 * 删除节点列表
 * 
 * @import remove from array.remove
 * 
 * @import doRemoveNodes from ..remove scoped
 * 
 * @import fly from object.proxy
 * 
 * @import is.array
 * 
 * @param {mixed} removeNodes 子节点
 * 
 * 
 */

if(!isArray(removeNodes)){

    removeNodes = [
        removeNodes
    ] ;
}

let {
    nodes,
    childNodesField
} = this ;

remove(nodes , ...removeNodes) ;

for(let removeNode of removeNodes){

    doRemoveNodes(fly(removeNode).get(childNodesField)) ;
}