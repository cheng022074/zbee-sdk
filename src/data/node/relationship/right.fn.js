
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
    lastChildNode,
    basePreviousNode = node;

while(previousNode = basePreviousNode.previousNode){

    previousCount ++ ;

    if(lastChildNode =  previousNode.lastNode){

        break ;
    
    }else{

        basePreviousNode = previousNode ;
    }
}

if(!lastChildNode){

    let upNode ;

    while(upNode = basePreviousNode.up()){

        previousCount ++ ;

        if(lastChildNode = upNode.lastNode){

            break ;
        
        }else{

            basePreviousNode = upNode ;
        }
    }
}

let nextount = 0,
    nextNode,
    firstChildNode,
    baseNextNode = node;

while(nextNode = baseNextNode.nextNode){

    nextount ++ ;

    if(firstChildNode = nextNode.firstNode){

        break ;
    
    }else{

        baseNextNode = nextNode ;
    }
}

if(!firstChildNode){

    let downNode ;

    while(downNode = baseNextNode.down()){

        nextount ++ ;

        if(firstChildNode = downNode.firstNode){

            break ;
        
        }else{

            baseNextNode = downNode ;
        }
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