/**
 * 
 * 快速子节点定位器
 * 
 * @import is.string
 * 
 * @import is.number
 * 
 * @param {mixed} index 子节点定位索引
 * 
 * @return {data.node.Relationship} 节点关系对象
 * 
 */

let {
    node,
    parentNodeField,
    childNodesField,
    relationshipField
 } = this,
 result;

if(isString(index)){

    let childNodes = node[childNodesField] ;

    switch(index){

        case 'first':

            result = childNodes[0] ;

            break ;

        case 'last':

            result = childNodes[childNodes.length - 1] ;
    }

}else if(isNumber(index)){

    let parentNode = node[parentNodeField] ;

    if(parentNode){

        let childNodes = parentNode[childNodesField] ;

        result = childNodes[childNodes.indexOf(node) + index];
    }
}

if(result){

    return result[relationshipField] ;
}