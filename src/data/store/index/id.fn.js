
/**
 * 
 * 返回指定编号对应的记录在存储器中的位置
 * 
 * @param {mixed} id 数据记录编号
 * 
 * @return {number} 数据记录的位置 
 * 
 */

 let me = this,
 {
    recordMap
 } = me,
 record = recordMap.get(id);

 if(record){

    return me.indexOf(record) ;
 }

 return -1 ;