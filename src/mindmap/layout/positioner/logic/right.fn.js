
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
 * @import generateLeftRegions from .regions.right.left
 * 
 * @import generateRightRegions from .regions.right.right
 * 
 * @param {array} nodes 布局脑图节点集合
 * 
 */

 class main extends Logic{

    constructor(nodes){

        super() ;

        let me = this,
            regions = init.call(me , nodes);

        me.leftRegions = generateLeftRegions(regions) ;

        me.rightRegions = generateRightRegions(regions) ;
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