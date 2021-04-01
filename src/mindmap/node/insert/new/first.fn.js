
/**
 * 
 * 插入首个子节点
 * 
 * @import append from ....append.new scoped
 * 
 * @import insert from ..before scoped
 * 
 * @import from from ..from scoped
 * 
 * @param {mixed} parentNode 参照节点
 * 
 * @param {mixed} [node] 创建节点配置
 * 
 */

parentNode = from(parentNode) ;

let {
    children
} = parentNode ;

if(children.length){

    return insert(children[0] , node) ;
}

return append(parentNode , node) ;






