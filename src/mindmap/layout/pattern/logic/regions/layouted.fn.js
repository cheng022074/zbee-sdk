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
 * @param {Mindmap} mindmap 脑图 SDK 实例
 * 
 */

class main{

    constructor(mindmap){

        let me = this ;

        me.regions = [] ;

        me.mindmap = mindmap ;
    }

    adjustNodeY(node , region){

        let me = this,
        {
            mindmap
        } = me;

        region = region || getRegion.call(mindmap , node) ;

        let {
            nodeVerticalSeparationDistance
        } = me.mindmap.layoutConfig,
        findRegion = me.findBottomestIntersectRegion(region) ;

        if(findRegion){

            setOffsetY.call(mindmap , node , findRegion.bottom + nodeVerticalSeparationDistance - region.top) ;
        }
    }

    findBottomestIntersectRegion(findRegion){

        let findRegions = [],
            {
                regions
            } = this;

        for(let region of regions){

            if(intersect(region , findRegion)){

                findRegions.push(region) ;
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

    add(node){

        let me = this,
        {
            regions,
            mindmap
        } = me,
        {
            childRegionCompensateLeft
        } = mindmap.layoutConfig,
        region = getChildRegion.call(mindmap , node) ;

        if(isNumber(childRegionCompensateLeft)){

            region.left -= childRegionCompensateLeft ;
        }

        regions.push(region) ;
    }
}

