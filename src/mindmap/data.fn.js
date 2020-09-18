
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
 nodeMap = new Map(),
 getNodeData = node => {

    if(!nodeMap.has(node)){

        nodeMap.set(node , getData(node)) ;
    }

    return nodeMap.get(node) ;
 };

 let nodes = [],
     lines = [],
     selectedNode;

 mindNodes = Array.from(mindNodes) ;

 for(let mindNode of mindNodes){

    let node = getNodeData(mindNode),
        indicated = mindNode.placeholder;

    if(generateLines){

      let parentNode = getParentNode(mindNode);

      if(parentNode && mindNodes.includes(parentNode)){

          let isRoot = isRootNode(parentNode) ;

          parentNode = getNodeData(parentNode) ;

          let {
            x:nodeX,
            y:nodeY
          } = getLeftXY(node);

          if(isRoot){

            let {
              x:parentNodeX,
              y:parentNodeY
            } = getCenterXY(parentNode);

            lines.push({
              draw:'line.bezierCurve',
              indicated,
              start:parentNode,
              end:node,
              points:[
                parentNodeX,
                parentNodeY,
                parentNodeX,
                nodeY,
                parentNodeX + (nodeX - parentNodeX) / 2,
                nodeY,
                nodeX,
                nodeY
              ]
            }) ;
          
          }else{

            let {
              x:parentNodeX,
              y:parentNodeY
            } = getRightXY(parentNode);

            if(nodeHorizontalLineBreakPointOffset){

              lines.push({
                draw:'line',
                indicated,
                start:parentNode,
                end:node,
                points:[
                  parentNodeX,
                  parentNodeY,
                  parentNodeX + nodeHorizontalLineBreakPointOffset,
                  parentNodeY
                ]
              } , {
                draw:'line.bezierCurve',
                indicated,
                start:parentNode,
                end:node,
                points:[
                  parentNodeX + nodeHorizontalLineBreakPointOffset,
                  parentNodeY,
                  parentNodeX + nodeHorizontalLineBreakPointOffset,
                  nodeY,
                  parentNodeX + (nodeX - parentNodeX) * .75,
                  nodeY,
                  nodeX,
                  nodeY
                ]
              }) ;
            
            }else{

              let {
                x:parentNodeX,
                y:parentNodeY
              } = getCenterXY(parentNode);
  
              lines.push({
                draw:'line.bezierCurve',
                indicated,
                start:parentNode,
                end:node,
                points:[
                  parentNodeX,
                  parentNodeY,
                  parentNodeX,
                  nodeY,
                  parentNodeX + (nodeX - parentNodeX) / 2,
                  nodeY,
                  nodeX,
                  nodeY
                ]
              }) ;
            }

          }
      }
    }

    nodes.push(node) ;

    if(node.selected){

      selectedNode = Object.assign({} , node) ;
    }
 }

 return {
   selectedNode,
   nodes,
   lines
 } ;