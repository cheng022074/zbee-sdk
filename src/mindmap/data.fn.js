
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
 * @import getParentNode from .node.parent scoped
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
   nodeHorizontalSeparationDistance,
   nodeHorizontalLineBreakPointOffset
 } = this;

 let nodes = [],
     lines = [],
     selectedNode ;

 for(let mindNode of mindNodes){

    let node = getData(mindNode),
        indicated = mindNode.placeholder;

    if(generateLines){

      let parentNode =getParentNode(mindNode);

      if(parentNode){

          let isRoot = isRootNode(parentNode) ;

          parentNode = getData(parentNode) ;

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
                points:[
                  parentNodeX,
                  parentNodeY,
                  parentNodeX + nodeHorizontalLineBreakPointOffset,
                  parentNodeY
                ]
              } , {
                draw:'line.bezierCurve',
                indicated,
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