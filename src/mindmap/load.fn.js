
/**
 * 
 * 初始化脑图数据
 * 
 * @import initDisplayNodes from .load.display scoped
 * 
 * @param {mixed} data 数据
 * 
 */

 let me = this,
 {
    reader,
    readerAsRoot
 } = me,
 result = reader.read(data , readerAsRoot) ;

 if(result.length === 1){

    me.rootNode = result[0] ;

    initDisplayNodes() ;
 }
