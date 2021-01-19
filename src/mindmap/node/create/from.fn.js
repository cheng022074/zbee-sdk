
/**
 * 
 * 以外部数据创建脑图节点
 * 
 * @import is.defined
 * 
 * @param {array} data 脑图节点数据
 * 
 * @param {mixed} [readAsRoot] 获得脑图节点根读取入口
 * 
 * @return {data.Record} 创建后的脑图节点 
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
    
    let node = reader.read(data , {
      ...readConfig,
      multi:false
    });

    if(node){

        register_node.call(me , node) ;

        return node ;
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