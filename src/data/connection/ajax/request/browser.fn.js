
/**
 * 
 * 基于浏览器的 AJAX 请求实现
 * 
 * @import request from ....request
 * 
 * @require axios
 * 
 * @require qs
 * 
 * @param {string} url 请求路径
 * 
 * @param {object} [config] 请求配置
 * 
 */

let {
    url,
    method,
    data,
    form,
    responseHeaders
} = request(url , config);

const axios = require('axios'),
{
    stringify
} = require('qs');


if(form === true){

    data = stringify(data) ;
}

let result = axios[method.toLowerCase()](url , data) ;

if(responseHeaders){

    return result.then(({
        data,
        headers
    }) => {
        data,
        headers
    }) ;
}

return result.then(({
    data
}) => data) ;