
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
   nodeHorizontalSeparationDistance
 } = this;

 let nodes = [],
     lines = [],
     selectedNode ;

 for(let mindNode of mindNodes){

    let node = getData(mindNode),
        isLeaf = isLeafNode(mindNode),
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

            lines.push({
              draw:'line',
              indicated,
              points:[
                parentNodeX,
                parentNodeY,
                parentNodeX + nodeHorizontalSeparationDistance / 2,
                parentNodeY
              ]
            }) ;

            lines.push({
              draw:'line.bezierCurve',
              indicated,
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

          if(!isLeaf){

            let {
              x:nodeX,
              y:nodeY
            } = getRightXY(node);

            lines.push({
              draw:'line',
              indicated,
              points:[
                nodeX,
                nodeY,
                nodeX + nodeHorizontalSeparationDistance / 2,
                nodeY
              ]
            }) ;

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