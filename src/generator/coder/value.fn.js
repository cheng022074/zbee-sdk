
/**
 * 
 * 获取指定标签元素的值信息
 * 
 * @import expression from generator.coder.expression
 * 
 * @param {XMLElement} el XML元素
 * 
 * @param {string} [name = 'value'] 属性名称
 * 
 * @return {string} 值信息 
 * 
 */

if(el.hasAttribute(name)){

    return expression(el.getAttribute(name)) ;
}

let {
    childNodes
} = el,
isFinded = false,
result = [];

childNodes = Array.from(childNodes) ;

for(let childNode of childNodes){

    if(childNode.nodeType === 4){

        result.push(childNode.nodeValue) ;

        isFinded = true ;

        break ;
    }
}

if(!isFinded){

    result.push(el.nodeValue) ;
}

return result.join('').trim() ;

