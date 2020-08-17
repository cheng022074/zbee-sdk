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
 * @import expression.parser.function.call
 * 
 * @import expression.complier.literal
 * 
 * @import expression.complier.expression
 * 
 * @import expression.complier.operator
 * 
 * @import expression.complier.brackets
 * 
 * @import expression.complier.function
 * 
 */

const 
context = {
    functions:{
        sum(){

            return 100 ;
        }
    }
},
parsers = [
   'expression.parser.number',
   'expression.parser.operator',
   'expression.parser.function.call',
   'expression.parser.brackets.round'
],
compliers = {
   literal:'expression.complier.literal',
   expression:'expression.complier.expression',
   operator:'expression.complier.operator',
   brackets:'expression.complier.brackets',
   function:'expression.complier.function'
};

console.log(complie(context , 'sum()' , parsers , compliers)()) ;