
/**
 * 
 * 获得所有的子孙节点
 * 
 * @import from from ..node.from scoped
 * 
 * @param {mixed} node 脑图节点
 * 
 * @param {function} fn 查询条件函数
 * 
 * @return {array} 节点集合 
 * 
 */

function main(node , fn){

    let nodes = getDescendantNodes(from(node) , fn) ;

    nodes.shift() ;

    return nodes ;
}

function getDescendantNodes(node , fn){

    let {
        result,
        next
    } = fn(node),
    nodes = [];

    if(result){

        nodes.push(node) ;
    }

    if(next){

        let {
            children
        } = node ;

        for(let childNode of children){

            nodes.push(...getDescendantNodes(childNode , fn)) ;
        }
    }

    return nodes ;
}