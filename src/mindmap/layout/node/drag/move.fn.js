
/**
 * 
 * 拖曳节点
 * 
 * @import getAnchorY from math.region.y.anchor
 * 
 * @import from from math.region.from
 * 
 * @param {object} xy 坐标
 * 
 * @param {number} xy.y 纵坐标
 * 
 * @param {object} [node] 节点
 * 
 */

 

if(node){

    let region = from(node),
        centerY = getAnchorY(region , 'center');

    if(y > centerY){

        console.log(node.text , 'after') ;
    
    }else{

        console.log(node.text , 'before') ;
    }
    
}


