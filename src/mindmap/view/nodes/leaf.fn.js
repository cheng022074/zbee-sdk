
/**
 * 
 * 获得所有的叶子节点
 * 
 * @import getFilterNodes from .filter
 * 
 * @import getDataNodes from .data
 * 
 * @param {string} id 脑图节点编号
 * 
 * @param {object} options 配置选项
 * 
 * @param {function} [options.filter] 过滤条件
 * 
 * @param {mixed} [opitions.fields] 获取集合的字段集合，默认为所有字段
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
            getLeafNodes(
                this.mindmap.query(id)
            ),
            filter
        ),
        fields
    ) ;
}

function getLeafNodes(node){

    let {
        children
    } = node;

    if(children.length){

        let result = [] ;

        for(let childNode of children){

            result.push(...getLeafNodes(childNode)) ;
        }

        return result ;
    }

    return [
        node
    ] ;
}