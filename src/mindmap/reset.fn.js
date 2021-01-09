
/**
 * 
 * 重置脑图
 * 
 * @import getRootNode from .node.root scoped
 * 
 * @import reset from .node.reset scoped
 * 
 * @import select from .select scoped
 * 
 * @param {number} [level] 显示层数
 * 
 */

let rootNode = getRootNode(),
    isSelect = select(rootNode),
    isReset = reset(rootNode , level) ;

if(!isSelect && isReset){

    this.layout() ;
}



