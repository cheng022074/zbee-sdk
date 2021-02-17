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
 * @param {array} 范围集合
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

me.bottomRegions = generateBottomRegions(regions) ;

me.topRegions = generateTopRegions(regions) ;

me.cache = {
    UpNode:new Map(),
    DownNode:new Map(),
    LeftNode:new Map(),
    RightNode:new Map()
} ;

return regions ;