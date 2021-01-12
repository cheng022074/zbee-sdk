
/**
 * 
 * 获取可显示横纵标
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @return {Number} 增加偏移值的横坐标  
 * 
 */

let {
    padding
} = this;

return node.x + padding.left ;