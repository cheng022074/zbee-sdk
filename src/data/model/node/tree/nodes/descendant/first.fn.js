
/**
 * 
 * 上边缘子孙节点
 * 
 * @return {array} 节点集合 
 * 
 */

let node = this,
    {
        expanded
    } = node;

if(!expanded){

    return [
        node
    ] ;
}

while(true){

    let {
        firstChildNode
    } = node ;

    if(firstChildNode){

        if(firstChildNode.hidden){

            break ;
        }
    
    }else{

        break ;
    }

    nodes.push(firstChildNode) ;

    node = firstChildNode ;

}

return nodes ;