
/**
 * 
 * 重新载入树形数据
 * 
 * @import getData from .data.nodes
 * 
 * @import clear from ..clear scoped
 * 
 * @param {mixed} data 树型数据
 * 
 */

 clear() ;

 let me = this ;

 me.loading = true ;

 let rootNode = me.read(data);

 if(rootNode){

    me.rootNode = rootNode ;

    let {
      nodes,
      proxy
    } = me ;

    nodes.push(rootNode) ;

    nodes.push(...rootNode.descendants) ;

    proxy.call('load' , me.data) ;
    
 }

 me.loading = false ;