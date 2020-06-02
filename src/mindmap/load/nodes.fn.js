
/**
 * 
 * 登记所有节点
 * 
 */

 function main(){

        
    let {
        selectedNode,
        nodes
    } = this ;

    deepNodes(selectedNode , nodes) ;
 }


 function deepNodes(node , nodes){

    let {
        id,
        children
    } = node ;

    nodes.set(id , node) ;

    for(let childNode of children){

        deepNodes(childNode , nodes) ;
    }
 }