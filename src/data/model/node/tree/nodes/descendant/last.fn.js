
/**
 * 
 * 下边缘子孙节点
 * 
 * @return {array} 节点集合 
 * 
 */

let node = this,
    {
        expanded,
        hidden
    } = node;

if(hidden){

    return [] ;
}

if(!expanded){

    return [
        node
    ] ;
}

let nodes = [] ;

while(true){

    let {
        lastChildNode
    } = node ;

    if(lastChildNode){

        if(lastChildNode.hidden){

            break ;
        }
    
    }else{

        break ;
    }

    nodes.push(lastChildNode) ;

    node = lastChildNode ;

}

return nodes ;