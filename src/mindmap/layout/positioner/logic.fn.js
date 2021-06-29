
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
 * @import isRootNode from mindmap.node.is.root
 * 
 * @class
 * 
 */

 function applyUpNode(node , isIgnoreNode){

    let me = this,
    {
        nodeMap,
        topDescRegions
    } = me,
    region = nodeMap.get(node);

    return getNode.call(me , region , topDescRegions , topDescRegions.indexOf(region) + 1 , ({
        top:matchTop
    } , {
        top
    }) => matchTop < top , [
        getUpNodeAnchors
    ] , isIgnoreNode).node ;
 }

 function applyDownNode(node , isIgnoreNode){

    let me = this,
    {
        nodeMap,
        bottomAscRegions
    } = me,
    region = nodeMap.get(node);

    return getNode.call(me , region , bottomAscRegions , bottomAscRegions.indexOf(region) + 1 , ({
        bottom:matchBottom
    } , {
        bottom
    }) => matchBottom > bottom , [
        getDownNodeAnchors
    ] , isIgnoreNode).node ;
 }

 class main {

    constructor(mindmap){

        this.mindmap = mindmap;
    }

    getSelectUpNode(node){

        return getCacheNode.call(this , node , 'SelectUpNode') ;
    }

    applySelectUpNode(node){
        
        return applyUpNode.call(this , node) ;
    }

    getMoveUpNode(node){

        let me = this,
        {
            mindmap
        } = me ;

        if(isRootNode.call(mindmap , node)){

            return ;
        }

        return applyUpNode.call(me , node , originNode => isDescendantNode.call(mindmap , node , originNode) || isRootNode.call(mindmap , originNode)) ;
    }

    getSelectDownNode(node){

        return getCacheNode.call(this , node , 'SelectDownNode') ;
    }

    applySelectDownNode(node){

        return applyDownNode.call(this , node) ;
    }

    getMoveDownNode(node){

        let me = this,
        {
            mindmap
        } = me ;

        if(isRootNode.call(mindmap , node)){

            return ;
        }

        return applyDownNode.call(me , node , originNode => isDescendantNode.call(mindmap , node , originNode) || isRootNode.call(mindmap , originNode)) ;
    }

    getSelectLeftNode(node){

        return getCacheNode.call(this , node , 'SelectLeftNode') ;
    }

    getSelectRightNode(node){

        return getCacheNode.call(this , node , 'SelectRightNode') ;
    }

 }