
/**
 * 
 * 构建节点的一维列表
 * 
 * @import insert from array.insert
 * 
 * @param {mixed} node 节点
 * 
 * @param {object} [config = {}] 配置
 * 
 * @param {string} [config.childNodesField = 'childNodes'] 子节点集合引用字段名称 
 * 
 */

 function initNodes(nodes , nodeMap , node){

    let childNodes = node[childNodesField],
        index = nodes.indexOf(node),
        children = [];

    for(let childNode of childNodes){

        insert(nodes , index + 1 , childNode) ;

        children.push(childNode) ;

        index = initNodes(nodes , childNode);
    }

    nodeMap.set(node , children) ;

    return index;
 }

 function main(){

    let me = this,
        nodes = [
            node
        ],
        nodeMap = new Map();

    initNodes(nodes , nodeMap , node) ;

    me.nodes = nodes ;

    me.nodeMap = nodeMap ;
 }

 