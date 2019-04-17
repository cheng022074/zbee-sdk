
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

 let me = this,
 rootNode = me.read(data);

 if(rootNode){

    me.rootNode = rootNode ;

    let {
      nodes
    } = me ;

    nodes.push(rootNode) ;

    nodes.push(...rootNode.descendants) ;

    me.emit('load' , getData(nodes)) ;

 }