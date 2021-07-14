
/**
 * 
 * 判断指定节点是否为叶子节点
 * 
 * @param {data.Record} node 节点
 * 
 * @return {boolean} 如果节点为叶子节点则返回 true , 否则 false
 * 
 */


let {
  children,
  loaded
} = node ;

if(!loaded){

  console.log('强制') ;

  return false ;
}

return !children.length;