
/**
 * 
 * 读取数据
 * 
 * @param {mixed} options 读取数据配置
 * 
 */

 let me = this,
 {
     proxy
 } = me ;

 me.fireEvent('read' , await proxy.call('doRead' , options)) ;