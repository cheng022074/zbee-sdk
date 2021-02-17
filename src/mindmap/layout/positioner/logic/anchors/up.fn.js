/**
 * 
 * 获得向上的一对锚定值
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
    left:regionLeft,
    right:regionRight
 } = originRegion,
 {
    left,
    right
 } = region ;

let start,
    end ;

if(regionRight < left){

    start = 'br' ;

    end = 'tl' ;

}else if(regionLeft > right){

    start = 'bl' ;

    end = 'tr' ;

}else{

    let result = [{
        distance:abs(regionLeft - left),
        start:'bl',
        end:'tl'
    },{
        distance:abs(regionLeft - right),
        start:'bl',
        end:'tr'
    },{
        distance:abs(regionRight - left),
        start:'br',
        end:'tl'
    },{
        distance:abs(regionRight - right),
        start:'br',
        end:'tr'
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
    direction:'up'
} ;