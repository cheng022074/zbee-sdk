
/**
 * 
 * 销毁数据存储器
 * 
 */

 let me = this,
 {
    proxy,
    data
 } = me ;

 proxy.destroy() ;

 data.length = 0 ;