
/**
 * 
 * 添加脑图节点指示器
 * 
 * @import from from ......data.node.from scoped
 * 
 * @import has from .has scoped
 * 
 * @param {mixed} node 脑图节点
 * 
 * @param {string} id 组件相对于脑图节点的唯一标识
 * 
 * @param {mixed} config 组件设置
 * 
 */

let  {
    indicators
} = from(node) ;

if(!has(node , id)){

    indicators.push({
        id,
        ...config
    }) ;

    this.layout() ;
}





