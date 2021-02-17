
/**
 * 
 * 右则逻辑图位置器实现
 * 
 * @import getAnchorXY from math.region.xy.anchor
 * 
 * @import getUpNodeAnchors from .anchors.up
 * 
 * @import getDownNodeAnchors from .anchors.down
 * 
 * @import init from .init
 * 
 * @import getCacheNode from .node.cache
 * 
 * @import getNode from .node
 * 
 * @param {array} nodes 布局脑图节点集合
 * 
 */

 function generateLeftDescRegions(regions){

    return from(regions).sort(({
        left:left1
    } , {
        left:left2
    }) => left2 - left1) ;
 }

 function generateRightAscRegions(regions){

    return from(regions).sort(({
        right:right1
    } , {
        right:right2
    }) => right1 - right2) ;
 }

 function getLeftNode(nodeXY){

    let me = this,{
        rightAscRegions
    } = me ;

    return getNode.call(me , nodeXY , rightAscRegions , ({
        right
    } , {
        x
    }) => right < x , region => getAnchorXY(region , 'r')) ;
 }

 function getRightNode(nodeXY){

    let me = this,
    {
        leftDescRegions
    } = me ;

    return getNode.call(me , nodeXY , leftDescRegions , ({
        left
    } , {
        x
    }) => left > x , region => getAnchorXY(region , 'l')) ;
 }

 const {
    from
 } = Array;

 class main {

    constructor(nodes){

        let me = this,
            regions = init.call(me , nodes);

        me.leftDescRegions = generateLeftDescRegions(regions) ;

        me.rightAscRegions = generateRightAscRegions(regions) ;
    }

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

    applyLeftNode(node){

        let me = this,
        {
            nodeMap
        } = me ;

        return getLeftNode.call(me , getAnchorXY(nodeMap.get(node) , 'l')).node ;
    }

    getRightNode(node){

        return getCacheNode.call(this , node , 'RightNode') ;
    }

    applyRightNode(node){

        let me = this,
        {
            nodeMap
        } = me ;

        return getRightNode.call(me , getAnchorXY(nodeMap.get(node) , 'r')).node ;
    }

    getNode(xy){

        
    }

 }