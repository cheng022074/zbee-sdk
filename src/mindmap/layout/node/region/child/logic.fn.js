
/**
 * 
 * 获得子节点集合的范围值
 * 
 * @import self from ..self scoped
 * 
 * @import getChildNodes from ......nodes.child scoped
 * 
 * @import getRegion from ..self scoped
 * 
 * @import union from math.region.union
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @param {boolean} [withSelf = false] 是否包含节点本身
 * 
 * @return {object} 范围信息 
 * 
 */

 let childNodes = getChildNodes(node),
    {
        length
    } = childNodes,
    childRegion;

if(length){

    let top,
        left,
        bottom,
        rights = [];

    for(let i = 0 ; i < length ; i ++){

        let region = getRegion(childNodes[i]) ;

        if(i === 0){

            top = region.top,
            left = region.left;
        
        }
        
        if(i === length - 1){

            bottom = region.bottom ;
        }

        rights.push(region.right) ;
    }
 
    childRegion = {
        top,
        left,
        bottom,
        right:Math.max(...rights)
    } ;

}else{

    let {
        top,
        right,
        bottom
    } = getRegion(node),
    {
        nodeHorizontalSeparationDistance
    } = this.layoutConfig;
    
    right += nodeHorizontalSeparationDistance ;
    
    childRegion = {
        top,
        bottom,
        left:right,
        right
    } ;
}

if(withSelf){

    return union(self(node) , childRegion) ;
}

return childRegion ;
