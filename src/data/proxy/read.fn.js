
/**
 * 
 * 读取数据
 * 
 * @param {mixed} options 读取数据配置
 * 
 */

 let me = this,
 {
     proxy,
     reader
 } = me ;

 me.fireEvent('read' , reader(await proxy.call('doRead' , options))) ;