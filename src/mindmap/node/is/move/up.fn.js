/**
 * 
 * 选中节点向上移动
 * 
 * @import previous from mindmap.layout.node.sibling.previous scoped
 * 
 * @import data from mindmap.layout.node.data.param scoped
 * 
 * @import getParentNode from ....parent scoped
 * 
 * @param {function} [beforeMoveFn = () => true] 拖曳的拦截函数 
 * 
 * @return {boolean} 判断是否可以向下移动
 * 
 */

 function main(beforeMoveFn){

    let me = this,
    {
        selectedNode
    } = me ;

    return doMoveUp.call(me , previous(selectedNode) , beforeMoveFn) ;
 }

 function doMoveUp(node , beforeMoveFn){

    let {
       selectedNode
    } = this ;
 
    return !!(node && beforeMoveFn(data(getParentNode(node)) , data(selectedNode) , data(node))) ;
  }