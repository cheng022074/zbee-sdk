
/**
 * 
 * 右则逻辑图位置器实现
 * 
 * @import init from .init
 * 
 * @import getNode from .node
 * 
 * @import Logic from ..logic value
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

 class main extends Logic{

    constructor(nodes){

        let me = this,
            regions = init.call(me , nodes);

        me.leftDescRegions = generateLeftDescRegions(regions) ;

        me.rightAscRegions = generateRightAscRegions(regions) ;
    }

    applyLeftNode(node){

        let me = this,
        {
            nodeMap
        } = me ;

        return getLeftNode.call(me , getAnchorXY(nodeMap.get(node) , 'l')).node ;
    }

    applyRightNode(node){

        let me = this,
        {
            nodeMap
        } = me ;

        return getRightNode.call(me , getAnchorXY(nodeMap.get(node) , 'r')).node ;
    }
 }