
/**
 * 
 * 关闭所有节点选择模式
 * 
 * @import getDescendantNodes from mindmap.nodes.descendant scoped
 * 
 * @import getRootNode from mindmap.node.root scoped
 * 
 * @import data from ..data scoped
 * 
 * @param {mixed} node 节点
 * 
 */  
 
 function main(){

    return getCheckedNodes(getRootNode()) ;
 }

 function getCheckedNodes(node){

    let {
        children
    } = node,
    checkedNodes = [];

    for(let childNode of children){

        checkedNodes.push(...getCheckedNodes(childNode)) ;
    }

    if(node.checked){

        return [{
            node:data(node),
            children:checkedNodes
        }] ;
    }

    return checkedNodes ;
 }

