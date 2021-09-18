/**
 * 
 * 查找节点
 * 
 * @import is.string
 * 
 * @import is.function
 * 
 * @import equals from data.equals
 * 
 * @import get from object.value.get
 * 
 * @import data from ..data scoped
 * 
 * @import from from ..node.from scoped
 * 
 * @param {mixed} name 节点属性值
 * 
 * @param {mixed} [value] 节点属性值
 * 
 * @param {mixed} [scopeNode] 节点数据
 * 
 */

let {
    nodes
} = this,
findFn;

if(isString(name)){

    findFn = node => equals(get(node , name) , value) ;

    if(scopeNode){

        scopeNode = from(scopeNode) ;
    }

}else if(isFunction(name)){

    findFn = name ;

    if(value){

        scopeNode = from(scopeNode) ;
    }
}


let result = [] ;

if(findFn){

    if(scopeNode){

        nodes = scopeNode.children ;
    }

    nodes.forEach(node => {

        if(findFn(node)){
    
            result.push(data(node)) ;
        }
    
    }) ;    

}

return result ;