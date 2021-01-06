
/**
 * 
 * 输出脑图节点
 * 
 * @import getRegionCenterXY from math.region.xy.center
 * 
 * @import getRegionRightXY from math.region.xy.right
 * 
 * @import getRegionLeftXY from math.region.xy.left
 * 
 * @import from from math.region.from
 * 
 * @import getParentNode from .data.node.parent scoped
 * 
 * @import isRootNode from .node.is.root scoped
 * 
 * @import isLeafNode from .node.is.leaf scoped
 * 
 * @import getNodeData from .node.data scoped
 * 
 * @param {array} mindNodes 节点集合
 * 
 * @param {boolean} [generateLines = false] 生成连线信息 
 * 
 * @return {array} 处理后的脑图节点
 * 
 */

 function get(node , data){

    if(!data.has(node)){

        let nodeData = getNodeData(node),
            region = from(nodeData) ;

        data.set(node , {
          data:nodeData,
          rightXY:getRegionRightXY(region),
          leftXY:getRegionLeftXY(region),
          centerXY:getRegionCenterXY(region)
        }) ;
    }

    return data.get(node) ;
 }

 function getData(node , data){

    return get(node , data).data ;
 }

 function getRightXY(node , data){

    return get(node , data).rightXY ;
 }

 function getLeftXY(node , data){

    return get(node , data).leftXY ;
 }

 function getCenterXY(node , data){

    return get(node , data).centerXY ;
 }

 function main(mindNodes , generateLines){

    let nodes = [],
        lines = [],
        selectedNode,
        data = new Map();
  
    mindNodes = Array.from(mindNodes) ;
  
    for(let mindNode of mindNodes){
  
      if(generateLines){
  
        let parentNode = getParentNode(mindNode);
  
        if(parentNode && mindNodes.includes(parentNode)){

            let {
              placeholder:indicated
            } = mindNode ;
  
            lines.push({
              indicated,
              start:getData(parentNode , data),
              startCenterXY:getCenterXY(parentNode , data),
              startRightXY:getRightXY(parentNode , data),
              end:getData(mindNode , data),
              endLeftXY:getLeftXY(mindNode , data)
            }) ;
        }
      }

      let node = getData(mindNode , data) ;
  
      nodes.push(node) ;
  
      if(mindNode.selected){
  
        selectedNode = node ;
      }
    }
  
    return {
      selectedNode,
      nodes,
      lines
    } ;
 }