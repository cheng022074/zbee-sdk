
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

if(!lastChildNode){

    let upNode ;

    while(upNode = node.up()){

        previousCount ++ ;

        if(lastChildNode = upNode.lastNode){

            break ;
        
        }else{

            node = upNode ;
        }
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

if(!firstChildNode){

    let downNode ;

    while(downNode = node.down()){

        nextount ++ ;

        if(firstChildNode = downNode.firstNode){

            break ;
        
        }else{

            node = downNode ;
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