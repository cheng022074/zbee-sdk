
/**
 * 
 * 获得拥有指定属性的祖先脑图节点
 * 
 * @import getAncestorNode from ......data.node.ancestor scoped
 * 
 * @import is.defined
 * 
 * @import from from array.from
 * 
 * @param {mixed} node 脑图节点
 * 
 * @param {mixed} plugins 插件名称
 * 
 * @return {mixed} 脑图节点
 * 
 */

 return getAncestorNode(node , ({
     plugins:nodePlugins
 }) => {

    for(let plugin of plugins){

        if(!nodePlugins.includes(plugin)){

            return false ;
        }
    }

    return true ;

 }) ;

