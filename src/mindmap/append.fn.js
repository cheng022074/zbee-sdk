
/**
 * 
 * 在选定节点下添加一个子节点
 * 
 * @import append from .node.append scoped
 * 
 * @import expand from .node.expand scoped
 * 
 * @import select from .select scoped
 * 
 * @import data from .node.data scoped
 * 
 * @import order from .order scoped
 * 
 * @import isNode from is.data.record
 * 
 * @import from from .node.from scoped
 * 
 * @param {object} [node = {}] 子节点配置信息
 * 
 * @param {mixed} [parentNode] 脑图父节点
 * 
 * @param {boolean} [isSilentMode = false] 是否静默模式
 * 
 */

let me = this,
{
  restructuring
} = me,
isNewNode = !isNode(node);

if(restructuring){

  return;
}

parentNode = from(parentNode) ; 

let {
    expanded,
    selected
} = parentNode;

if(isNewNode){

  append(parentNode , node) ;

}else{

  let {
    selected
  } = node ;

  append(parentNode , node) ;

  if(selected){

    node.selected = true ;
  }
}

if(!isSilentMode){

  if(selected && !expanded){

    expand(parentNode) ;
    
  }
  
  me.fireEvent('nodeappend' , data(node) , data(parentNode) , isNewNode) ;
  
  order(parentNode) ;
  
  select(node) ;

}else{

  me.layout() ;
  
}