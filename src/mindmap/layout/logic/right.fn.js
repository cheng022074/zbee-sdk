
/**
 * 
 * 向右逻辑图算法实现
 * 
 * @import getChildNodes from ..nodes.child scoped
 * 
 * @import createRegion from .region
 * 
 * @import getHeight from math.region.width
 * 
 * @import setAnchorY from math.region.y.anchor
 * 
 * @import getY from match.region.y
 * 
 * @import from from math.from
 * 
 * @param {data.Record} rootNode 布局的根节点
 * 
 */

 function main(node){

    let region = createRegion(node) ;

    layout(node , region) ;
 }
     
 function layout(node , region){

    let childNodes = getChildNodes(node) ;

    for(let childNode of childNodes){

        layout(childNode) ;


    }

    let nodeRegion = from(node) ;

    setAnchorY(nodeRegion , getHeight(region.children(node)) / 2 , 'center') ;

    node.y = getY(nodeRegion) ;

    
 }

