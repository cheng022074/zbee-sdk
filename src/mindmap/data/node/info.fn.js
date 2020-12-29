
/**
 * 
 * 修改节点信息
 * 
 * @import equals from data.equals
 * 
 * @import getData from ....node.data scoped
 * 
 * @import unsized from ....node.unsized.register scoped
 * 
 * @import from from .from scoped
 * 
 * @import isObject from is.object.simple
 * 
 * @import is.string
 * 
 * @import is.array
 * 
 * @import copy from object.copy
 * 
 * @import clone from data.clone
 * 
 * @param {mixed} [node] 脑图节点
 * 
 * @param {object} [data] 修改节点信息
 * 
 * @param {boolean} [isSilentMode = false] 是否静默模式
 * 
 */

function main(node , data , isSilentMode){

    let me =  this ;

    node = from(node) ;

    if(node){

        if(isObject(data)){

            if(setNodeInfo.call(me , node , data , isSilentMode)){

                if(!node.hidden){

                    unsized(node , true) ;

                    me.layout() ;
                }
            }

            return ;
        
        }else if(isString(data)){

            return node[data] ;
        
        }else if(isArray(data)){

            return copy({} , node , data) ;
        }

        return getData(node) ;
    }
}

function setNodeInfo(node , data , isSilentMode){

    let fields = Object.keys(data),
        me = this,
        {
            nodes
        } = me,
        isUpdated = false;

    for(let field of fields){

        let value = data[field],
            oldValue = node[field];

        if(equals(oldValue , value)){

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

            break ;

            default:

                let newValue = node[field] = clone(value),
                {
                    id
                } = node ;

                if(!equals(newValue , oldValue) && !isSilentMode){

                    me.fireEvent(`node${field}change` , id , value , oldValue) ;

                    me.fireEvent('nodechange' , id , field , value , oldValue) ;
                }
        }

        isUpdated = true ;
    }

    return isUpdated ;
}

function sync(oldId){

    let {
        nodes,
        visibilityNodes,
        unsizedNodes,
        leafNodes
    } = this ;

    syncMap(nodes , oldId) ;

    syncMap(visibilityNodes , oldId) ;

    syncMap(unsizedNodes , oldId) ;

    syncMap(leafNodes , oldId) ;
}

function syncMap(map , id){

    if(map.has(id)){

        let node = map.get(id) ;

        map.delete(id) ;

        map.set(node.id , node) ;
    }
}

