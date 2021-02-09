
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
 * @import from from .node.from scoped
 * 
 * @import is.function
 * 
 * @import register from .node.unpublished.register scoped
 * 
 * @import unregister from .node.unpublished.unregister scoped
 * 
 * @import isUnpublished from .node.unpublished.is scoped
 * 
 * @import setNodeInfo from .node.info scoped
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
} = me;

if(restructuring){

  return;
}

parentNode = from(parentNode) ; 

let {
    expanded,
    selected
} = parentNode;

let nodeSelected,
    isNewNode = true;

if(from(node)){

    isNewNode = false ;

    nodeSelected = node.selected ;
}

node = append(node , parentNode) ;

if(node){

  if(nodeSelected){

    node.selected = true ;
  }

  if(isSilentMode === false){

    if(selected && !expanded){
  
      expand(parentNode) ;
      
    }
    
    me.fireEvent('nodeappend' , data(node) , data(parentNode) , isNewNode , () => order(parentNode)) ;
    
    if(!select(node)){

      me.layout() ;
    }
  
  }else if(isFunction(isSilentMode)){

    if(selected && !expanded){
  
      expand(parentNode) ;
      
    }

    if(!select(node)){

      me.layout() ;
    
    }

    register(node) ;

    await isSilentMode(data(node) , isNewNode , id => {

      setNodeInfo({
        id
      } , node) ;

      unregister(node) ;

    }) ;

    if(!isUnpublished(node)){

        me.fireEvent('nodeappend' , data(node) , data(parentNode) , isNewNode , () => order(parentNode)) ;
    }

  }else{
  
    me.layout() ;
    
  }
}