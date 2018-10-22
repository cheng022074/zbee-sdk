/**
 * 
 * 向后台应用服务发送请求
 * 
 * @import parse from http.config.parse
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
 * 
 * @import assign from object.assign
 * 
 * @param {string} uri 请求名称
 * 
 * @param {string} [method] HTTP 提交方式
 * 
 * @param {config} [params] 参数信息
 * 
 * @scoped
 * 
 * @return {Promise}
 * 
 */

const 
request = require('request-promise');

function main(uri , methodName , params){

    let {
        url,
        type,
        headers,
        method,
        timeout,
        body
    } = parse(uri , methodName , params),
    {
        request:requestType,
        response:responseType
    } = process_type(type);

    return request(assign({
        uri:url,
        method,
        headers,
        transform:transform(responseType)
    }, 
        process_body(body , requestType),
        process_timeout(timeout)
    ));
}

function process_timeout(timeout){

    if(timeout){

        return {
            timeout,
            requestTimeout:timeout
        } ;
    }

    return {} ;
}

function process_body(body , type){

    switch(type){

        case 'json':

            return {
                body,
                headers:{
                    'content-type':'application/json'
                },
                json:true
            } ;

        case 'xml':

            return {
                headers:{
                    'content-type':'application/xml'
                },
                body
            } ;

        case 'form':

            return {
                formData:body
            } ;

        case 'html':

            return {
                headers:{
                    'content-type':'text/html'
                },
                body
            } ;
    }

    return {
        body
    } ;
}

function process_type(type){

    if(isObject(type)){

        let {
            request,
            response
        } = type ;

        return {
            request,
            response
        } ;
    
    }else if(isString(type)){

        return {
            request:type,
            response:type
        } ;
    }

    return {} ;
}

function transform_json(body){

    if(isString(body)){

        return JSON.parse(body) ;
    }

    return body ;
}

function transform_xml(body){

    return parse(body) ;
}

function transform_html(body){


}

function transform_empty(body){

    return body ;
}

function transform(type){

    switch(type){

        case 'json':

            return transform_json ;

        case 'xml':

            return transform_xml ;

        case 'html':

            return transform_html ;
    }

    return transform_empty ;
}