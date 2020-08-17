/**
 * 
 * 基于字面量的表达式编译
 * 
 * @import complie from expression.complie
 * 
 * @import expression.complier.literal
 * 
 * @import expression.complier.expression
 * 
 */

 const context = {} ;

 console.log('返回' , complie(context , '40' , [
    'expression.parser.number'
 ] , {
     literal:'expression.complier.literal',
     expression:'expression.complier.expression'
 })()) ;