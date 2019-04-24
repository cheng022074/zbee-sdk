
/**
 * 
 * 返回上面的节点引用
 * 
 * @return {mixed} 上面节点 
 * 
 */

let node = this,
{
    previousNode
} = node ;

 if(previousNode){

    return previousNode ;
 }

 let count = 0 ;

while(node = node.parentNode){

    count ++ ;

    let {
        previousNode
    } = node ;

    if(previousNode){

        return previousNode.getLastNode(count) ;
    }
}