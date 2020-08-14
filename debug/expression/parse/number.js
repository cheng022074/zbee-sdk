
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
 * @import expression.parser.number
 * 
 * @import expression.parser.empty
 * 
 */

 let parsers = [
    'expression.parser.string',
    'expression.parser.number',
    'expression.parser.operator',
    'expression.parser.empty'
 ] ;

 console.log(parse('40' , parsers)) ;

 console.log(parse("80+'后'" , parsers)) ;

 console.log(parse("'陈治文' + '是' + 80 + '后' + \"前端工程师\"" , parsers)) ;