
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
 * @class
 * 
 */

 class main {

    getUpNode(node){

        return getCacheNode.call(this , node , 'UpNode') ;
    }

    applyUpNode(node){
        
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
        ]).node ;
    }

    getDownNode(node){

        return getCacheNode.call(this , node , 'DownNode') ;
    }

    applyDownNode(node){

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
        ]).node ;
    }

    getLeftNode(node){

        return getCacheNode.call(this , node , 'LeftNode') ;
    }

    getRightNode(node){

        return getCacheNode.call(this , node , 'RightNode') ;
    }

 }