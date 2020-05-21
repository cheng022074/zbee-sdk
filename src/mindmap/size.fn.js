
/**
 * 
 * 获取当前脑图区域
 * 
 * @return {object} 区域数据 
 * 
 */

 let{
   padding,
   region,
   width:mindmapWidth,
   height:mindmapHeight
 } = this,
 {
    right,
    bottom
 } = region,
 width,
 height;

 padding *= 2 ;

if(mindmapHeight > bottom){

   height = mindmapHeight ;

}else{

   height = bottom + padding ;
}

if(mindmapWidth > right){

   width = mindmapWidth;

}else{

   width = right + padding;
}

 return {
    width,
    height
 } ;