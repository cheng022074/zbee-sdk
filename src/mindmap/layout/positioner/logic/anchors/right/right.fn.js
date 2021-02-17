/**
 * 
 * 获得向右的一对锚定值
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

    start = 'bl' ;

    end = 'tr' ;

}else if(regionTop > bottom){

    start = 'tl' ;

    end = 'br' ;

}else{

    let result = [{
        distance:abs(regionTop - top),
        start:'tl',
        end:'tr'
    },{
        distance:abs(regionTop - bottom),
        start:'tl',
        end:'br'
    },{
        distance:abs(regionBottom - top),
        start:'bl',
        end:'tr'
    },{
        distance:abs(regionBottom - bottom),
        start:'bl',
        end:'br'
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
    direction:'right'
} ;