
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

    me.emit('load' , getData(me.nodes)) ;

 }else{

    clear() ;
 }