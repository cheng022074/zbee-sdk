
/**
 * 
 * 保存脑图节点数据
 * 
 * @import copy from object.copy
 * 
 * @return {array} 脑图节点数据  
 * 
 */

 let {
    nodes,
    reader
 } = this,
 result = [],
 names = [
     'id',
     'text'
 ];

 nodes.forEach(node => {

    let data = {} ;
    
    copy(data , node , names) ;

    copy(data , node , reader.getAddFieldNames(node)) ;

    result.push(data) ;

 }) ;

 return result ;

