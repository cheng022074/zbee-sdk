
/**
 * 
 * 向右移动一格
 * 
 * @import getDistance from math.point.distance
 * 
 */

let me = this,
{
    firstChildNode
} = me ;

if(firstChildNode){

    firstChildNode.select() ;

    return firstChildNode ;

}else{

    let {
        depth,
        store
    } = me,
    nodes = store.rootNode.getDepthNodes(depth + 1),
    minDistance,
    nearestNode;

    for(let node of nodes){

        let distance = getDistance(me , node) ;

        if(!minDistance){

            minDistance = distance ;

            nearestNode = node ;

            continue ;
        }

        if(minDistance > distance){

            minDistance = distance ;

            nearestNode = node ;
        }
    }

    if(nearestNode){

        nearestNode.select() ;

        return nearestNode ;
    }
}