
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
 * @import getLeftNodeAnchors from .anchors.right.left
 * 
 * @import getRightNodeAnchors from .anchors.right.right
 * 
 * @param {Mindmap} mindmap 脑图对象
 * 
 * @param {array} nodes 布局脑图节点集合
 * 
 */

 class main extends Logic{

    constructor(mindmap , nodes){

        super(mindmap) ;

        let me = this,
            regions = init.call(me , nodes);

        me.leftRegions = generateLeftRegions(regions) ;

        me.rightRegions = generateRightRegions(regions) ;
    }

    applySelectLeftNode(node){

        let me = this,
        {
            nodeMap,
            rightRegions
        } = me,
        region = nodeMap.get(node);

        return getNode.call(me , region , rightRegions , rightRegions.indexOf(region) + 1 , ({
            left:matchLeft
        } , {
            left
        }) => matchLeft < left , [
            getLeftNodeAnchors
        ]).node ;
    }

    applySelectRightNode(node){

        let me = this,
        {
            nodeMap,
            leftRegions
        } = me,
        region = nodeMap.get(node);

        return getNode.call(me , region , leftRegions , leftRegions.indexOf(region) + 1 , ({
            right:matchRight
        } , {
            right
        }) => matchRight > right , [
            getRightNodeAnchors
        ]).node ;
    }
 }