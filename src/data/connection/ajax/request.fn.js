
/**
 * 
 * 基于 AJAX 进行数据交互
 * 
 * @import append from url.append
 * 
 * @import apply from url.template.apply
 * 
 * @import isObject from is.object.simple
 * 
 * @import createReader from data.reader.json
 * 
 * @require axios
 * 
 * @require qs
 * 
 * @param {string} url 请求路径
 * 
 * @param {object} [config] 请求配置
 * 
 * @param {string} [config.method = 'GET'] 请求方式，默认是 GET 请求
 * 
 * @param {object} [config.query] GET请求的参数集合
 * 
 * @param {object} [config.params = {}] 请求主体的参数集合
 * 
 * @param {object} [config.path] 以路径参数形式提交的参数集合
 * 
 * @param {boolean} [config.requestJSON = true] 是否以 JSON方式提交数据
 * 
 */

if(query){

    url = append(url , query) ;
}

if(path){

    url = apply(url , path) ;
}

const axios = require('axios'),
{
    stringify
} = require('qs');

switch(method){

    case 'GET':
    case 'DELETE':

        url = append(url , params) ;

        break ;

    case 'POST':
    case 'PUT':

        if(requestJSON === false){

            params = stringify(params) ;
        }
}

return axios[method.toLowerCase()](url , params).then(({
    data
}) => data) ;

