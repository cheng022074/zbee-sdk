
/**
 * 
 * 获取最深节点
 * 
 * @return {tree.NOde} 节点引用 
 * 
 */

 let {
    leafDescendants:nodes
 } = this;

 if(nodes.length){

    let deepestNode = nodes[0],
        deepestFloor = deepestNode.floor;

    for(let node of nodes){

        let {
            floor
        } = node ;

        if(deepestFloor < floor){

            deepestFloor = floor ;

            deepestNode = node ;
        }
    }

    return deepestNode ;
 }

