
/**
 * 
 * 当前节点下的所有叶子节点
 * 
 * @return {array} 节点集合 
 * 
 */

 let me = this,
 {
    childNodes
 } = me;

 if(childNodes.length){

    let leafNodes = [] ;

    for(let childNode of childNodes){

        leafNodes.push(...childNode.leafNodes) ;
    }

    return leafNodes ;

 }

 return [
    me
] ;