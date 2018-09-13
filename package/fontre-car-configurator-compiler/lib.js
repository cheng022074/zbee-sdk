


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
    
    
    
    
    
    let __first_executed_1536574145594__ = false ;
    

    
    function main(data){

        

return isType(data , 'string') ;
    }
    return function(data){
        
        if(!__first_executed_1536574145594__){
            isType = include('is.type');
            
            __first_executed_1536574145594__ = true ;
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
    
    
    
    
    
    let __first_executed_1536574145595__ = false ;
    

    
    

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
        
        if(!__first_executed_1536574145595__){
            isAbsolute = include('url.isAbsolute');
            
            __first_executed_1536574145595__ = true ;
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
    
    
    
    
    
    let __first_executed_1536574145595__ = false ;
    

    
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
        
        if(!__first_executed_1536574145595__){
            isString = include('is.string');
            
            __first_executed_1536574145595__ = true ;
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
    
    
    
    
    let __first_executed_1536574145596__ = false ;
    

    
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
        headers:defaultHeaders,
        timeout
    } = httpConfig,
    {
        query,
        path,
        body,
        timeout:userTimeout,
        headers:userHeaders
    } = params;

    const {
        assign
    } = Object ;

    let headers = assign({} , defaultHeaders , userHeaders) ;

    return {
        url:append(join(rootURL , apply(uri , path)) , assign({
            _dc:Date.now()
        } , query)),
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
        
        if(!__first_executed_1536574145596__){
            apply = include('url.template.apply');
isObject = include('is.object.simple');
isString = include('is.string');
join = include('url.join');
append = include('url.append');
configHttp = include('config::http');
            http = config('http');
            __first_executed_1536574145596__ = true ;
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

exports['src::is.object'] = (() =>{
    let isType;
    
    
    
    
    
    let __first_executed_1536574145596__ = false ;
    

    
    function main(data){

        

return Object.prototype.toString.call(data) === '[object Object]' ;
    }
    return function(data){
        
        if(!__first_executed_1536574145596__){
            isType = include('is.type');
            
            __first_executed_1536574145596__ = true ;
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

exports['src::object.keys'] = (() =>{
    let isObject;
    
    
    
    
    
    let __first_executed_1536574145596__ = false ;
    

    
    

function main(data){

    return get_keys(data) ;
}

function get_keys(data , rootKey = ''){

    let keys = Object.keys(data),
        result = [];

    for(let key of keys){

        let value = data[key] ;

        if(isObject(value)){

            result.push(...get_keys(value , `${rootKey}${key}.`)) ;
        
        }else{

            result.push(`${rootKey}${key}`) ;
        }
    }

    return result ;
}
    return function(data){
        
        if(!__first_executed_1536574145596__){
            isObject = include('is.object');
            
            __first_executed_1536574145596__ = true ;
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

        }).call(this) , data) ;
    }
    

})() ;

exports['src::is.array'] = (() =>{
    let isType;
    
    
    
    
    
    let __first_executed_1536574145596__ = false ;
    

    
    function main(data){

        

 return Array.isArray(data) ;
    }
    return function(data){
        
        if(!__first_executed_1536574145596__){
            isType = include('is.type');
            
            __first_executed_1536574145596__ = true ;
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

exports['src::is.empty'] = (() =>{
    let isArray;
    
    
    
    
    
    let __first_executed_1536574145596__ = false ;
    

    
    function main(data,allowEmptyString){

        

return (data == null) || (!allowEmptyString ? data === '' : false) || (isArray(data) && data.length === 0);
    }
    return function(data,allowEmptyString = false){
        
        if(!__first_executed_1536574145596__){
            isArray = include('is.array');
            
            __first_executed_1536574145596__ = true ;
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

        }).call(this) , data,allowEmptyString) ;
    }
    

})() ;

exports['src::string.split'] = (() =>{
    let isEmpty;
    
    
    
    
    
    let __first_executed_1536574145596__ = false ;
    

    
    

function main(target , splitRe){

    return target.split(splitRe).filter(filter) ;
 }

 function filter(target){

    return !isEmpty(target) ;
 }
    return function(target,splitRe){
        
        if(!__first_executed_1536574145596__){
            isEmpty = include('is.empty');
            
            __first_executed_1536574145596__ = true ;
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

        }).call(this) , target,splitRe) ;
    }
    

})() ;

exports['src::object.set'] = (() =>{
    let isObject,split;
    
    
    
    
    
    let __first_executed_1536574145596__ = false ;
    

    
    

const splitRe = /\./;

function main(target , key , value){

    if(splitRe.test(key)){

        let keys = split(key , splitRe) ;
    
        key = keys.pop();
    
        for(let key of keys){
    
            let data = target[key] ;
    
            if(!isObject(data)){
    
                data = target[key] = {} ;
            }
    
            target = data ;
        }
    
        target[key] = value ;
    
    }else{
    
        target[key] = value ;
    }
}
    return function(target,key,value){
        
        if(!__first_executed_1536574145596__){
            isObject = include('is.object');
split = include('string.split');
            
            __first_executed_1536574145596__ = true ;
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

        }).call(this) , target,key,value) ;
    }
    

})() ;

exports['src::object.get'] = (() =>{
    
    
    
    
    
    

    
    

const splitRe = /\./;

function main(data , key){

    if(key){
    
        if(key in data){
    
            return data[key] ;
        }
    
        let names = key.split(splitRe),
            prefix = '';
    
        for(let name of names){
    
            let key = `${prefix}${name}` ;

            if(!data){

                break ;
            }
    
            if(key in data){
    
                data = data[key] ;
    
                prefix = '' ;
            
            }else{
    
                prefix = `${key}.` ;
            }
        }
    
        if(prefix){
    
            return ;
        }
    
        return data ;
    }
    
    return data ;

}
    return function(data,key){
        
        
        return main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , data,key) ;
    }
    

})() ;

exports['src::object.assign'] = (() =>{
    let getKeys,set,get;
    
    
    
    
    
    let __first_executed_1536574145596__ = false ;
    

    
    

function assign(dest , source){

    let keys = getKeys(source) ;

    for(let key of keys){

        set(dest , key , get(source , key)) ;
    }

}

function main(dest , ...sources){

    for(let source of sources){

        assign(dest , source) ;
    }

    return dest ;

}
    return function(dest,...sources){
        
        if(!__first_executed_1536574145596__){
            getKeys = include('object.keys');
set = include('object.set');
get = include('object.get');
            
            __first_executed_1536574145596__ = true ;
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

        }).call(this) , dest,...sources) ;
    }
    

})() ;

exports['src::http.request'] = (() =>{
    let parse,isString,isObject,assign;
    
    
    
    
    
    let __first_executed_1536574145597__ = false ;
    

    
    

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
    return function(uri,method,params){
        
        if(!__first_executed_1536574145597__){
            parse = include('http.config.parse');
isString = include('is.string');
isObject = include('is.object.simple');
assign = include('object.assign');
            
            __first_executed_1536574145597__ = true ;
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

        }).call(this) , uri,method,params) ;
    }
    

})() ;

exports['src::http.get'] = (() =>{
    let request;
    
    
    
    
    
    let __first_executed_1536574145597__ = false ;
    

    
    function main(uri,params){

        

return request(uri , 'get' , params) ;
    }
    return function(uri,params){
        
        if(!__first_executed_1536574145597__){
            request = include('http.request');
            
            __first_executed_1536574145597__ = true ;
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

        }).call(this) , uri,params) ;
    }
    

})() ;

exports['src::http.post'] = (() =>{
    let request;
    
    
    
    
    
    let __first_executed_1536574145597__ = false ;
    

    
    function main(uri,params){

        

return request(uri , 'post' , params) ;
    }
    return function(uri,params){
        
        if(!__first_executed_1536574145597__){
            request = include('http.request');
            
            __first_executed_1536574145597__ = true ;
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

        }).call(this) , uri,params) ;
    }
    

})() ;

exports['src::http.put'] = (() =>{
    let request;
    
    
    
    
    
    let __first_executed_1536574145597__ = false ;
    

    
    function main(uri,params){

        

return request(uri , 'put' , params) ;
    }
    return function(uri,params){
        
        if(!__first_executed_1536574145597__){
            request = include('http.request');
            
            __first_executed_1536574145597__ = true ;
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

        }).call(this) , uri,params) ;
    }
    

})() ;

exports['src::http.delete'] = (() =>{
    let request;
    
    
    
    
    
    let __first_executed_1536574145597__ = false ;
    

    
    function main(uri,params){

        

return request(uri , 'delete' , params) ;
    }
    return function(uri,params){
        
        if(!__first_executed_1536574145597__){
            request = include('http.request');
            
            __first_executed_1536574145597__ = true ;
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

        }).call(this) , uri,params) ;
    }
    

})() ;

exports['src::http'] = (() =>{

    
        class Main{
            static get(){
                    return include('http.get').apply(this , arguments) ;
                }static post(){
                    return include('http.post').apply(this , arguments) ;
                }static put(){
                    return include('http.put').apply(this , arguments) ;
                }static delete(){
                    return include('http.delete').apply(this , arguments) ;
                }
        };
        

    return Main ;

})() ;

exports['src::is.directory'] = (() =>{
    
    
    
    
    
    

    
    function main(path){

        

const {
    existsSync,
    statSync
} = require('fs') ;

return existsSync(path) && statSync(path).isDirectory() ;
    }
    return function(path){
        
        
        return  main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , path) ;
    }
    

})() ;

exports['src::is.file'] = (() =>{
    
    
    
    
    
    

    
    function main(path){

        

const {
    existsSync,
    statSync
} = require('fs') ;

return existsSync(path) && statSync(path).isFile() ;
    }
    return function(path){
        
        
        return  main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , path) ;
    }
    

})() ;

exports['src::directory.create'] = (() =>{
    let isDirectory;
    
    
    
    
    
    let __first_executed_1536574145599__ = false ;
    

    
    

const {
    mkdirSync
} = require('fs'),
folderRe = /(?:^\/)|(?:[^\/\\]+(?:[\/\\]|$))/g;

function main(path){

    let folderNames = path.match(folderRe),
        folderPath = '';

    for(let folderName of folderNames){

        folderPath += folderName ;

        if(folderName !== '/' && !isDirectory(folderPath)){

            mkdirSync(folderPath) ;
        }
    }
}
    return function(path){
        
        if(!__first_executed_1536574145599__){
            isDirectory = include('is.directory');
            
            __first_executed_1536574145599__ = true ;
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

        }).call(this) , path) ;
    }
    

})() ;

exports['src::file.write'] = (() =>{
    let create;
    
    
    
    
    
    let __first_executed_1536574145599__ = false ;
    

    
    function main(path,data){

        

const {
    writeFileSync
} = require('fs'),
{
    dirname
} = require('path');

create(dirname(path)) ;

writeFileSync(path , data) ;
    }
    return function(path,data){
        
        if(!__first_executed_1536574145599__){
            create = include('directory.create');
            
            __first_executed_1536574145599__ = true ;
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

        }).call(this) , path,data) ;
    }
    

})() ;

exports['src::file.write.json'] = (() =>{
    let write;
    
    
    
    
    
    let __first_executed_1536574145599__ = false ;
    

    
    function main(path,data){

        

write(path , JSON.stringify(data , null , 2)) ;
    }
    return function(path,data){
        
        if(!__first_executed_1536574145599__){
            write = include('file.write');
            
            __first_executed_1536574145599__ = true ;
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

        }).call(this) , path,data) ;
    }
    

})() ;

exports['src::html.format'] = (() =>{
    let isString;
    
    
    
    
    
    let __first_executed_1536574145599__ = false ;
    

    
    function main(data){

        

const {
    minify
} = require('html-minifier'),
{
    html
} = require('js-beautify');

if(!isString(data)){

   data = `<!DOCTYPE html>\n${data.documentElement.outerHTML}` ;
}

return html(minify(data , {
    collapseWhitespace:true
})) ;
    }
    return function(data){
        
        if(!__first_executed_1536574145599__){
            isString = include('is.string');
            
            __first_executed_1536574145599__ = true ;
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

exports['src::file.write.html'] = (() =>{
    let write,format;
    
    
    
    
    
    let __first_executed_1536574145599__ = false ;
    

    
    function main(path,doc){

        

write(path , format(doc)) ;
    }
    return function(path,doc){
        
        if(!__first_executed_1536574145599__){
            write = include('file.write');
format = include('html.format');
            
            __first_executed_1536574145599__ = true ;
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

        }).call(this) , path,doc) ;
    }
    

})() ;

exports['src::file.read'] = (() =>{
    let isFile;
    
    
    
    
    
    let __first_executed_1536574145599__ = false ;
    

    
    function main(path){

        

const {
    readFileSync
} = require('fs') ;

if(isFile(path)){

    return readFileSync(path) ;
}
    }
    return function(path){
        
        if(!__first_executed_1536574145599__){
            isFile = include('is.file');
            
            __first_executed_1536574145599__ = true ;
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

        }).call(this) , path) ;
    }
    

})() ;

exports['src::file.read.text'] = (() =>{
    let read;
    
    
    
    
    
    let __first_executed_1536574145599__ = false ;
    

    
    function main(path){

        

let data = read(path) ;

if(data){

    return data.toString('utf8') ;
}
    }
    return function(path){
        
        if(!__first_executed_1536574145599__){
            read = include('file.read');
            
            __first_executed_1536574145599__ = true ;
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

        }).call(this) , path) ;
    }
    

})() ;

exports['src::template.apply'] = (() =>{
    let read;
    
    
    
    
    
    let __first_executed_1536574145599__ = false ;
    

    
    

 const
 TEMPLATES = {},
 {
    compile
 } = require('ejs');

 function main(name , data){

    if(!TEMPLATES.hasOwnProperty(name)){

        let template ;

        try{

            template = include(`template::${name}`) ;

        }catch(err){

            template = read(name) ;
        }

        if(template){

            TEMPLATES[name] = compile(template) ;
        
        }else{

            TEMPLATES[name] = emptyFn ;
        }
    }

    return TEMPLATES[name]({
        data,
        apply:main
    }) ;
 }

 function emptyFn(){

    return '' ;
 }
    return function(name,data = {}){
        
        if(!__first_executed_1536574145599__){
            read = include('file.read.text');
            
            __first_executed_1536574145599__ = true ;
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

        }).call(this) , name,data) ;
    }
    

})() ;

exports['src::html.parse'] = (() =>{
    
    
    
    
    
    

    
    function main(html){

        
const {
    JSDOM
} = require('jsdom'),
{
    window
} = new JSDOM(html , {
    features:{
        FetchExternalResources:false,
        ProcessExternalResources:false
    }
}) ;

return window.document ;
    }
    return function(html){
        
        
        return  main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , html) ;
    }
    

})() ;

exports['src::html.load'] = (() =>{
    let parse,read;
    
    
    
    
    
    let __first_executed_1536574145599__ = false ;
    

    
    function main(path){

        

return parse(read(path)) ;
    }
    return function(path){
        
        if(!__first_executed_1536574145599__){
            parse = include('html.parse');
read = include('file.read.text');
            
            __first_executed_1536574145599__ = true ;
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

        }).call(this) , path) ;
    }
    

})() ;

