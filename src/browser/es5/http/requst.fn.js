/**
 * 
 * 向后台应用服务发送请求
 * 
 * @import parse from http.params.parse
 * 
 * @import empty from function.empty
 * 
 * @import isObject from is.object.simple
 * 
 * @param {string} uri 服务请求链接
 * 
 * @param {string} [method] 请求方式
 * 
 * @param {object} [params] 服务请求数据
 * 
 */

// 为了简化与实用原则，当前函数未实现非JSON机制

const {
    url,
    headers,
    method,
    timeout,
    body
} = parse(uri , method , params),
http = new XMLHttpRequest(),
{
    stringify,
    parse
} = JSON,
successFn = empty,
failureFn = empty;

if(isObject(params)){

    if(params.hasOwnProperty('success')){

        successFn = params.success ;
    }

    if(params.hasOwnProperty('failure')){

        failureFn = params.failure ;
    }
}

http.addEventListener('readystatechange' , () =>{

    if(http.readyState === 4){

        if(http.status === 200){

            successFn(parse(http.responseText)) ;

        }else{

            failureFn() ;
        }
    }

}) ;

http.open(method , url , true) ;

http.send(stringify(body)) ;