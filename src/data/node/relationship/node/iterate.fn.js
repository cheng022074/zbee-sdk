
/**
 * 
 * 获得指定层数节点数据,如果层数不足，则返回最后一层的节点数据
 * 
 * @param {string} field 节点字段
 * 
 * @param {number} [floor= 1] 迭代次数
 * 
 * @param {boolean} [strict = true] 是否严格匹配
 * 
 * @return {data.node.Relationship} 节点关系对象 
 * 
 */


let node = this ;

for(let i = 1 ; i <= floor ; i ++){

   let tempNode = node[field] ;

   if(tempNode){

       node = tempNode ;
   
   }else if(strict){

       return ;
   
   }else{

       return node ;
   }
}

return node ;