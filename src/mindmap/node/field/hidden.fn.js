
/**
 * 
 * 设置节点隐藏属性
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
me = this;

level(node , hidden) ;

if(hidden){

    node.selected = false ;
}

return hidden ;