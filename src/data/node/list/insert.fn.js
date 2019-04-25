
/**
 * 
 * 插入节点
 * 
 * @import insert from array.insert
 * 
 * @param {mixed} parentNode 父节点
 * 
 * @param {mixed} childNode 子节点
 * 
 * @param {mixed} baseChildNode 基准子节点
 * 
 * @param {string} position = 'before' 插入在基准子节点的前后位置
 * 
 * @return {boolean} 插入成功后则返回 true , 否则返回 false
 * 
 */

let {
    nodes,
    nodeMap
} = this,
childNodes = nodeMap.get(parentNode),
index;

if(childNodes && (index = childNodes.indexOf(baseChildNode) !== -1)){

    switch(position){

        case 'before':

            insert(childNodes , index , childNode) ;

            break ;

        case 'after':

            insert(childNodes , index + 1 , childNode) ;
    }

    index = nodes.indexOf(baseChildNode) ;

    let lastNode = getLastNode(childNode) ;

    if(!nodeMap.has(childNode) || !lastNode){

        switch(position){

            case 'before':

                insert(nodes , index , childNode) ;

                break ;

            case 'after':

                insert(nodes , index + 1 , childNode) ;
        }

        nodeMap.set(childNode , []) ;
    
    }else{

        let insertNodes = nodes.slice(nodes.indexOf(childNode) , nodes.indexOf(lastNode) + 1) ;

        switch(position){

            case 'before':

                insert(nodes , index , ...insertNodes) ;

                break ;

            case 'after':

                insert(nodes , index + 1 , ...insertNodes) ;
        }
    }
}