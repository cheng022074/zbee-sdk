
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
 */

 let parsers = [
    'expression.parser.string',
    //'expression.parser.operator',
    'expression.parser.empty'
 ] ;

 console.log(parse('"陈治文"' , parsers)) ;

 console.log(parse("'前端工程师'" , parsers)) ;

 //console.log(parse("'陈治文' + '是' + \"前端工程师\"" , parsers)) ;