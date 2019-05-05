
/**
 * 
 * 根据编号获取记录
 * 
 * @param {mixed} id 记录编号
 * 
 * @return {data.Model} 数据记录 
 * 
 */

 let {
    recordMap
 } = this ;

 return recordMap.get(id) ;