/**
 * 
 * 快速子节点定位器
 * 
 * @import is.string
 * 
 * @import is.number
 * 
 * @import fly from object.proxy.fly
 * 
 * @param {mixed} index 子节点定位索引
 * 
 * @return {data.node.Relationship} 节点关系对象
 * 
 */

let {
    node,
    proxy,
    parentNodeField,
    childNodesField,
    relationshipField
 } = this,
 result;

if(isString(index)){

    let childNodes = proxy.get(childNodesField) ;

    switch(index){

        case 'first':

            result = childNodes[0] ;

            break ;

        case 'last':

            result = childNodes[childNodes.length - 1] ;
    }

}else if(isNumber(index)){

    let parentNode = proxy.getIf(parentNodeField) ;

    if(parentNode){

        let childNodes = fly(parentNode).get(childNodesField) ;

        result = childNodes[childNodes.indexOf(node) + index];
    }
}

if(result){

    return fly(result).get(relationshipField) ;
}