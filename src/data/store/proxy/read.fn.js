
/**
 * 
 * 当数据代理读取数据后触发
 * 
 * @import from from array.from
 * 
 * @param {data.Proxy} proxy 数据代理
 * 
 * @param {mixed} records 读取数据
 * 
 */

 let me = this,
 {
    $data:data
 } = me ;

 data.push(...records) ;

 me.loading = true ;

 me.fireEvent('load' , me.data) ;