
/**
 * 
 * 在选定节点之前插入
 * 
 * @import insert from ..node.insert.after scoped
 * 
 * @import create from ..node.create scoped
 * 
 * @import getParentNode from ..node.parent scoped
 * 
 * @import tryLayout from ..layout.try scoped
 * 
 * @param {mixed} node 插入的节点配置
 * 
 * @param {data.Record} afterNode 参数节点
 * 
 */

let me = this,
{
   selectedNode
} = me ;

node = insert(create(node , getParentNode(selectedNode)) , selectedNode) ;

selectedNode.selected = false ;

me.selectedNode = node ;

tryLayout() ;