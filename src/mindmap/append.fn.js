
/**
 * 
 * 在选定节点下添加一个子节点
 * 
 * @import append from .node.append scoped
 * 
 * @import expand from .node.expand scoped
 * 
 * @import tryLayout from .layout.try scoped
 * 
 * @import select from .select scoped
 * 
 * @import appendById from .append.id scoped
 * 
 * @import data from .node.data scoped
 * 
 * @import order from .order scoped
 * 
 * @param {object} [node = {}] 子节点配置信息
 * 
 * @param {string} [parentNodeId] 父节点编号
 * 
 * @param {boolean} [isSilentMode = false] 是否静默模式
 * 
 */

 let me = this,
 {
    restructuring
 } = me;

 if(restructuring){

    return false;
 }


if(parentNodeId){
  
  return await appendById(node , parentNodeId , isSilentMode) ;
  
}else{

  let {
      selectedNode
  } = me,
  {
      expanded
  } = selectedNode;

  node = append(selectedNode , node) ;

  if(node === false){

    return false;
    
  }

  if(!expanded){

    expand(selectedNode) ;
    
  }

  me.fireEvent('nodeappend' , data(node) , data(selectedNode)) ;

  order(selectedNode) ;

  select(node.id , false) ;
  
  await tryLayout();

  return true ;

}