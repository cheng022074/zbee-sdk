/**
 * 
 * @param {string} uri 请求名称
 * 
 * @param {string} method HTTP 提交方式
 * 
 * @param {config} params 参数信息
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
 * @import parse from xml.parse
 * 
 * @import assign from object.assign
 * 
 * @config http from http
 * 
 * @return {object}  符合 request-promise 的配置信息
 * 
 * @scoped
 * 
 */

function main(uri , method , params){

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
            root:rootPath,
            type,
            headers,
            timeout
        } = httpConfig,
        {
            request:requestType,
            response:responseType
        } = process_type(type) ;

        let {
            query,
            path,
            body,
            timeout:userTimeout
        } = params;

        return assign({
            uri:append(join(rootPath , apply(uri , path)) , {
                _dc:Date.now()
            }),
            timeout,
            requestTimeout:timeout || 0,
            method,
            headers,
            qs:query,
            transform:transform(responseType)
        } , process_body(body , requestType) , process_timeout(userTimeout));
    }

    throw new Error('试图请求未注册的路径') ;
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
    } ; ;
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

    return {
    } ;
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