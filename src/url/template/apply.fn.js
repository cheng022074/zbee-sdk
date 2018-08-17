
/**
 * 
 * 路径模板应用
 * 
 * @param {string} url 带有参数定义的URL
 * 
 * @param {object} data 模板参数定义数据集合
 * 
 * @return {string} 应用数据后的URL链接
 * 
 */

return url.replace(/\:([a-z]+)/g , (match , name) =>{

    return data[name] || '' ;

}) ;
