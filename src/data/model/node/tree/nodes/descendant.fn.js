
/**
 * 
 * 获得所有子孙节点
 * 
 * @import getChildNodes from ..child scoped
 * 
 * @return {array} 节点集合 
 * 
 */

let me = this,
    childNodes = getChildNodes(),
    result = [];

for(let childNode of childNodes){

    result.push(childNode) ;

    result.push(...childNode.descendantNodes) ;

}

return result ;