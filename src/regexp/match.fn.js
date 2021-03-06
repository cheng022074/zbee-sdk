
/**
 * 
 * 基于正则表达式的扩展
 * 
 * @import from from array.from
 * 
 * @param {string} data 参数说明
 * 
 * @param {RegExp} reg 正则表达式
 * 
 * @param {array} tags 标签信息
 * 
 * @return {array} 匹配出来结果
 * 
 * @scoped
 * 
 */


function main(data , reg ,  tags){

    tags = from(tags) ;

    let startTags = [],
        startTagLength,
        match,
        result = [];

    while(match = reg.exec(data)){

        let [
            tag
        ] = match,
        {
            index
        } = match ;

        if(includes(tags , 'start' , tag)){

            startTags.push({
                tag,
                index
            }) ;
            
        }else if(includes(tags , 'end' , tag) && (startTagLength = startTags.length)){

            let {
                tag:startTag,
                index:startIndex
            } = startTags[startTagLength - 1],
            config = get(tags , startTag , tag);

            if(config){

                startTags.pop() ;

                let {
                    inner
                } = config ;

                if(inner){

                    result.unshift(data.substring(startIndex + startTag.length , index)) ;

                }else{

                    result.unshift(data.substring(startIndex , index + tag.length)) ;
                }

                if(startTags.length === 0){

                    return result ;
                }

            }
        }
    }

    return null ;
}

function includes(tags , key , value){

    for(let tag of tags){

        if(tag[key] === value){

            return true ;
        }
    }

    return false ;
}

function get(tags , startTagName , endTagName){

    for(let tag of tags){

        let {
            start,
            end
        } = tag ;

        if(start === startTagName && end === endTagName){

            return tag ;
        }
    }

    return false ;
}