
/**
 * 
 * 输出脑图节点
 * 
 * @import getRegion from .region scoped
 * 
 * @import getCenterXY from .node.xy.right scoped
 * 
 * @import getLeftXY from .node.xy.left scoped
 * 
 * @import getParentNode from .node.parent scoped
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
   height
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

    let node = assign({} , mindNode) ;

    if(generateLines){

      node.x += padding ;

      node.y += heightPadding ;

      let parentNode = getParentNode(node) ;

      if(parentNode){

          let {
            x:parentNodeX,
            y:parentNodeY
          } = getCenterXY(parentNode),
          {
            x:nodeX,
            y:nodeY
          } = getLeftXY(node);

          parentNodeX += padding,
          parentNodeY += heightPadding ;

          nodeX += padding,
          nodeY += heightPadding ;

          lines.push([
            parentNodeX,
            parentNodeY,
            parentNodeX,
            nodeY,
            parentNodeX + (nodeX - parentNodeX) / 2,
            nodeY,
            nodeX,
            nodeY
          ]) ;
      }
    }

    delete node.children ;

    delete node.parentNodeId ;

    nodes.push(node) ;
 }

 return {
   nodes,
   lines
 } ;