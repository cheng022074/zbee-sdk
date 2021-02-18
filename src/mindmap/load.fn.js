
/**
 * 
 * 初始化脑图数据
 * 
 * @import is.defined
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
    readConfig
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

      return rootNode ;

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

  for(let childNode of children){

    register_node.call(me , childNode) ;
  }
}