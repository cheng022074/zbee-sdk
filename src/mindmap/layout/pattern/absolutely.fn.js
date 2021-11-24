
/**
 * 
 * 绝对定位布局实现
 * 
 * @import getHeight from math.region.height
 * 
 * @import getWidth from math.region.width
 * 
 * @import from from ..node.region.self scoped
 * 
 * @param {data.Record} node 布局节点
 * 
 */

 function main(node){

    let me = this;
  
    let {
        width,
        height,
        padding
    } = this,
    region = layout.call(me , node),
    {
      left,
      right,
      top,
      bottom
    } = padding,
    regionHeight = getHeight(region),
    mindmapWidth = getWidth(region) + left + right,
    mindmapHeight = regionHeight + top + bottom;

    return {
      offset:{
        x:left,
        y:top
      },
      size:{
        width:Math.max(width , mindmapWidth),
        height:Math.max(height , mindmapHeight)
      } 
    } ;
}

function layout({
  children
}){

  if(children.length === 0){
    
    return {
      top:0,
      left:0,
      right:0,
      bottom:0
    } ;

  }

  let regions = children.map(node => from(node)),
      right = Math.max(...regions.map(({
        right
      }) => right)),
      bottom = Math.max(...regions.map(({
        bottom
      }) => bottom));

  return {
    top:0,
    left:0,
    right,
    bottom
  }
}