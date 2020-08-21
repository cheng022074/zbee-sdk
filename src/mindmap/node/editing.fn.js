
/**
 * 
 * 编辑中的节点数据同步
 * 
 * @import get from .get scoped
 * 
 * @import layout from ..layout scoped
 * 
 * @param {string} id 节点编号
 * 
 * @param {string} text 编辑中的文本
 * 
 * @param {number} width 编辑中的文本宽度
 * 
 * @param {number} height 编辑中的文本高度
 * 
 * 
 */

 let node = get(id) ;

 node.text = text ;

 node.width = width ;

 node.height = height ;

 layout() ;

