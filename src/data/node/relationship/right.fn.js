
/**
 * 
 * 返回右面的节点引用
 * 
 * @return {data.node.Relationship} 右面节点 
 * 
 */

let node = this,
{
    firstNode
} = node ;

if(firstNode){

    return firstNode ;
}

let previousCount = 0,
    previousNode,
    lastChildNode;

while(previousNode = node.previousNode){

    previousCount ++ ;

    if(lastChildNode =  previousNode.lastNode){

        break ;
    
    }else{

        node = previousNode ;
    }
}


let nextount = 0,
    nextNode,
    firstChildNode;

while(nextNode = node.nextNode){

    nextount ++ ;

    if(firstChildNode = nextNode.firstNode){

        break ;
    
    }else{

        node = nextNode ;
    }
}

let result ;

if(firstChildNode && lastChildNode){

    if(previousCount >= nextount){

        result = lastChildNode ;
    
    }else{
    
        result = firstChildNode ;
    }

}else{

    result = lastChildNode || firstChildNode ;
}

return result ;