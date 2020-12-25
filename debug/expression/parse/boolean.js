
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
 * @import expression.parser.boolean
 * 
 * @import expression.parser.empty
 * 
 */

 let parsers = [
    'expression.parser.boolean',
    'expression.parser.number',
    'expression.parser.operator',
    'expression.parser.empty'
 ] ;

 console.log(parse('true' , parsers)) ;

 console.log(parse("1 = 2" , parsers)) ;