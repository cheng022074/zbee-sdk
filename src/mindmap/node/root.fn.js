
/**
 * 
 * 获得实际的根节点
 * 
 * @return {data.Record} 根节点 
 * 
 */

 let {
    ellipsisRootNode,
    focusNode,
    rootNode
 } = this ;

 return focusNode || ellipsisRootNode || rootNode ;