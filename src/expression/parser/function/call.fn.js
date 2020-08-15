
/**
 * 
 * 解析表达式中的函数
 * 
 * @import parse from ..block
 * 
 * @import .param.split
 * 
 * @import ..string
 * 
 * @import doParse from ....parse.inner
 * 
 * @import isObject from is.object.simple
 * 
 * @param {string} expression 表达式
 * 
 */

let tag ;

return parse(expression , /[A-Za-z]\w*\s*\(|\)/g , content => {

    let [
        ,
        name,
        children
    ] = content.match(/^([A-Za-z]\w*)\s*\((.*)\)$/) ;

    children = doParse(children , [
        'expression.parser.string',
        'expression.parser.function.param.split',
        'expression.parser.empty'
    ]) ;

    let {
        length
    } = children ;

    for(let i = 0 ; i < length ; i ++){

        let node = children[i] ;

        if(isObject(node)){

            let {
                syntax
            } = node ;

            if(syntax === 'split' && (i === 0 || children[i - 1].syntax === 'split')){

                children.splice(i , 0 , {
                    syntax:'expression',
                    children:[{
                        syntax:'literal',
                        datatype:'undefined',
                        value:undefined
                    }]
                }) ;

                length ++ ;
                
            }
        }
    }

    for(let i = 0 ; i < length ; i ++){

        let node = children[i] ;

        if(isObject(node)){

            let {
                syntax
            } = children[i] ;
    
            if(syntax !== 'expression'){
    
                children.splice(i , 1) ;
    
                length -- ;
            }
        }
    }

    return {
        syntax:'function',
        operation:'call',
        name,
        children
    } ;

} , function(char){

   if(!tag && char !== ')'){

       tag = char ;

       return true ;
   }

   return false ;

} , (char , chars) => {

    if(char === ')'){

        let keys = Object.keys(chars),
            count = 0,
            leftBracketRe = /\($/;

        for(let key of keys){

            if(leftBracketRe.test(key)){

                count += chars[key] ;
            }
        }

        return count === chars[')'] ;
    }

    return false ;

}) ;