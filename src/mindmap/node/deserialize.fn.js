
/**
 * 
 * 脑图节点反序列化
 * 
 * @import getChildNodes from ..data.nodes.child scoped
 * 
 * @import from from .from scoped
 * 
 * @import info from .info scoped
 * 
 * @param {mixed} node 脑图节点
 * 
 * @param {object} data 序列化数据
 * 
 */

function main(node , data){

    node = from(node) ;

    if(node.id === data.id){

        deserialize(node , data) ;
    }
}

function deserialize(node , {
    text,
    backgroundColor,
    indicators,
    children
}){

    info(node , {
        text,
        backgroundColor,
        indicators
    }) ;

    let childNodes = getChildNodes(node),
        dataSet = {};

    for(let child of children){

        dataSet[child.id] = child ;
    }

    for(let childNode of childNodes){

        let {
            id
        } = childNode ;

        if(dataSet.hasOwnProperty(id)){

            deserialize(node , dataSet[id]) ;
        }
    }

}