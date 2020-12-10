
/**
 * 
 * 设置节点隐藏属性
 * 
 * @import isRootNode from .node.is.root
 * 
 * @import getParentNode from .node.parent scoped
 * 
 * @import reset from .hidden.reset scoped
 * 
 * @import leaf from .hidden.leaf scoped
 * 
 * @import level from .hidden.level scoped
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @param {boolean} hidden 决定节点是否隐藏，隐藏为 true , 显示为 false
 * 
 * @return {boolean} 节点隐藏状态
 * 
 */

let {
    id
} = node,
me = this,
{
    visibilityNodes
} = me;

reset(node) ;

leaf(node , hidden) ;

level(node , hidden) ;

if(hidden === false){

    visibilityNodes.set(id , node) ;

}else{

    visibilityNodes.delete(id) ;

    node.selected = false ;
}

return hidden ;