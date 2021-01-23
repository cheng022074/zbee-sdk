
/**
 * 
 * 修改节点信息
 * 
 * @import equals from data.equals
 * 
 * @import from from .from scoped
 * 
 * @import isObject from is.object.simple
 * 
 * @import is.string
 * 
 * @import clone from data.clone
 * 
 * @param {mixed} name 脑图节点名称
 * 
 * @param {mixed} [value] 脑图节点值
 * 
 * @param {mixed} [node] 脑图节点
 * 
 */

function main(name , value , node){

    let me =  this ;

    node = from(node) ;

    if(node){

        let data ;

        if(isString(name)){

            data = {
                [name]:value
            } ;
        
        }else if(isObject(name)){

            data = name ;
        }

        if(isObject(data)){

            return update.call(me , node , data) ;
        }
    }

    return false ;
}

function update(node , data){

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

                if(!equals(newValue , oldValue)){

                    me.fireEvent(`node${field.toLowerCase()}change` , id , value , oldValue) ;

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

