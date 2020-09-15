
/**
 * 
 * 添加脑图节点插件
 * 
 * @import from from ..from scoped
 * 
 * @param {mixed} node 脑图节点
 * 
 * @param {string} plugin 脑图节点插件名称
 * 
 */

let  {
    plugins
} = from(node) ;

if(!plugins.includes(plugin)){

    plugins.push(plugin) ;

    this.layout() ;
}
