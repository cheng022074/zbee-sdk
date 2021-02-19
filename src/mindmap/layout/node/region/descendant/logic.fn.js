
/**
 * 
 * 获得子孙节点集合的范围值
 * 
 * @import getChildRegion from ..child.logic scoped
 * 
 * @import getSelfRegion from ..self scoped
 * 
 * @import getChildNodes from ......nodes.child scoped
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @return {object} 范围信息 
 * 
 */

 const {
    max,
    min
 } = Math ;

 function main(node){

    let regions = getRegions(node),
        tops = [],
        bottoms = [],
        rights = [],
        lefts = [],
        region = regions[0];

    regions.pop() ;

    if(regions.length === 0){

        let {
            top,
            right,
            bottom
        } = region ;

        return {
            top,
            bottom,
            left:right,
            right
        } ;
    }

    for(let region of regions){

        lefts.push(region.left) ;

        tops.push(region.top) ;

        bottoms.push(region.bottom) ;

        rights.push(region.right) ;
    }

    return {
        left:min(...lefts),
        top:min(...tops),
        bottom:max(...bottoms),
        right:max(...rights)
    }
 }

 function getRegions(node){

    let region = getChildRegion(node),
        result = [];

    if(region){

        result.push(region) ;

        let childNodes = getChildNodes(node) ;

        for(let childNode of childNodes){

            result.push(...getRegions(childNode)) ;
        }
    }

    return result ;
 }