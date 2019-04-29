/**
 * 
 * 插入节点列表
 * 
 * @import is.array
 * 
 * @import insert from array.insert
 * 
 * @import fly from object.proxy.fly
 * 
 * @import getBeforeStartIndex from ..node.index.start.before scoped
 * 
 * @import getAfterStartIndex from ..node.index.start.after scoped
 * 
 * @import getBeforeEndIndex from ..node.index.end.before scoped
 * 
 * @import getAfterEndIndex from ..node.index.end.after scoped
 * 
 * @import doInsertNodes from ..insert scoped
 * 
 * @param {mixed} node 基准节点
 * 
 * @param {mixed} insertNodes 子节点
 * 
 * @param {string} [position = 'beforeend'] 插入位置
 * 
 * @return {boolean} 如果插入成功则返回 true , 否则返回 false
 * 
 */

if(!isArray(insertNodes)){

    insertNodes = [
        insertNodes
    ] ;
}

let {
    nodes,
    childNodesField,
    expandedField
} = this;


if(nodes.includes(node)){

    switch(position){

        case 'beforestart':

            insert(nodes , getBeforeStartIndex(node) , ...insertNodes) ;

            break ;

        case 'afterstart':

            insert(nodes , getAfterStartIndex(node) , ...insertNodes) ;
        
            break ;

        case 'beforeend':

            insert(nodes , getBeforeEndIndex(node) , ...insertNodes) ;

            break ;

        case 'afterend':

            insert(nodes , getAfterEndIndex(node) , ...insertNodes) ;
    }

    for(let insertNode of insertNodes){

        if(fly(insertNode).get(expandedField) === true){

            doInsertNodes(insertNode , fly(insertNode).get(childNodesField)) ;
        }
    }

    return true ;
}

return false ;



