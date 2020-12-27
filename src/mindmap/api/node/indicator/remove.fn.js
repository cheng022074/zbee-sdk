
/**
 * 
 * 移除脑图节点指示器
 * 
 * @import from from ......data.node.from scoped
 * 
 * @import remove from array.remove.index
 * 
 * @param {mixed} node 脑图节点
 * 
 * @param {string} id 组件相对于脑图节点的唯一标识
 * 
 */

let  {
    indicators
} = from(node),
index = 0;

for(let {
    id:componentId
} of indicators){

    if(componentId === id){

        remove(indicators , index) ;

        this.layout() ;

        break ;
    }

    index ++ ;
}