
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
 } = me;

 await loadData(reader.read(data , readConfig)) ;