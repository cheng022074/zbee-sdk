
/**
 * 
 * 销毁数据存储器
 * 
 */

 let me = this,
 {
    proxy,
    $data:data
 } = me ;

 proxy.destroy() ;

 data.clear() ;