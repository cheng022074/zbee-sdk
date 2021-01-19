
/**
 * 
 * 初始化脑图数据
 * 
 * @import create from .node.create.from scoped
 * 
 * @import loadData from .load.data scoped
 * 
 * @param {mixed} data 数据
 * 
 */

 let node = create(data);

 if(node){

   await loadData(node) ;
 }