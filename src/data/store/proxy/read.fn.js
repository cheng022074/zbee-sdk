
/**
 * 
 * 当数据代理读取数据后触发
 * 
 * @import from from array.from
 * 
 * @import add from .private.add scoped
 * 
 * @param {data.Proxy} proxy 数据代理
 * 
 * @param {mixed} records 读取数据
 * 
 */

 let me = this ;

 me.fireEvent('load' , add(records)) ;