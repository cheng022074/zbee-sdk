/**
 * 
 * 获得向左的一对锚定值
 * 
 * @param {object} originRegion 比较范围
 * 
 * @param {object} region 基准范围
 * 
 * @return {object} 锚定值
 * 
 */

const {
    abs
 } = Math,{
    top:regionTop,
    bottom:regionBottom
 } = originRegion,
 {
    top,
    bottom
 } = region ;

let start,
    end ;

if(regionBottom < top){

    start = 'br' ;

    end = 'tl' ;

}else if(regionTop > bottom){

    start = 'tr' ;

    end = 'bl' ;

}else{

    let result = [{
        distance:abs(regionTop - top),
        start:'tr',
        end:'tl'
    },{
        distance:abs(regionTop - bottom),
        start:'tr',
        end:'bl'
    },{
        distance:abs(regionBottom - top),
        start:'br',
        end:'tl'
    },{
        distance:abs(regionBottom - bottom),
        start:'br',
        end:'bl'
    }].sort(({
        distance:distance1
    } , {
        distance:distance2
    }) => distance1 - distance2)[0] ;

    start = result.start ;

    end = result.end ;
}

return {
    start,
    end,
    direction:'left'
} ;