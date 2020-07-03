
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
 */

 let me = this,
 {
    restructuring
 } = me;

 if(restructuring){

    return ;
 }


if(parentNodeId){
  
  await appendById(node , parentNodeId) ;
  
}else{

  let {
      selectedNode,
      visibilityLevel
  } = me,
  {
      expanded
  } = selectedNode;

  node = append(selectedNode , node) ;

  if(node === false){

    return ;
    
  }

  if(!expanded){

    expand(selectedNode) ;
    
  }

  me.fireEvent('nodeappend' , data(node) , data(selectedNode)) ;

  order(selectedNode) ;

  select(node.id , false) ;

  if(getLevel(selectedNode) > visibilityLevel){

      ellipsis(selectedNode , visibilityLevel) ;
  }

  await tryLayout();
}