
/**
 * 
 * 拷贝
 * 
 * @param {mixed} data 需要深拷贝的数据
 * 
 * @return {mixed} 拷贝后的数据
 * 
 */

 const {
    stringify,
    parse
 } = JSON ;

 return parse(stringify(data)) ;