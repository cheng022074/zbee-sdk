
/**
 * 
 * 输出脑图节点
 * 
 * @import getRegion from .region scoped
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
 * @param {array} mindNodes 节点集合
 * 
 * @param {boolean} [generateLines = false] 生成连线信息 
 * 
 * @return {array} 处理后的脑图节点
 * 
 */

 const {
   padding,
   height,
   nodeHorizontalSeparationDistance
 } = this,{
   height:regionHeight
 } = getRegion(),
 {
    assign
 } = Object ;

 let nodes = [],
     lines = [],
     heightPadding = 0;

 if(height !== regionHeight){

   heightPadding = padding ;
 }

 for(let mindNode of mindNodes){

    let node = assign({} , mindNode),
        isLeaf = isLeafNode(mindNode);

    if(generateLines){

      node.x += padding ;

      node.y += heightPadding ;

      let parentNode = getParentNode(mindNode);

      if(parentNode){

          let {
            x:nodeX,
            y:nodeY
          } = getLeftXY(mindNode);

          nodeX += padding,
          nodeY += heightPadding ;

          if(isRootNode(parentNode)){

            let {
              x:parentNodeX,
              y:parentNodeY
            } = getCenterXY(parentNode);

            parentNodeX += padding,
            parentNodeY += heightPadding ;

            lines.push({
              draw:'line.bezierCurve',
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

            parentNodeX += padding,
            parentNodeY += heightPadding ;

            lines.push({
              draw:'line',
              points:[
                parentNodeX,
                parentNodeY,
                parentNodeX + nodeHorizontalSeparationDistance / 2,
                parentNodeY
              ]
            }) ;

            if(!isLeaf){

              let {
                x:nodeX,
                y:nodeY
              } = getRightXY(mindNode);

              nodeX += padding,
              nodeY += heightPadding ;

              lines.push({
                draw:'line',
                points:[
                  nodeX,
                  nodeY,
                  nodeX + nodeHorizontalSeparationDistance / 2,
                  nodeY
                ]
              }) ;

              console.log('isLeaf' , {
                draw:'line',
                points:[
                  nodeX,
                  nodeY,
                  nodeX + nodeHorizontalSeparationDistance / 2,
                  nodeY
                ]
              }) ;
  
            }

            lines.push({
              draw:'line.bezierCurve',
              points:[
                parentNodeX + nodeHorizontalSeparationDistance / 2,
                parentNodeY,
                parentNodeX + nodeHorizontalSeparationDistance / 2,
                nodeY,
                parentNodeX + nodeHorizontalSeparationDistance * .75,
                nodeY,
                nodeX,
                nodeY
              ]
            }) ;

          }
      }
    }

    delete node.children ;

    delete node.parentNodeId ;

    node.root = isRootNode(mindNode) ;

    node.leaf = isLeaf ;

    nodes.push(node) ;
 }

 return {
   nodes,
   lines
 } ;