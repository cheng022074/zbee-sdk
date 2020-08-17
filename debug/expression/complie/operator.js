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
 * @import expression.parser.operator
 * 
 * @import expression.complier.literal
 * 
 * @import expression.complier.expression
 * 
 * @import expression.complier.operator
 * 
 */

const 
context = {},
parsers = [
   'expression.parser.string',
   'expression.parser.number',
   'expression.parser.boolean',
   'expression.parser.operator'
],
compliers = {
   literal:'expression.complier.literal',
   expression:'expression.complier.expression',
   operator:'expression.complier.operator'
};

console.log('数字应用加法' , complie(context , '40 + 20' , parsers , compliers)()) ;

console.log('字符串应用加法' , complie(context , '"运算先锋" + "是拥有" + 16 + "年经验的工程师"' , parsers , compliers)()) ;

console.log('减法' , complie(context , '40 - 20' , parsers , compliers)()) ;

console.log('乘法' , complie(context , '40 * 20' , parsers , compliers)()) ;

console.log('除法' , complie(context , '40 div 20' , parsers , compliers)()) ;