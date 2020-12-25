
/**
 * 
 * 表达式解析
 * 
 * @import get from function.get
 * 
 * @import isObject from is.object.simple
 * 
 * @import from from array.from
 * 
 * @import parse from .inner
 * 
 * @param {mixed} expression 语法树
 * 
 * @param {array} parsers 解析器集合
 * 
 * @return {array} 解析出来的 AST 语法树 
 * 
 */

let nodes = from(expression) ;

for(let parser of parsers){

    nodes = get(parser)(nodes) ;
}

for(let node of nodes){

    if(isObject(node) && node.hasOwnProperty('children')){

        node.children = parse(node.children , parsers) ;
    }
}

return nodes ;