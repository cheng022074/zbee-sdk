
/**
 * 
 * 获得指定层数节点数据,如果层数不足，则返回最后一层的节点数据
 * 
 * @param {string} field 节点字段
 * 
 * @param {number} [floor= 1] 层数
 * 
 * @return {mixed} 返回说明 
 * 
 */


let node = this ;

for(let i = 1 ; i <= floor ; i ++){

   let tempNode = node[field] ;

   if(tempNode){

       node = tempNode ;
   
   }else{

       return node ;
   }
}

return node ;