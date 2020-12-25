/**
 * 
 * 基于字面量的表达式编译
 * 
 * @import complie from expression.complie
 * 
 * @import expression.parser.number
 * 
 * @import expression.parser.string
 * 
 * @import expression.parser.boolean
 * 
 * @import expression.complier.literal
 * 
 * @import expression.complier.expression
 * 
 */

 const 
 context = {},
 parsers = [
    'expression.parser.string',
    'expression.parser.number',
    'expression.parser.boolean'
 ],
 compliers = {
    literal:'expression.complier.literal',
    expression:'expression.complier.expression'
 };

 console.log('数字' , complie(context , '40' , parsers , compliers)()) ;

 console.log('字符串' , complie(context , '"陈治文"' , parsers , compliers)()) ;

 console.log('布尔' , complie(context , 'false' , parsers , compliers)()) ;