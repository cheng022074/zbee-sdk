
/**
 * 
 * 获取最深的叶子节点
 * 
 * @import getLeafNodes from ....nodes.leaf scoped
 * 
 * @import getLevel from ..level scoped
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @return {data.Record} 叶子节点 
 * 
 */

 let nodes = getLeafNodes(node),
     maxLevel = 0,
     maxLevelNode;

 for(let node of nodes){

    let level = getLevel(node) ;

    if(maxLevel < level){

        maxLevel = level ;

        maxLevelNode = node ;
    }
 }

 return maxLevelNode;

 