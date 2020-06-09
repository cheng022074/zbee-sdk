
/**
 * 
 * 修改节点信息
 * 
 * @import equals from data.equals
 * 
 * @import get from .get scoped
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
                    
                    let {
                        id,
                        children
                    } = node ;

                    if(nodes.has(value)){

                        console.error(`${value} - 脑图中已经存该节点`) ;

                        continue ;
                    }

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

            if(!node.hidden){

                me.fireEvent('nodeunsized' , [
                   node
                ]) ;
    
            }else{
    
                node.width = false ;
    
                node.height = false ;
            }
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

    syncMap(visibilityNodes , oldId) ;

    syncMap(unsizedNodes , oldId) ;

    syncMap(leafNodes , oldId) ;

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

