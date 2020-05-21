
/**
 * 
 * 输出脑图节点
 * 
 * @param {array} nodes 节点集合
 * 
 * @return {array} 处理后的脑图节点
 * 
 */

 const {
   padding
 } = this,{
    assign
 } = Object ;

 let records = [] ;

 for(let node of nodes){

    let record = assign({} , node) ;

    record.x += padding ;

    delete record.children ;

    delete record.parentNodeId ;

    records.push(record) ;
 }

 return records ;