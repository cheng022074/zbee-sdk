
/**
 * 
 * 返回上面的节点引用
 * 
 * @return {data.node.Relationship} 上面节点 
 * 
 */

let node = this,
{
    previousNode
} = node ;

 if(previousNode){

    return previousNode ;
 }

 let count = 0,
     firstPreviousNode,
     firstCount;

while(node = node.parentNode){

    count ++ ;

    let {
        previousNode
    } = node ;

    if(previousNode){

        if(!firstPreviousNode){

            firstPreviousNode = previousNode ;

            firstCount = count ;
        }

        let result = previousNode.getLastNode(count) ;

        if(result){

            return result ;
        }
    }
}

if(firstPreviousNode){

    return firstPreviousNode.getLastNode(firstCount , false) ;
}

