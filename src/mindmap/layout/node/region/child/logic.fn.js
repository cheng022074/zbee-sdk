
/**
 * 
 * 获得子节点集合的范围值
 * 
 * @import getChildNodes from ......nodes.child scoped
 * 
 * @import getRegion from ..self scoped
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @return {object} 范围信息 
 * 
 */

 let childNodes = getChildNodes(node),
    {
        length
    } = childNodes;

if(length){

    let top,
        left,
        bottom,
        rights = [];

    for(let i = 0 ; i < length ; i ++){

        let region = getRegion(childNodes[i]) ;

        if(i === 0){

            top = region.top,
            left = region.left ;
        
        }
        
        if(i === length - 1){

            bottom = region.bottom ;
        }

        rights.push(region.right) ;
    }

    return {
        top,
        left,
        bottom,
        right:Math.max(...rights)
    } ;
}