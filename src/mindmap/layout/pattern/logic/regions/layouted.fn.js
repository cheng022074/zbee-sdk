/**
 * 
 * 已布局范围集合
 * 
 * @import intersect from math.region.intersect
 * 
 * @import getRegion from ......node.region.self
 * 
 * @import setOffsetY from ......node.y.offset
 * 
 * @import getChildRegion from ......node.region.child.logic
 * 
 * @import is.number
 * 
 * @import getChildNodes from ......nodes.child scoped
 * 
 * @import isDescendantNode from mindmap.node.is.descendant
 * 
 * @param {Mindmap} mindmap 脑图 SDK 实例
 * 
 */

 function findBottomestIntersectRegion(node , region){

    let findRegions = [],
        me = this,
        {
            mindmap,
            nodeRegions
        } = me;

    nodeRegions.forEach((registerRegion , registerNode) => {

        if(isDescendantNode.call(mindmap , node , registerNode)){

            return ;
        }

        if(intersect(registerRegion , region)){

            findRegions.push(registerRegion) ;
        }

    }) ;

    if(findRegions.length){

        return findRegions.sort(({
            bottom:bottom1,
        } , {
            bottom:bottom2
        }) => bottom2 - bottom1)[0];

    }
}

class main{

    constructor(mindmap){

        let me = this ;

        me.nodeRegions = new Map() ;

        me.mindmap = mindmap ;
    }

    adjustNodeY(node , adjustNode){

        let me = this,
        {
            mindmap
        } = me;

        adjustNode = adjustNode || node ;

        let {
            nodeVerticalSeparationDistance
        } = me.mindmap.layoutConfig,
        adjustNodeRegion = getRegion.call(mindmap , adjustNode),
        findRegion = findBottomestIntersectRegion.call(me , adjustNode , adjustNodeRegion) ;

        if(findRegion){

            setOffsetY.call(mindmap , node , findRegion.bottom + nodeVerticalSeparationDistance - adjustNodeRegion.top) ;
        }
    }

    add(node , isRecursive = false){

        let me = this,
        {
            nodeRegions,
            mindmap
        } = me,
        {
            childRegionCompensateLeft
        } = mindmap.layoutConfig,
        region = getChildRegion.call(mindmap , node) ;

        if(isNumber(childRegionCompensateLeft)){

            region.left -= childRegionCompensateLeft ;
        }

        nodeRegions.set(node , region) ;

        if(isRecursive){

            let childNodes = getChildNodes(node) ;

            for(let childNode of childNodes){

                me.add(childNode , isRecursive) ;
            }
        }
    }
}

