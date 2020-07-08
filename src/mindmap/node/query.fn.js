
/**
 * 
 * 查询节点
 * 
 * @import data from .data scoped
 * 
 * @param {string} id 节点编号
 * 
 * @param {boolean} [isReturnData = false] 是否返回数据
 * 
 * @return {data.Record|object} 节点信息 
 * 
 */

 let {
     nodes
 } = this,
 node = nodes.get(id) ;

 if(node){

    if(isReturnData){

        return data(node) ;
    }

    return node ;
 }