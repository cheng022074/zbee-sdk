
/**
 * 
 * 表达式解析
 * 
 * @import parse from .parse.inner
 * 
 * @import isObject from is.object.simple
 * 
 * @param {string} expression 语法树
 * 
 * @param {array} parsers 解析器集合
 * 
 * @return {mixed} 解析出来的 AST 语法树 
 * 
 */

 function main(expression , parsers) {

   [
      expression
   ] = doParse(parse(expression , parsers)) ;

   return expression ;
 }

 function doParse(nodes){

   let result = [],
         children = [];

   for(let node of nodes){

      if(isObject(node)){

         let {
            syntax
         } = node ;

         switch(syntax){

            case 'expression':

               result.push(node) ;

               break ;

            case 'split':

               result.push({
                  syntax:'expression',
                  children
               }) ;

               children = [] ;

               break ;

            default:

               children.push(node) ;
         }

         if(syntax !== 'split' && node.hasOwnProperty('children')){

            node.children = doParse(node.children) ;
         }
      }
   }

   if(children.length){

      result.push({
         syntax:'expression',
         children
      }) ;
   }

   return result ;
 }