
/**
 * 
 * 右则逻辑图位置器实现
 * 
 * @import getDistance from math.point.line.distance
 * 
 * @import getAnchorXY from math.region.xy.anchor
 * 
 * @import from from math.region.from
 * 
 */

 function generateBottomAscRegions(regions){

    return regions.sort(({
        bottom:bottom1
    } , {
        bottom:bottom2
    }) => bottom1 - bottom2) ;
 }

 function generateTopDescRegion(regions) {
     
    return regions.sort(({
        top:top1
    } , {
        top:top2
    }) => top2 - top1) ;
 }

 function generateLeftDescRegion(regions){

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

 function generateNodeMap(nodes) {
  
    let regionMap = new Map(),
        nodeMap = new Map();

    for(let node of nodes){

        let region = from(node) ;

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

    let {
        bottomAscRegions
    } = this ;

    return getNode(nodeXY , bottomAscRegions , ({
        bottom
    } , {
        y
    }) => bottom < y , region => getAnchorXY(region , 'b')) ;
 }

 function getLeftNode(nodeXY){

    let {
        rightAscRegions
    } = this ;

    return getNode(nodeXY , rightAscRegions , ({
        right
    } , {
        x
    }) => right < x , region => getAnchorXY(region , 'r')) ;
 }

 function getDownNode(nodeXY){

    let {
        topDescRegions
    } = this ;

    return getNode(nodeXY , topDescRegions , ({
        top
    } , {
        y
    }) => top > y , region => getAnchorXY(region , 't')) ;
 }

 function getRightNode(nodeXY){

    let {
        leftDescRegions
    } = this ;

    return getNode(nodeXY , leftDescRegions , ({
        left
    } , {
        x
    }) => left > x , region => getAnchorXY(region , 'l')) ;
 }

 class main {

    constructor(nodes){

        let me = this,
            {
                region:regionMap,
                node:nodeMap
            } = generateMap(nodes),
            regions = Array.from(nodeMap.values());

        me.bottomAscRegions = generateBottomAscRegions(regions) ;

        me.topDescRegion = generateTopDescRegion(regions) ;

        me.leftDescRegions = generateLeftDescRegion(regions) ;

        me.rightAscRegions = generateRightAscRegions(regions) ;

        me.nodeMap = nodeMap ;

        me.regionMap = regionMap ;
    }

    getUpNode(node){

        let me = this,
        {
            nodeMap
        } = me ;

        return getUpNode.call(me , getAnchorXY(nodeMap.get(node) , 't')).node ;

    }

    getDownNode(node){

        let me = this,
        {
            nodeMap
        } = me ;

        return getDownNode.call(me , getAnchorXY(nodeMap.get(node) , 'b')).node ;
    }

    getLeftNode(node){

        let me = this,
        {
            nodeMap
        } = me ;

        return getLeftNode.call(me , getAnchorXY(nodeMap.get(node) , 'l')).node ;
    }

    getRightNode(node){

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