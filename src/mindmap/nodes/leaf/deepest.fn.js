
/**
 * 
 * 获取最深节点集合
 * 
 * @import getLeafNodes from ..leaf scoped
 * 
 * @import getLevel from ....node.level scoped
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @return {array} 脑图节点集合 
 * 
 */

let nodes = getLeafNodes(node),
     maxLevel = 0,
     maxLevelNodes;

 for(let node of nodes){

    let level = getLevel(node) ;

    if(maxLevel < level){

        maxLevel = level ;

        maxLevelNodes = [
            node
        ] ;
    
    }else if(maxLevel === level){

        maxLevelNodes.push(node) ;
    }
 }

 return maxLevelNodes;