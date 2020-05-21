
/**
 * 
 * 输出脑图节点
 * 
 * @import getRegion from .region scoped
 * 
 * @param {array} nodes 节点集合
 * 
 * @return {array} 处理后的脑图节点
 * 
 */

 const {
   padding,
   height
 } = this,{
   height:regionHeight
 } = getRegion(),
 {
    assign
 } = Object ;

 let records = [],
     heightPadding = 0;

 if(height !== regionHeight){

   heightPadding = padding ;
 }

 for(let node of nodes){

    let record = assign({} , node) ;

    record.x += padding ;

    record.y += heightPadding ;

    delete record.children ;

    delete record.parentNodeId ;

    records.push(record) ;
 }

 return records ;