
/**
 * 
 * 可视化树节点
 * 
 * @import is.boolean
 * 
 * @param {object} config 节点配置
 * 
 */

 super(config) ;

 let me = this,
 {
     tree
 } = config ;

 me.hidden = isBoolean(hidden) ? hidden : false ;


