
/**
 * 
 * 调试向缓存中数组添加数据
 * 
 * @import createCache from data.cache.memory
 * 
 */

 let cache = createCache({
    schema:'test',
    name:'test'
 }),
 {
     data
 } = cache;

 cache.on('save' , (cache , data) => {

    console.log('save' , data) ;

 }) ;

 data.push(1) ;

 data.push(2) ;

 data.push(3 , 4 , 5) ;

 setTimeout(() => {

    data.push(6) ;

 } , 0) ;
