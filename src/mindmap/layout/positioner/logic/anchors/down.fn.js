/**
 * 
 * 获得向下的一对锚定值
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

    start = 'tr' ;

    end = 'bl' ;

}else if(regionLeft > right){

    start = 'tl' ;

    end = 'br' ;

}else{

    let result = [{
        distance:abs(regionLeft - left),
        start:'tl',
        end:'bl'
    },{
        distance:abs(regionLeft - right),
        start:'tl',
        end:'br'
    },{
        distance:abs(regionRight - left),
        start:'tr',
        end:'bl'
    },{
        distance:abs(regionRight - right),
        start:'tr',
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
    direction:'down'
} ;