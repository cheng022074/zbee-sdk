
/**
 * 
 * 将推送数据传递给绑定函数
 * 
 * @param {mixed} data 推送过来的数据
 * 
 * @return {mixed} 返回说明 
 * 
 */

 let me = this,
 {
    bindFn,
    params
 } = me ;

let result = bindFn(data , params) ;

me.fireEvent('data' , data , params) ;

return  result;