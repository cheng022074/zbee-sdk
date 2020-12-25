/**
 * 
 * 基于字面量的表达式编译
 * 
 * @import complie from expression.complie
 * 
 * @import expression.parser.number
 * 
 * @import expression.parser.boolean
 * 
 * @import expression.parser.operator
 * 
 * @import expression.parser.brackets.round
 * 
 * @import expression.complier.literal
 * 
 * @import expression.complier.expression
 * 
 * @import expression.complier.operator
 * 
 * @import expression.complier.brackets
 */

const 
context = {},
parsers = [
   'expression.parser.number',
   'expression.parser.operator',
   'expression.parser.brackets.round'
],
compliers = {
   literal:'expression.complier.literal',
   expression:'expression.complier.expression',
   operator:'expression.complier.operator',
   brackets:'expression.complier.brackets'
};

console.log('未应用括号' , complie(context , '3 * 40 + 20' , parsers , compliers)()) ;

console.log('应用括号' , complie(context , '3 * (40 + 20)' , parsers , compliers)()) ;