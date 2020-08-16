
/**
 * 
 * 表达式解析
 * 
 * @import parse from expression.parse
 * 
 * @import expression.parser.string
 * 
 * @import expression.parser.operator
 * 
 * @import expression.parser.empty
 * 
 * @import expression.parser.number
 * 
 * @import expression.parser.function.call
 * 
 */

 let parsers = [
    'expression.parser.string',
    'expression.parser.number',
    'expression.parser.function.call',
    'expression.parser.operator',
    'expression.parser.empty'
 ] ;

 console.log(JSON.stringify(parse('sum()' , parsers) , null , 2)) ;

 console.log(JSON.stringify(parse('sum() div count()' , parsers) , null , 2)) ;

 console.log(JSON.stringify(parse('sum(count(1 , 2) , "5" + 56)' , parsers) , null , 2)) ;

 console.log(JSON.stringify(parse('sum(,50,)' , parsers) , null , 2)) ;