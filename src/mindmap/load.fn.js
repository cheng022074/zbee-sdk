
/**
 * 
 * 初始化脑图数据
 * 
 * @import is.defined
 * 
 * @import expand from .node.expand.deep scoped
 * 
 * @param {mixed} data 数据
 * 
 * @param {mixed} [readAsRoot] 获得脑图节点根读取入口
 * 
 */

function main(data , readAsRoot){

  let me = this,
  {
    reader,
    readConfig,
    initVisibilityLevel
  } = me ;
  
  if(isDefined(readAsRoot)){
  
    readConfig = Object.assign({} , readConfig , {
      root:readAsRoot
    }) ;
  }
  
  let rootNode = reader.read(data , {
    ...readConfig,
    multi:false
  });

  if(rootNode){

      register_node.call(me , rootNode) ;

      me.rootNode = rootNode ;

      rootNode.selected = true ;

      expand(rootNode , initVisibilityLevel) ;

  }
}

function register_node(node){

  let {
      id,
      children
  } = node,
  me = this,
  {
    nodes
  } = me;

  nodes.set(id , node) ;

  children.sort(sortByOrder) ;

  for(let childNode of children){

    register_node.call(me , childNode) ;
  }
}

function sortByOrder({
  order:order1
} , {
  order:order2
}){

  return order1 - order2 ;
}