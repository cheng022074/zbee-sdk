


exports['src::url.template.apply'] = (() =>{
    
    
    
    
    
    

    
    function main(url,data){

        

return url.replace(/\:([^\\\/\d]+)/g , (match , name) =>{

    return data[name] || '' ;

}) ;
    }
    return function(url,data){
        
        
        return  main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , url,data) ;
    }
    

})() ;

exports['src::is.object.simple'] = (() =>{
    
    
    
    
    
    

    
    function main(data){

        

return data instanceof Object && data.constructor === Object;
    }
    return function(data){
        
        
        return  main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , data) ;
    }
    

})() ;

exports['src::is.type'] = (() =>{
    
    
    
    
    
    

    
    function main(data,type){

        

 return typeof data === type ;
    }
    return function(data,type){
        
        
        return  main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , data,type) ;
    }
    

})() ;

exports['src::is.string'] = (() =>{
    let isType;
    
    
    
    
    
    let __first_executed_1535447805619__ = false ;
    

    
    function main(data){

        

return isType(data , 'string') ;
    }
    return function(data){
        
        if(!__first_executed_1535447805619__){
            isType = include('is.type');
            
            __first_executed_1535447805619__ = true ;
        }
        
        
        return  main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , data) ;
    }
    

})() ;

exports['src::url.isAbsolute'] = (() =>{
    
    
    
    
    
    

    
    function main(url){

        

return /^https?\:\/{2}/.test(url) ;
    }
    return function(url){
        
        
        return  main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , url) ;
    }
    

})() ;

exports['src::url.join'] = (() =>{
    let isAbsolute;
    
    
    
    
    
    let __first_executed_1535447805620__ = false ;
    

    
    

const urlSuffixRe = /\/$/ ;

function main(...urls){

    let len = urls.length,
        i = 0,
        result = [];

    for(; i < len ; i ++){

        let part = urls[i] || '';

        part = part.replace(urlSuffixRe , '') ;

        if(isAbsolute(part)){

            result.length = 0 ;

            result.push(part) ;
        
        }else if(part){

            result.push(part) ;
        }
    }

    return result.join('/') ;
}
    return function(...urls){
        
        if(!__first_executed_1535447805620__){
            isAbsolute = include('url.isAbsolute');
            
            __first_executed_1535447805620__ = true ;
        }
        
        
        return main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , ...urls) ;
    }
    

})() ;

exports['src::url.append'] = (() =>{
    let isString;
    
    
    
    
    
    let __first_executed_1535447805620__ = false ;
    

    
    function main(url,data){

        

let querystring ;

if(isString(data)){

    querystring = data ;

}else{

    querystring = [];

    let names = Object.keys(data) ;

    for(let name of names){

        querystring.push(`${name}=${encodeURIComponent(data[name])}`) ;
    }

    querystring = querystring.join('&') ;

}

if(url.includes('?')){

    return `${url}&${querystring}` ;
}

return `${url}?${querystring}` ;
    }
    return function(url,data){
        
        if(!__first_executed_1535447805620__){
            isString = include('is.string');
            
            __first_executed_1535447805620__ = true ;
        }
        
        
        return  main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , url,data) ;
    }
    

})() ;

exports['config::http'] = {
    "default":{
        "timeout":20000,
        "type":"json"
    }
} ;

exports['src::http.config.parse'] = (() =>{
    let apply,isObject,isString,join,append,configHttp;
    let http;
    
    
    
    
    let __first_executed_1535447805621__ = false ;
    

    
    function main(uri,method,params){

        

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
    }
    return function(uri,method = 'GET',params){
        
        if(!__first_executed_1535447805621__){
            apply = include('url.template.apply');
isObject = include('is.object.simple');
isString = include('is.string');
join = include('url.join');
append = include('url.append');
configHttp = include('config::http');
            http = config('http');
            __first_executed_1535447805621__ = true ;
        }
        
        
        return  main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , uri,method,params) ;
    }
    

})() ;

exports['src::function.empty'] = (() =>{
    
    
    
    
    
    

    
    

const emptyFn = () =>{
} ;

function main(){

    return emptyFn ;
}
    return function(){
        
        
        return main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) ) ;
    }
    

})() ;

exports['src::browser.es5.http.request'] = (() =>{
    let config_parse,empty,isObject;
    
    
    
    
    
    let __first_executed_1535447805621__ = false ;
    

    
    function main(uri,methodName,params){

        

// 为了简化与实用原则，当前函数未实现非JSON机制

const {
    url,
    headers,
    method,
    timeout,
    body
} = config_parse(uri , methodName , params),
http = new XMLHttpRequest(),
{
    stringify,
    parse
} = JSON ;

let successFn = empty,
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
    }
    return function(uri,methodName,params){
        
        if(!__first_executed_1535447805621__){
            config_parse = include('http.config.parse');
empty = include('function.empty');
isObject = include('is.object.simple');
            
            __first_executed_1535447805621__ = true ;
        }
        
        
        return  main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , uri,methodName,params) ;
    }
    

})() ;

exports['src::browser.es5.http.post'] = (() =>{
    let request;
    
    
    
    
    
    let __first_executed_1535447805621__ = false ;
    

    
    function main(uri,method,params){

        

request(uri , method , params) ;
    }
    return function(uri,method,params){
        
        if(!__first_executed_1535447805621__){
            request = include('browser.es5.http.request');
            
            __first_executed_1535447805621__ = true ;
        }
        
        
        return  main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , uri,method,params) ;
    }
    

})() ;

