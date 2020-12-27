
/**
 * 
 * 初始化脑图数据
 * 
 * @import loadData from .load.data scoped
 * 
 * @param {mixed} data 数据
 * 
 */

 let me = this,
 {
    reader,
    readConfig
 } = me,
 records = reader.read(data , readConfig);

 if(records.length === 1){

   await loadData(records[0]) ;
 }