
/**
 * 
 * 指定节点是否同步获取了宽度
 * 
 * @param {data.Record} node 节点
 * 
 * @return {boolean} 如果已获取尺寸则返回 true , 否则返回 false 
 * 
 */

 let {
    waitInitSizeNodes
 } = this,
 {
    id
 } = node;

 return !waitInitSizeNodes.has(id) ;