
/**
 * 
 * 逻辑图位置器实现
 * 
 * @import getAnchorXY from math.region.xy.anchor
 * 
 * @import getUpNodeAnchors from .logic.anchors.up
 * 
 * @import getDownNodeAnchors from .logic.anchors.down
 * 
 * @import getCacheNode from .logic.node.cache
 * 
 * @import getNode from .logic.node
 * 
 * @import isDescendantNode from mindmap.node.is.descendant
 * 
 * @class
 * 
 */

 function applyUpNode(node , isIgnoreNode){

    let me = this,
    {
        nodeMap,
        bottomRegions
    } = me,
    region = nodeMap.get(node);

    return getNode.call(me , region , bottomRegions , bottomRegions.indexOf(region) + 1 , ({
        bottom
    } , {
        top
    }) => bottom < top , [
        getUpNodeAnchors
    ] , isIgnoreNode).node ;
 }

 function applyDownNode(node , isIgnoreNode){

    let me = this,
    {
        nodeMap,
        topRegions
    } = me,
    region = nodeMap.get(node);

    return getNode.call(me , region , topRegions , topRegions.indexOf(region) + 1 , ({
        top
    } , {
        bottom
    }) => bottom < top , [
        getDownNodeAnchors
    ] , isIgnoreNode).node ;
 }

 class main {

    getSelectUpNode(node){

        return getCacheNode.call(this , node , 'SelectUpNode') ;
    }

    getMoveUpNode(node){

        return getCacheNode.call(this , node , 'MoveUpNode') ;
    }

    applySelectUpNode(node){
        
        return applyUpNode.call(this , node) ;
    }

    applyMoveUpNode(node){

        return applyUpNode.call(this , node , originNode => isDescendantNode(node , originNode) || isDescendantNode(originNode , node)) ;
    }

    getSelectDownNode(node){

        return getCacheNode.call(this , node , 'SelectDownNode') ;
    }

    getMoveDownNode(node){

        return getCacheNode.call(this , node , 'MoveDownNode') ;
    }

    applySelectDownNode(node){

        return applyDownNode.call(this , node) ;
    }

    applyMoveDownNode(node){

        return applyDownNode.call(this , node , originNode => isDescendantNode(node , originNode) || isDescendantNode(originNode , node)) ;
    }

    getSelectLeftNode(node){

        return getCacheNode.call(this , node , 'SelectLeftNode') ;
    }

    getRightNode(node){

        return getCacheNode.call(this , node , 'SelectRightNode') ;
    }

 }