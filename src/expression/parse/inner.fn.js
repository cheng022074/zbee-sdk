
/**
 * 
 * 表达式解析
 * 
 * @import get from function.get
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
 * 
 * @import from from array.from
 * 
 * @import parse from .inner
 * 
 * @param {mixed} ast 语法树
 * 
 * @param {array} parsers 解析器集合
 * 
 * @return {mixed} 解析出来的 AST 语法树 
 * 
 */

ast = from(ast) ;

for(let parser of parsers){

   let {
       length
   } = ast;

   for(let i = 0 ; i < length ; i ++){

        let node = ast[i] ;

        if(isString(node)){

           let nodes = from(get(parser)(node)),
               {
                   length:len
               } = nodes;

           if(len > 1){

               length += len - 1 ;

           }else if(len === 0){

               length -- ;
           }

           ast.splice(i , 1 , ...nodes) ;

           node = nodes[i] ;
       }

       if(isObject(node) && node.hasOwnProperty('children')){

           node.children = parse(node.children , parsers) ;
       }
   }
}

return ast ;