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
 * @param {mixed} name 节点属性值
 * 
 * @param {mixed} value 节点属性值
 * 
 */

let {
    nodes
} = this,
findFn;

if(isString(name)){

    findFn = node => equals(get(node , name) , value) ;

}else if(isFunction(name)){

    findFn = name ;
}

let result = [] ;

nodes.forEach(node => {

    if(findFn(node)){

        result.push(data(node)) ;
    }

}) ;

return result ;