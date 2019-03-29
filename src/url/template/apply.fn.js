
/**
 * 
 * 路径模板应用
 * 
 * @import isInt from regexp.int
 * 
 * @param {string} url 带有参数定义的URL
 * 
 * @param {object} data 模板参数定义数据集合
 * 
 * @return {string} 应用数据后的URL链接
 * 
 */

return url.replace(/\:(\w+)/g , (match , name) =>{

    if(isInt(name)){

        return `:${name}` ;
    }

    return data[name] || '' ;

}) ;
