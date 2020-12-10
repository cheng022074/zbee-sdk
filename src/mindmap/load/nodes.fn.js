
/**
 * 
 * 登记所有节点
 * 
 */

 function main(){

        
    let {
        rootNode,
        nodes
    } = this ;

    deepNodes(rootNode , nodes) ;
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