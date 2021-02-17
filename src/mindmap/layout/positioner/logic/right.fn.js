
/**
 * 
 * 右则逻辑图位置器实现
 * 
 * @import getDistance from math.point.line.distance
 * 
 * @import getAnchorXY from math.region.xy.anchor
 * 
 * @import fromRegion from math.region.from
 * 
 * @import getUpNodeAnchors from .anchors.up
 * 
 * @param {array} nodes 布局脑图节点集合
 * 
 */

 function generateBottomRegions(regions){

    return from(regions).sort(({
        bottom:bottom1
    } , {
        bottom:bottom2
    }) => bottom2 - bottom1) ;
 }

 function generateTopRegions(regions) {
     
    return from(regions).sort(({
        top:top1
    } , {
        top:top2
    }) => top1 - top2) ;
 }

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

 function generateMap(nodes) {
  
    let regionMap = new Map(),
        nodeMap = new Map();

    for(let node of nodes){

        let region = fromRegion(node) ;

        regionMap.set(region , node) ;

        nodeMap.set(node , region) ;
    }

    return {
        region:regionMap,
        node:nodeMap
    } ;
 }

 function getNode(region , originRegions , startIndex , isMatch , getPairAnchors){

    let me = this,
    {
        regionMap
    } = this,
    {
        length
    } = originRegions,
    result = [];

    for(let i = startIndex ; i < length ; i ++){

        let originRegion = originRegions[i] ;

        if(isMatch(originRegion , region)){

            let {
                length
            } = getPairAnchors;

            for(let i = 0 ; i < length ; i ++){

                let item = result[i],
                {
                    start,
                    end,
                    direction
                } = getPairAnchors[i](originRegion , region),
                distance = getDistance(getAnchorXY(originRegion , start) , getAnchorXY(region , end)) ;

                if(!item || item.distance > distance){

                    result[i] = {
                        distance,
                        node:regionMap.get(originRegion),
                        direction
                    } ;
                }
            }
        }
    }

    if(result.length){

        return result.sort(({
            distance:distance1
        } , {
            distance:distance2
        }) => distance1 - distance2)[0] ;
    }

    return {} ;
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

function getDownNode(nodeXY){

    let me = this,
    {
        topDescRegions
    } = me ;

    return getNode.call(me , nodeXY , topDescRegions , ({
        top
    } , {
        y
    }) => top > y , region => getAnchorXY(region , 'tl')) ;
 }

 function getCacheNode(node , name){

    let me = this,
    {
        cache
    } = me,
    map = cache[name];

    if(!map.has(node)){

        map.set(node , me[`apply${name}`](node)) ;
    }

    return map.get(node) ;
 }

 const {
    from
 } = Array,
 {
    abs
 } = Math;

 class main {

    constructor(nodes){

        let me = this,
            {
                region:regionMap,
                node:nodeMap
            } = generateMap(nodes),
            regions = from(nodeMap.values());

        me.bottomRegions = generateBottomRegions(regions) ;

        me.topRegions = generateTopRegions(regions) ;

        me.leftDescRegions = generateLeftDescRegions(regions) ;

        me.rightAscRegions = generateRightAscRegions(regions) ;

        me.nodeMap = nodeMap ;

        me.regionMap = regionMap ;

        me.cache = {
            UpNode:new Map(),
            DownNode:new Map(),
            LeftNode:new Map(),
            RightNode:new Map()
        } ;
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
            regionMap,
            topRegions
        } = me,
        region = nodeMap.get(node),
        {
            bottom
        } = region,
        {
            length
        } = topRegions;

        for(let i = topRegions.indexOf(region) + 1 ; i < length ; i ++){

            let topRegion = topRegions[i] ;

            if(topRegion.top > bottom){

                return regionMap.get(topRegion) ;
            }
        }
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

        let me = this,
        data = [{
            ...getUpNode.call(me , xy),
            direction:'up'
        },{
            ...getDownNode.call(me , xy),
            direction:'down'
        },{
            ...getLeftNode.call(me , xy),
            direction:'left'
        }],
        minDistance = Number.MAX_VALUE,
        result;

        for(let {
            distance,
            node,
            direction
        } of data){

            if(minDistance > distance){

                minDistance = distance ;

                result = {
                    direction,
                    node
                } ;
            }
        }

        return result ;
    }

 }