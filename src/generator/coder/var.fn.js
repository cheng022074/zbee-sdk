
/**
 * 
 * 定义变量值
 * 
 * @param {XMLElement} el XML元素
 * 
 * @param {string} data 生成后的表达式
 * 
 * @return {string} 合并后的表达式
 * 
 */

if(el.hasAttribute('var')){

    return `var ${el.getAttribute('var')} = ${data}` ;
}

return data ;
