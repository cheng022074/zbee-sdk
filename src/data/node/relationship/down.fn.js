
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

 let count = 0,
     firstNextNode,
     firstCount;

while(node = node.parentNode){

    count ++ ;

    let nextNode ;

    while(nextNode = node.nextNode){

        if(!firstNextNode){

            firstNextNode = nextNode ;

            firstCount = count ;
        }

        let result = nextNode.getFirstNode(count) ;
        
        if(result){

            return result ;
        }

        node = nextNode ;

       
    }
}

if(firstNextNode){

    return firstNextNode.getFirstNode(firstCount , false) ;
}

