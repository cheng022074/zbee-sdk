
/**
 * 
 * 解析表达式中的函数
 * 
 * @import parse from ..container
 * 
 * @import .param.split
 * 
 * @import ..string
 * 
 * @import ..empty
 * 
 * @import doParse from ....parse.inner
 * 
 * @import isObject from is.object.simple
 * 
 * @param {array} nodes 表达式中间数据
 * 
 */

let tag ;

const leftBracketRe = /\($/ ;

return parse(nodes , /[A-Za-z]\w*\s*\(|\)/g , (children , startTag , endTag) => {

    tag = undefined ;

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

        if(isObject(node) && node.syntax === 'split'){

            let prevNode = children[i - 1] ;

            if(i === 0 || isObject(prevNode) && prevNode.syntax === 'split'){

                children.splice(i , 0 , {
                    syntax:'literal',
                    datatype:'undefined',
                    value:undefined
                }) ;

                i ++ ;

                length ++ ;
            
            }else if(i === length - 1){

                children.push({
                    syntax:'literal',
                    datatype:'undefined',
                    value:undefined
                }) ;
            }
        }
    }

    return {
        syntax:'function',
        operation:'call',
        name:startTag.replace(leftBracketRe , ''),
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
            count = 0;

        for(let key of keys){

            if(leftBracketRe.test(key)){

                count += chars[key] ;
            }
        }

        return count === chars[')'] ;
    }

    return false ;

}) ;