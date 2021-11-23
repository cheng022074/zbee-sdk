
/**
 * 
 * 绝对定位布局实现
 * 
 * @import getHeight from math.region.height
 * 
 * @import getWidth from math.region.width
 * 
 * @import from from ..region.self scoped
 * 
 * @param {data.Record} node 布局节点
 * 
 */

 function main(node){

    let me = this;
  
    layout.call(me , node) ;
  
    let {
        width,
        height,
        padding
    } = this,
    region = {
        top:0,
        bottom:height,
        left:0,
        right:width
    },
    {
      left,
      right,
      top,
      bottom
    } = padding,
    regionHeight = getHeight(region),
    mindmapWidth = getWidth(region) + left + right,
    mindmapHeight = regionHeight + top + bottom,
    offsetX = left,
    offsetY = 0;
  
    if(width > mindmapWidth){
  
      mindmapWidth = width ;
    
    }
  
    if(height > mindmapHeight){
  
  
    }else{
  
      offsetY = top ;
    }
  
    return {
      offset:{
        x:offsetX,
        y:offsetY
      },
      size:{
        width:mindmapWidth,
        height:mindmapHeight
      } 
    } ;
}

function layout({
  children
}){

  console.log('layout') ;
}