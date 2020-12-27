
/**
 * 
 * 生成上下文对象常量名称
 * 
 * @import generate from id.generate
 * 
 * @return {object} 上下文对象常变量名称集合
 * 
 */

 let name = generate('context_') ;

 return {
    name,
    functions:`${name}.functions`
 } ;
 