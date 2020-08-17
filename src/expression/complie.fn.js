/**
 * 
 * 编译表达式
 * 
 * @import parse from .parse
 * 
 * @import getContext from .complie.context
 * 
 * @import get from function.get
 * 
 * @param {mixed} context 表达式中的上下文数据
 * 
 * @param {string} expresssion 表达式
 * 
 * @param {array} parsers 解析器集合
 * 
 * @param {object} compliers 编译器集合
 * 
 * @return {function} 编译成可用的函数
 * 
 */

 function main(context , expresssion , parsers , compliers){

    let CONTEXT = getContext() ;

    console.log(JSON.stringify(parse(expresssion , parsers) , null , 2)) ;

    return new Function(`

        const ${
            CONTEXT.name
        } = this ;

        return ${complie(CONTEXT , [
            parse(expresssion , parsers)
        ] , compliers)};
        
    `).bind(context) ;
 }

 function complie(context , nodes , compliers , joinCharacter = ''){

    let result = [] ;
   
    for(let {
        syntax,
        children = [],
        ...options
    } of nodes){

        result.push(get(compliers[syntax])(options , joinCharacter => complie(context , children , compliers , joinCharacter) , context)) ;
    }

    return result.join(joinCharacter) ;
 }


