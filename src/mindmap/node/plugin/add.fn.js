
/**
 * 
 * 添加脑图节点插件
 * 
 * @import from from ..from scoped
 * 
 * @import data from ..data scoped
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

    let me = this ;

    me.fireEvent('addnodeplugin' , data(node) , plugin) ;

    me.layout() ;
}
