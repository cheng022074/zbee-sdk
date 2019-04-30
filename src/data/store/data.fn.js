
/**
 * 
 * 返回数据模型的数据集合
 * 
 * @return {mixed}  数据集合
 * 
 */

 let {
    $data:data
 } = this,
 result = [];

 for(let {
     data:item
 } of data){

    result.push(item) ;
 }

 return result ;