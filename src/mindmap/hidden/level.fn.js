
/**
 * 
 * 计算节点层次
 * 
 * @import isRootNode from ..node.is.root
 * 
 * @import getParentNode from ..node.parent scoped
 * 
 * @param {data.Record} node 节点
 * 
 * @param {boolean} hidden 决定节点是否隐藏，隐藏为 true , 显示为 false
 * 
 */

 
let {
    id
} = node,
me = this,
{
    visibilityNodes,
    leafNodes,
    unsizedNodes
} = me;

if(hidden === false){

    if(isRootNode(node)){

        me.level = 1 ;

    }else{

        let {
            level
        } = getParentNode(node) ;

        node.level = level + 1 ;
    }

}else{

    node.level = 0 ;         
}

return hidden ;