
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
    assign
 } = Object ;

 let records = [] ;

 for(let node of nodes){

    let record = assign({} , node) ;

    delete record.children ;

    records.push(record) ;
 }

 return records ;