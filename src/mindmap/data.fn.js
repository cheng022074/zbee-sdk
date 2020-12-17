
/**
 * 
 * 输出脑图节点
 * 
 * @import getCenterXY from .node.xy.center scoped
 * 
 * @import getRightXY from .node.xy.right scoped
 * 
 * @import getLeftXY from .node.xy.left scoped
 * 
 * @import getParentNode from .data.node.parent scoped
 * 
 * @import isRootNode from .node.is.root scoped
 * 
 * @import isLeafNode from .node.is.leaf scoped
 * 
 * @import getData from .node.data scoped
 * 
 * @param {array} mindNodes 节点集合
 * 
 * @param {boolean} [generateLines = false] 生成连线信息 
 * 
 * @return {array} 处理后的脑图节点
 * 
 */

 const {
   nodeHorizontalLineBreakPointOffset
 } = this,
 nodeMap = new Map();

 let nodes = [],
     lines = [],
     selectedNode;

 mindNodes = Array.from(mindNodes) ;

 for(let mindNode of mindNodes){

    let node = getData(mindNode),
        indicated = mindNode.placeholder;

    if(generateLines){

      let parentNode = getParentNode(mindNode);

      if(parentNode && mindNodes.includes(parentNode)){

          parentNode = getData(parentNode) ;

          let {
            x:nodeX,
            y:nodeY
          } = getLeftXY(node),
          {
            x:parentNodeX,
            y:parentNodeY
          } = getRightXY(parentNode),
          offset = (nodeX - parentNodeX) / 2;

          lines.push({
            draw:'line.bezierCurve',
            indicated,
            start:parentNode,
            end:node,
            points:[
              parentNodeX,
              parentNodeY,
              parentNodeX + offset,
              parentNodeY,
              nodeX - offset,
              nodeY,
              nodeX,
              nodeY
            ]
          }) ;
      }
    }

    nodes.push(node) ;

    if(node.selected){

      selectedNode = node ;
    }
 }

 return {
   selectedNode,
   nodes,
   lines
 } ;