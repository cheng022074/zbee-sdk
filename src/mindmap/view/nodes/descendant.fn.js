
/**
 * 
 * 获得所有的子孙节点
 * 
 * @import getFilterNodes from .filter
 * 
 * @import getDataNodes from .data
 * 
 * @param {string} id 脑图节点编号
 * 
 * @param {object} [options = {}] 配置选项
 * 
 * @param {function} [options.filter] 过滤条件
 * 
 * @param {mixed} [options.fields] 获取集合的字段集合，默认为所有字段
 * 
 * @return {array} 节点集合 
 * 
 */

function main(id , {
    filter,
    fields
}){

    return getFilterNodes(
        getDataNodes(
            getDescendantNodes(
                this.mindmap.query(id)
            ),
            fields
        ),
        filter
    ) ;
}

function getDescendantNodes(node){

    let {
        children
    } = node,
    result = [
        node
    ];

    for(let childNode of children){

        result.push(...getDescendantNodes(childNode)) ;
    }

    return result ;
}