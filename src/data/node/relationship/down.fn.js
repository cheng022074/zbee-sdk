
/**
 * 
 * 返回下面的节点引用
 * 
 * @return {mixed} 下面节点 
 * 
 */

let node = this,
{
    nextNode
} = node ;

 if(nextNode){

    return nextNode ;
 }

 let count = 0 ;

while(node = node.parentNode){

    count ++ ;

    let {
        previousNode
    } = node ;

    if(previousNode){

        return previousNode.getFirstNode(count) ;
    }
}