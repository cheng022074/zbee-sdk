
/**
 * 
 * 修改节点信息
 * 
 * @import equals from data.equals
 * 
 * @import fireDrawEvent from ..fire.draw scoped
 * 
 * @param {object} data 修改节点信息
 * 
 * @param {string} [id] 节点编号
 * 
 */

function main(data , id){

    let me = this,
    {
    selectedNode,
    nodes
    } = me,
    node = id ? get(id) : selectedNode;

    if(node){

        let fields = Object.keys(data),
            isUpdated = false;

        for(let field of fields){

            let value = data[field] ;

            if(equals(node[field] , value)){

                continue ; 
            }

            switch(field){

                case 'parentNodeId':
                case 'text':
                case 'x':
                case 'y':
                case 'width':
                case 'height':
                case 'hidden':
                case 'expanded':
                case 'level':
                case 'selected':
                case 'placeholder':
                case 'restructuring':
                case 'indicated':
                case 'order':

                    continue ;

                case 'id':

                {
                    if(nodes.has(value)){

                        throw new Error(`${id} - 脑图中已经存该节点`) ;
                    }

                   
                    let {
                        id,
                        children
                    } = node ;

                    node.id = value ;

                    for(let childNode of children){

                        childNode.parentNodeId = value ;
                    }

                    sync.call(me , id , value) ;
                }

                isUpdated = true ;

                break ;

                default:

                    node[field] = value ;

                    isUpdated = true ;
            }
        }

        if(isUpdated = true){

            fireDrawEvent() ;
        }
    }
}

function sync(oldId , id){

    let {
        nodes,
        visibilityNodes,
        unsizedNodes,
        leafNodes,
        visibilityNodeLevels
    } = this ;

    syncMap(nodes , oldId) ;

    syncMap(visibilityNodes , id) ;

    syncMap(unsizedNodes , id) ;

    syncMap(leafNodes , id) ;

    let keys = visibilityNodeLevels.keys() ;

    for(let key of keys){

        let ids = visibilityNodeLevels.get(key),
            index = ids.indexOf(oldId);

        if(index !== -1){

            ids[index] = id ;

            break ;
        }
    }
}

function syncMap(map , id){

    if(map.has(id)){

        let node = map.get(id) ;

        map.delete(id) ;

        map.set(node.id , node) ;
    }
}

