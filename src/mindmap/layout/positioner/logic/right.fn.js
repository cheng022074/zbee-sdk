
/**
 * 
 * 右则逻辑图位置器实现
 * 
 * @import getDistance from math.point.line.distance
 * 
 * @import getAnchorXY from math.region.xy.anchor
 * 
 */

 function generateBottomAscRegions(regions){


 }

 function generateTopDescRegion(regions) {
     
 }

 function generateLeftDescRegion(regions){


 }

 function generateRightAscRegions(regions){

    
 }

 function generateNodeMap(node) {
     
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

    return matchNode ;

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

        return getUpNode.call(me , getAnchorXY(nodeMap.get(node) , 't')) ;

    }

    getDownNode(node){

        let me = this,
        {
            nodeMap
        } = me ;

        return getDownNode.call(me , getAnchorXY(nodeMap.get(node) , 'b')) ;
    }

    getLeftNode(node){

        let me = this,
        {
            nodeMap
        } = me ;

        return getLeftNode.call(me , getAnchorXY(nodeMap.get(node) , 'l')) ;
    }

    getRightNode(node){

        let me = this,
        {
            nodeMap
        } = me ;

        return getRightNode.call(me , getAnchorXY(nodeMap.get(node) , 'r')) ;
    }

 }