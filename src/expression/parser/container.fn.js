
/**
 * 
 * 解析表达式中的字符串
 * 
 * @import is.string
 * 
 * @import is.defined
 * 
 * @import parse from .container
 * 
 * @param {array} nodes 表达式中间数据
 * 
 * @param {RegExp} regex 块状正则表达式
 * 
 * @param {function} fn 生成语法树的回调
 * 
 * @param {function} startFn 块状态起始字符串
 * 
 * @param {function} endFn 块状态终止字段串
 * 
 * @param {array} [ignores = []] 忽略的字符串
 * 
 */

 let result = [],
     children,
     startNode,
     startNodeStartIndex,
     startNodeEndIndex,
     endNode,
     endNodeStartIndex,
     endNodeEndIndex,
     chars = {},
     {
        length
     } = nodes;

 for(let i = 0 ; i < length ; i ++){

    node = nodes[i] ;

    if(isString(node)){

        let match;

        while(match = regex.exec(node)){

            [
                char
            ] = match ;

            if(ignores.includes(char)){

                continue ;
            }

            if(!chars.hasOwnProperty(char)){

                chars[char] = 1 ;
            
            }else{

                chars[char] ++ ;
            }

            if(startFn(char , chars)){

                startNodeStartIndex = match.index ;

                startNodeEndIndex = startNodeStartIndex + match[0].length ;

                startNode = node ;
            
            }else if(endFn(char , chars)){

                endNodeStartIndex = match.index ;

                endNodeEndIndex = endNodeStartIndex + match[0].length ;
                
                endNode = node ;

                break ;
                
            }
        }

        if(isDefined(startNode) && !isDefined(endNode)){

            if(!isDefined(children)){

                children = [] ;
            
            }else{

                children.push(node) ;
            }

            continue ;

        }else if(isDefined(startNode) && isDefined(endNode)){

            children = children || [] ;

            result.push(startNode.substring(0 , startNodeStartIndex)) ;

            if(startNode !== endNode){

                children.unshift(startNode.substring(startNodeEndIndex , startNode.length)) ;

                children.push(endNode.substring(0 , endNodeStartIndex)) ;

            }else{

                children.push(endNode.substring(startNodeEndIndex , endNodeStartIndex)) ;
            }

            result.push(fn(children , startNode.substring(startNodeStartIndex , startNodeEndIndex) , endNode.substring(endNodeStartIndex , endNodeEndIndex))) ;

            result.push(endNode.substring(endNodeEndIndex , endNode.length)) ;
            
            result.push(...nodes.slice(i + 1)) ;

            return parse(result , regex , fn , startFn , endFn , ignores);
        }
    }else if(isDefined(children)){

        children.push(node) ;

        continue ;
    }

    result.push(node) ;
 }

 return result ;
