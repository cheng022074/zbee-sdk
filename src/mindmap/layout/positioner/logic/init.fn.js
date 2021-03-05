/**
 * 
 * 初始化
 * 
 * @import from from math.region.from
 * 
 * @import generateBottomRegions from .regions.bottom
 * 
 * @import generateTopRegions from .regions.top
 * 
 * @param {array} nodes 脑图节点集合
 * 
 * @return {array} 范围集合
 * 
 */

let me = this,
    regionMap = me.regionMap = new Map(),
    nodeMap = me.nodeMap = new Map(),
    regions = [];

for(let node of nodes){

    let region = from(node) ;

    regions.push(region) ;

    regionMap.set(region , node) ;

    nodeMap.set(node , region) ;
}


{
    const {
        from
    } = Array ;
    
    let bottomRegions = generateBottomRegions(regions) ;
    
    me.bottomAscRegions = bottomRegions ;
    
    me.bottomDescRegions = from(bottomRegions).reverse() ;
    
    let topRegions = generateTopRegions(regions) ;

    me.topAscRegions = topRegions ;

    me.topDescRegions = from(topRegions).reverse() ;
}

me.cache = {
    SelectUpNode:new Map(),
    SelectDownNode:new Map(),
    SelectLeftNode:new Map(),
    SelectRightNode:new Map()
} ;

return regions ;