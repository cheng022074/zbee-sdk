
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
 * @param {array} nodes 布局脑图节点集合
 * 
 */

 function generateBottomAscRegions(regions){

    return regions.sort(({
        bottom:bottom1
    } , {
        bottom:bottom2
    }) => bottom1 - bottom2) ;
 }

 function generateTopDescRegions(regions) {
     
    return regions.sort(({
        top:top1
    } , {
        top:top2
    }) => top2 - top1) ;
 }

 function generateLeftDescRegions(regions){

    return regions.sort(({
        left:left1
    } , {
        left:left2
    }) => left2 - left1) ;
 }

 function generateRightAscRegions(regions){

    return regions.sort(({
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

 function getNode(nodeXY , regions , isMatch , getRegionXY){

    let {
        regionMap
    } = this,
    minDistance = Number.MAX_VALUE,
    matchNode;

    for(let region of regions){

        if(isMatch(region , nodeXY)){

            let distance = getDistance(getRegionXY(region) , nodeXY) ;

            if(minDistance > distance){

                minDistance = distance ;

                matchNode = regionMap.get(region) ;
            }

        }else{

            break ;
        }
    }

    return {
        node:matchNode,
        distance:minDistance
    } ;

 }

 function getUpNode(nodeXY){

    let me = this,{
        bottomAscRegions
    } = me ;

    return getNode.call(me , nodeXY , bottomAscRegions , ({
        bottom
    } , {
        y
    }) => bottom < y , region => getAnchorXY(region , 'b')) ;
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

 function getDownNode(nodeXY){

    let me = this,
    {
        topDescRegions
    } = me ;

    return getNode.call(me , nodeXY , topDescRegions , ({
        top
    } , {
        y
    }) => top > y , region => getAnchorXY(region , 't')) ;
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
 } = Array ;

 class main {

    constructor(nodes){

        let me = this,
            {
                region:regionMap,
                node:nodeMap
            } = generateMap(nodes),
            regions = from(nodeMap.values());

        me.bottomAscRegions = generateBottomAscRegions(regions) ;

        me.topDescRegions = generateTopDescRegions(from(regions)) ;

        me.leftDescRegions = generateLeftDescRegions(from(regions)) ;

        me.rightAscRegions = generateRightAscRegions(from(regions)) ;

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
            nodeMap
        } = me ;

        return getUpNode.call(me , getAnchorXY(nodeMap.get(node) , 't')).node ;

    }

    getDownNode(node){

        return getCacheNode.call(this , node , 'DownNode') ;
    }

    applyDownNode(node){

        let me = this,
        {
            nodeMap
        } = me ;

        return getDownNode.call(me , getAnchorXY(nodeMap.get(node) , 'b')).node ;
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