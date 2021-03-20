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
 * @import getChildNodes from ......nodes.child
 * 
 * @import getWidth from math.region.width
 * 
 * @param {Mindmap} mindmap 脑图 SDK 实例
 * 
 */

function findBottomestIntersectRegionByExclusionPolicy(region , nodes){

    let findRegions = [],
        me = this,
        {
            nodeRegions
        } = me;

    nodeRegions.forEach((registerRegions , registerNode) => {

        if(nodes.includes(registerNode)){

            return ;
        }

       for(let registerRegion of registerRegions){

            if(intersect(registerRegion , region)){

                findRegions.push(registerRegion) ;
            }
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

function findBottomestIntersectRegionByInclusionPolicy(region , nodes){

    let findRegions = [],
        me = this,
        {
            nodeRegions,
            mindmap
        } = me;

    for(let node of nodes){

        let registerRegions = nodeRegions.get(node) ;

        for(let registerRegion of registerRegions){

            if(intersect(registerRegion , region)){

                findRegions.push(registerRegion) ;
            }
        }

        let findRegion = findBottomestIntersectRegionByInclusionPolicy.call(me , region , getChildNodes.call(mindmap , node)) ;

        if(findRegion){

            findRegions.push(findRegion) ;            
        }
    }

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

    adjustNodeYByInclusionPolicy(node , adjustRegion , adjustNodes = []){

        let me = this,
        {
            mindmap
        } = me;

        adjustRegion = adjustRegion || getRegion.call(mindmap , node) ;

        let {
            nodeVerticalSeparationDistance
        } = me.mindmap.layoutConfig ;

        adjustRegion.top -= nodeVerticalSeparationDistance ;

        let findRegion = findBottomestIntersectRegionByInclusionPolicy.call(me , adjustRegion , adjustNodes) ;

        if(findRegion){

            setOffsetY.call(mindmap , node , findRegion.bottom - adjustRegion.top) ;
            
        }
    }

    add(node){

        let me = this,
        {
            nodeRegions,
            mindmap
        } = me,
        {
            childRegionCompensateLeft
        } = mindmap.layoutConfig,
        childRegion = getChildRegion.call(mindmap , node),
        regions = [{
            ...getRegion.call(mindmap , node),
            node
        }];

        if(getWidth(childRegion) !== 0){

            if(isNumber(childRegionCompensateLeft)){

                childRegion.left -= childRegionCompensateLeft ;
            }
    
            regions.push({
                ...childRegion,
                node
            }) ;
        
        }

        nodeRegions.set(node , regions) ;

        let childNodes = getChildNodes.call(mindmap , node) ;

        for(let childNode of childNodes){

            me.add(childNode) ;
        }
    }
}

