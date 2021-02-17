/**
 * 
 * 获得节点
 * 
 * @import getAnchorXY from math.region.xy.anchor
 * 
 * @import getDistance from math.point.line.distance
 * 
 * @param {object} region 基准范围
 * 
 * @param {array} originRegions 比较范围集合
 * 
 * @param {number} startIndex 起始比较位置
 * 
 * @param {function} isMatch 判断是否可进行比较 
 * 
 * @param {array} getPairAnchors 获得锚定插件
 * 
 * @param {function} [isIgnoreNode = () => false] 是否为忽略节点
 * 
 * @return {object} 匹配内容
 * 
 */

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

        let node = regionMap.get(originRegion);

        if(isIgnoreNode(node)){

            continue ;
        }

        let {
            length
        } = getPairAnchors ;

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
                    node,
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