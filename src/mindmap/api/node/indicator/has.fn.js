
/**
 * 
 * 判断脑图节点指示器是否存在
 * 
 * @import from from ......data.node.from scoped
 * 
 * @param {mixed} node 脑图节点
 * 
 * @param {string} id 组件相对于脑图节点的唯一标识
 * 
 * @return {boolean} 如果指示器在脑图节点中存在则返回 true , 否则返回 false
 * 
 */

let  {
    indicators
} = from(node) ;

for(let {
    id:componentId
} of indicators){

    if(componentId === id){

        return true ;
    }
}

return false ;