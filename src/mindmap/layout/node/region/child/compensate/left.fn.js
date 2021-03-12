/**
 * 
 * 增加向左补偿偏移的子范围
 * 
 * @import getRegion from ..logic scoped
 * 
 * @import getWidth from math.region.width
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @return {object}
 * 
 */

let region = getRegion(node) ;

if(getWidth(region) === 0){

    return region ;
}

let  {
    childRegionCompensateLeft
} = this.layoutConfig ;

region.left -= childRegionCompensateLeft ;

return region ;
