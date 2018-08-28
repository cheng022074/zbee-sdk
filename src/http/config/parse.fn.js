/**
 * 
 * 解析请求参数
 * 
 * @param {string} uri 请求名称
 * 
 * @param {string} [method = 'GET'] HTTP 提交方式
 * 
 * @param {config} [params] 参数信息
 * 
 * @import apply from url.template.apply
 * 
 * @import isObject from is.object.simple
 * 
 * @import is.string
 * 
 * @import join from url.join
 * 
 * @import append from url.append
 * 
 * @config http from http
 * 
 * @return {object}  符合 request-promise 的配置信息
 * 
 * 
 */

method = method.toUpperCase() ;

let name ;

if(isString(params)){

    name = params ;

    params = {} ;

}else if(isObject(params)){

    name = params.name || 'default';

    delete params.name ;

}else{

    name = 'default' ;

    params = {} ;
}

let httpConfig = http[name];

if(httpConfig){

    let {
        root:rootURL,
        type,
        headers,
        timeout
    } = httpConfig,
    {
        query,
        path,
        body,
        timeout:userTimeout
    } = params;

    return {
        url:append(join(rootURL , apply(uri , path)) , {
            _dc:Date.now()
        }),
        type,
        headers,
        method,
        body,
        timeout:timeout || userTimeout
    } ;
}

throw new Error('试图请求未注册的路径') ;