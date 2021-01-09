
/**
 * 
 * 重置脑图
 * 
 * @import getDescendantNodes from ..nodes.relation.descendant scoped
 * 
 * @import expand from .expand.deep scoped
 * 
 * @import collapse from .collapse.deep scoped
 * 
 * @param {mixed} rootNode 脑图节点
 * 
 * @param {number} [level = 1] 显示层数
 * 
 * @return {boolean} 如果发生重置行为则返回 true , 否则返回 false
 * 
 */

 rootNode = from(rootNode) ;

let {
    level:maxNodeLevel
} = rootNode,
isReset = false;

if(expand(rootNode , level)){

    isReset = true ;
}

maxNodeLevel += level ;

let nodes = getDescendantNodes(rootNode) ;

for(let node of nodes){

    let {
        level:nodeLevel
    } = node ;

    if(nodeLevel === maxNodeLevel){

        if(collapse(node)){

            isReset = true ;
        }
    }
}

return isReset ;