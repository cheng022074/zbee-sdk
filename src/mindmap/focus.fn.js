
/**
 * 
 * 聚焦节点
 * 
 * @import getRootNode from .node.root scoped
 * 
 * @import select from .select scoped
 * 
 * @import focus from .node.focus scoped
 * 
 * @param {mixed} node 脑图节点
 * 
 * @param {number} [level] 显示层数
 * 
 */

let isSelect = select(node),
    isFocus = focus(node , level) ;

if(!isSelect && isFocus){

    this.layout() ;
}

