
/**
 * 
 * 获得当前节点所在的层次
 * 
 * @return {number} 层次数值 
 * 
 */

 let node = this,
     floor = 1,
     parentNode;

while(parentNode = node.parentNode){

    node = parentNode ;

    floor ++ ;
}

return floor ;