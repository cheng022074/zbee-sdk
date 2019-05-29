
/**
 * 
 * 垂直方向选择
 * 
 * @param {string} direction 方向 
 * 
 */

 let methodName,
     increment;

 switch(direction){

    case 'up':

        methodName = 'previousSiblingNode' ;

        increment = -1 ;

        break ;

    case 'down':

        methodName = 'nextSiblingNode' ;

        increment = 1 ;
 }

 let me = this,
    node = me[methodName] ;

if(node){

    node.select() ;

    return node ;

}else{

    let {
        depth,
        store
    } = me,
    nodes = store.rootNode.getDepthNodes(depth),
    node = nodes[nodes.indexOf(me) + increment] ;

    if(node){

        node.select() ;

        return node ;
    }

}
