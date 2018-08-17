
/**
 * 
 * 根据坐标获得相应方位的坐标
 * 
 * @import is.array
 * 
 * @import getAnchor from math.point.rect.anchor
 * 
 * @param {object} xy 坐标
 * 
 * @param {number} xy.x 横坐标
 * 
 * @param {number} xy.y 纵坐标
 * 
 * @param {object} size 尺寸
 * 
 * @param {number} size.width 宽度
 * 
 * @param {number} size.height 高度
 * 
 * @param {string|array} [anchor='tl'] 方位
 * 
 * @return {object} 方位坐标
 * 
 */

if(isArray(anchor)){

    let result = [],
        xy = {
            x,
            y
        },
        size = {
            width,
            height
        };

    for(let item of anchor){

        result.push(getAnchor(xy , size , item)) ;
    }

    return result ;

}else{

    switch(anchor){

        case 'tl':
    
            return {
                x,
                y
            } ;
    
        case 't':
    
            return {
                x:x + width / 2,
                y 
            } ;
    
        case 'tr':
    
            return {
                x: x + width,
                y
            } ;
    
        case 'r':
    
            return {
                x: x + width,
                y: y + height / 2
            } ;
    
        case 'br':
    
            return {
                x: x + width,
                y : y + height
            } ;
    
        case 'b':
    
            return {
                x: x + width / 2,
                y: y + height
            } ;
    
        case 'bl':
    
            return {
                x,
                y: y + height
            } ;
    
        case 'l':
    
            return {
                x,
                y: y + height / 2
            } ;
    
        case 'c':
    
            return {
                x : x + width / 2,
                y: y + height / 2
            } ;
    }
}

