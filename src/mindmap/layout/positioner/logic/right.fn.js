
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

const {
    from
} = Array ;

 class main extends Logic{

    constructor(mindmap , nodes){

        super(mindmap) ;

        let me = this,
            regions = init.call(me , nodes);

        let leftRegions = generateLeftRegions(regions) ;

        me.leftAscRegions = leftRegions ;

        me.leftDescRegions = from(leftRegions).reverse() ;

        let rightRegions = generateRightRegions(regions);

        me.rightAscRegions = rightRegions ;

        me.rightDescRegions = from(rightRegions).reverse();
    }

    applySelectLeftNode(node){

        let me = this,
        {
            nodeMap,
            leftDescRegions
        } = me,
        region = nodeMap.get(node);

        return getNode.call(me , region , leftDescRegions , leftDescRegions.indexOf(region) + 1 , ({
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
            rightAscRegions
        } = me,
        region = nodeMap.get(node);

        return getNode.call(me , region , rightAscRegions , rightAscRegions.indexOf(region) + 1 , ({
            right:matchRight
        } , {
            right
        }) => matchRight > right , [
            getRightNodeAnchors
        ]).node ;
    }
 }