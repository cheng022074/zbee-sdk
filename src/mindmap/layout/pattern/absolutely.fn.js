
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
 * @import fromNode from mindmap.node.from scoped
 * 
 * @import getLineDistance from math.point.line.distance
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
      },
      getLines(nodes){

        let layoutNodes= nodes.keys(),
            lines = [];

        for(let layoutNode of layoutNodes){

            if(layoutNode.lineTo){

              let startNode = nodes.get(layoutNode),
                  {
                    rightXY:startRightXY,
                    leftXY:startLeftXY,
                    topXY:startTopXY,
                    bottomXY:startBottomXY
                  } = startNode,
                  endNode = nodes.get(fromNode(layoutNode.lineTo)),
                  {
                    rightXY:endRightXY,
                    leftXY:endLeftXY,
                    topXY:endTopXY,
                    bottomXY:endBottomXY
                  } = endNode,
                  minDistance = {};

              if(startRightXY.x < endLeftXY.x){

                doDistance(minDistance , startRightXY , endLeftXY) ;
              }

              if(startLeftXY.x > endRightXY.x){

                doDistance(minDistance , startLeftXY , endRightXY) ;
              }

              if(startBottomXY.y < endTopXY.y){

                doDistance(minDistance , startBottomXY , endTopXY) ;
              }

              if(startTopXY.y > endBottomXY.y){

                doDistance(minDistance , startTopXY , endBottomXY) ;
              
              }

              let {
                start,
                end
              } = minDistance ;

              if(start && end){

                lines.push({
                  start:startNode,
                  startXY:start,
                  end:endNode,
                  endXY:end
                }) ;
              }

              
            }
        }

        return lines ;
      } 
    } ;
}

function doDistance(distance , start , end){

    if(Object.keys(distance).length){

      let {
        value:oldValue
      } = distance,
      value = getLineDistance(start , end);

      if(oldValue > value){

        distance.value = value,
        distance.start = start,
        distance.end = end;

      }

    }else{

      distance.value = getLineDistance(start , end),
      distance.start = start,
      distance.end = end ;

    }
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