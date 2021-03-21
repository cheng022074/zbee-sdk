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
 * @import setY from math.region.y
 * 
 * @import getChildRegion from ......node.region.child.logic.compensate.left
 * 
 * @import is.number
 * 
 * @import getDescendantNodes from ......nodes.descendant
 * 
 * @import getWidth from math.region.width
 * 
 * @import add from array.sorted.add
 * 
 * @import remove from array.remove
 * 
 * @param {Mindmap} mindmap 脑图 SDK 实例
 * 
 */

function RegionSearcherRegionSorted(region1 , region2){

    return region2.bottom - region1.bottom ;
}

function RegionSearcherAddRegion(id , region){

    if(getWidth(region) === 0){

        return ;
    }

    let {
        regionList,
        regionMap
    } = this;

    if(regionMap.has(id)){

        remove(regionList , regionMap.get(id)) ;
    }

    add(regionList , region , RegionSearcherRegionSorted) ;

    regionMap.set(id , region) ;
}

const {
    assign
} = Object;

class MaxBottomRegionFinder{

    constructor(){

        let me = this ;

        me.regionList = [];

        me.regionMap = new Map() ;
    }

    add(mindmap , node){

        let me = this,
        {
            id
        } = node;

        RegionSearcherAddRegion.call(me , id , {
            ...getRegion.call(mindmap , node),
            node
        }) ;

        RegionSearcherAddRegion.call(me , `${id}-children` , {
            ...getChildRegion.call(mindmap , node),
            node
        }) ;            
    }

    find(region , scopeNodes){

        region = assign({} , region) ;

        let me = this,
        {
            regionList
        } = me,
        {
            top
        } = region;

        for(let {
            node,
            ...regionItem
        } of regionList){

            if(!scopeNodes.includes(node)){

                continue ;
            }

            if(top > regionItem.bottom){

                break ;
            }

            if(intersect(region , regionItem)){

                setY(region , regionItem.bottom) ;

                let findRegion = me.find(region , scopeNodes) ;
                
                if(findRegion){

                    return findRegion ;
                }

                return regionItem ;

            }
        }
    }
}

class main{

    constructor(mindmap){

        let me = this ;

        me.finder = new MaxBottomRegionFinder() ;

        me.mindmap = mindmap ;
    }

    adjust(node , adjustRegion , scopeNodes){

        let me = this,
        {
            mindmap,
            finder
        } = me,
        {
            nodeVerticalSeparationDistance
        } = me.mindmap.layoutConfig;

        adjustRegion = adjustRegion || getRegion.call(mindmap , node) ;

        adjustRegion.top -= nodeVerticalSeparationDistance ;

        let findRegion = finder.find(adjustRegion , scopeNodes) ;

        if(findRegion){

            setOffsetY.call(mindmap , node , findRegion.bottom - adjustRegion.top) ;

            return true ;
            
        }

        return false ;
    }

    add(node){

        let {
            mindmap,
            finder
        } = this,
        descendantNodes = getDescendantNodes.call(mindmap , node) ;

        finder.add(mindmap , node) ;

        for(let descendantNode of descendantNodes){

            finder.add(mindmap , descendantNode) ;
        }
    }
}

