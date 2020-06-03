
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
 * @param {object} [node = {}] 子节点配置信息
 * 
 * @param {string} [parentNodeId] 父节点编号
 * 
 */

if(parentNodeId){

  appendById(node , parentNodeId) ;
  
}else{

  let me = this,
  {
      selectedNode
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

  tryLayout().then(() => {
  
    me.fireEvent('nodeappend' , data(node) , data(selectedNode)) ;

    select(node.id) ;
  
  }) ;
}