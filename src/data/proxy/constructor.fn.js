
/**
 * 
 * 初始化数据代理
 * 
 * @import createProxy from object.proxy
 * 
 * @import createReader from data.reader.json
 * 
 * @param {object} [options = {}] 配置
 * 
 * @param {mixed} [options.reader = {}] 配置读取器
 * 
 * @param {mixed} [options.model] 数据模型
 * 
 */

 let me = this ;

 me.proxy = createProxy(me) ;

 me.reader = createReader({
     ...reader,
     model
 }) ;