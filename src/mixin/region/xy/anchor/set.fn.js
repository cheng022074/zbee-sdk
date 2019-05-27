
/**
 * 
 * 计算当前区域锚点坐标
 * 
 * @import is.defined
 * 
 * @param {object} xy 设置坐标
 * 
 * @param {string} [anchor = 'tl'] 锚点信息
 * 
 * @return {object} 坐标值 
 * 
 */

let {
    x:originX,
    y:originY,
    width,
    height
} = this,
{
    x,
    y
} = xy,
defaultXY = {};

if(!isDefined(x)){

    defaultXY.x = originX ;
}

if(!isDefined(y)){

    defaultXY.y = originY ;
}

const {
    assign
} = Object ;

switch(anchor){

   case 'c':

        return assign({
            x:x - width / 2,
            y:y - height / 2
        } , defaultXY) ;

   case 'tl':

       return assign({
           x,
           y
       } , defaultXY) ;

   case 'r':

       return assign({
           x:x - width,
           y:y - height / 2
       } , defaultXY) ;

   case 'l':

       return assign({
           x,
           y:y - height / 2
       } , defaultXY) ;

   case 't':

       return assign({
           x:x - width / 2,
           y 
       } , defaultXY) ;

   case 'b':

       return assign({
           x:x - width / 2,
           y:y - height
       } , defaultXY) ;
}