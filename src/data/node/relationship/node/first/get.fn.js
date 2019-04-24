
/**
 * 
 * 返回指定层数的最后一个节点
 * 
 * @param {number} [floor = 1] 层数
 * 
 * @return {data.node.Relationship} 节点关系对象
 * 
 */

 let node = this ;

 for(let i = 1 ; i <= floor ; i ++){

    let tempNode = node.lastNode ;

    if(tempNode){

        node = tempNode ;
    
    }else{

        return node ;
    }
 }

 return node ;