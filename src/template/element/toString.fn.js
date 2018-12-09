
/**
 * 
 * 模型元素序列化成字符串
 * 
 * @return {string} 模板元素字符串表达  
 * 
 */

function generate_attributes(attributes){

    let names = Object.keys(attributes),
        result = [];

    for(let name of names){

        result.push(`${name} = ${attributes[name]}`) ;
    }

    if(result.length){

        return ` ${result.join(' ')}` ;
    }

    return '' ;
}

function generate_children(children){

    let result = [] ;

    for(let el of children){

        result.push(el.toString()) ;
    }

    return result.join('') ;
}

function main(){

    let {
        tag,
        $attributes,
        $children
    } = this ;

    return `
        <${tag}${generate_attributes($attributes)}>
            ${generate_children($children)}
        </${tag}>
    ` ;
}
