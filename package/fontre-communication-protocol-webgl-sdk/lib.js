


exports['src::is.html.iframe'] = (() =>{
    
    
    
    
    
    

    
    function main(el){

        

return el instanceof HTMLIFrameElement ;
    }
    return function(el){
        
        
        return  main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , el) ;
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

exports['src::is.defined'] = (() =>{
    let isType;
    
    
    
    
    
    let __first_executed_1536229642096__ = false ;
    

    
    function main(data){

        

return !isType(data , 'undefined') ;
    }
    return function(data){
        
        if(!__first_executed_1536229642096__){
            isType = include('is.type');
            
            __first_executed_1536229642096__ = true ;
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

exports['src::browser.html.iframe.window'] = (() =>{
    let isHtmlIframe;
    
    
    
    
    
    let __first_executed_1536229642096__ = false ;
    

    
    function main(iframeEl){

        

if(!isHtmlIframe(iframeEl)){

    return ;
}

return new Promise(callback =>{

    switch(iframeEl.readyState){

        case 'complete':
        case 'loaded':

            callback(iframeEl.contentWindow) ;

            break ;

        default:
        
            iframeEl.addEventListener('load' , () =>{

                callback(iframeEl.contentWindow) ;

            }) ;
    }

}) ;
    }
    return function(iframeEl){
        
        if(!__first_executed_1536229642096__){
            isHtmlIframe = include('is.html.iframe');
            
            __first_executed_1536229642096__ = true ;
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

        }).call(this) , iframeEl) ;
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

exports['src::connection.message.is'] = (() =>{
    let isObject;
    
    
    
    
    
    let __first_executed_1536229642096__ = false ;
    

    
    function main(data){

        

if(isObject(data)){

    return data.hasOwnProperty('id') && data.hasOwnProperty('action') ;
}

return false ;
    }
    return function(data){
        
        if(!__first_executed_1536229642096__){
            isObject = include('is.object.simple');
            
            __first_executed_1536229642096__ = true ;
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

exports['src::connection.message.is.main'] = (() =>{
    let is;
    
    
    
    
    
    let __first_executed_1536229642096__ = false ;
    

    
    function main(message){

        

return is(message) && !message.hasOwnProperty('reply') ;
    }
    return function(message){
        
        if(!__first_executed_1536229642096__){
            is = include('connection.message.is');
            
            __first_executed_1536229642096__ = true ;
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

        }).call(this) , message) ;
    }
    

})() ;

exports['src::connection.message.reply'] = (() =>{
    
    
    
    
    
    

    
    function main(message,data){

        

if(data){

   return {
       ...message,
       reply:{
           data
       }
   } ;
}

return {
    ...message,
    reply:false
} ;
    }
    return function(message,data){
        
        
        return  main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , message,data) ;
    }
    

})() ;

exports['src::is.string'] = (() =>{
    let isType;
    
    
    
    
    
    let __first_executed_1536229642096__ = false ;
    

    
    function main(data){

        

return isType(data , 'string') ;
    }
    return function(data){
        
        if(!__first_executed_1536229642096__){
            isType = include('is.type');
            
            __first_executed_1536229642096__ = true ;
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

exports['src::is.function'] = (() =>{
    let isType;
    
    
    
    
    
    let __first_executed_1536229642096__ = false ;
    

    
    function main(data){

        

return isType(data , 'function') ;
    }
    return function(data){
        
        if(!__first_executed_1536229642096__){
            isType = include('is.type');
            
            __first_executed_1536229642096__ = true ;
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

exports['src::connection.receive'] = (() =>{
    let isMain,reply,isString,isFunction,emptyFn;
    
    
    
    
    
    let __first_executed_1536229642096__ = false ;
    

    
    function main(receiver,implementName,replyName,actionName){

        

let actionFn ;

if(isString(actionName)){

    actionFn = include(actionName) ;

}else if(isString(actionName)){

    actionFn = actionName ;

}else{

    actionFn = emptyFn() ;
}

include(implementName)(receiver).then(async (message) =>{

    if(isMain(message)){
        
        include(replyName)(receiver , reply(reply , message , await actionFn(message))) ;
    
    }

}) ;
    }
    return function(receiver,implementName,replyName,actionName){
        
        if(!__first_executed_1536229642096__){
            isMain = include('connection.message.is.main');
reply = include('connection.message.reply');
isString = include('is.string');
isFunction = include('is.function');
emptyFn = include('function.empty');
            
            __first_executed_1536229642096__ = true ;
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

        }).call(this) , receiver,implementName,replyName,actionName) ;
    }
    

})() ;

exports['src::connection.receive.window'] = (() =>{
    
    
    
    
    
    

    
    function main(window){

        

window.addEventListener('message' , ({
    data
}) =>{

    callback(data) ;
}) ;
    }
    return function(window){
        
        
        return  main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , window) ;
    }
    

})() ;

exports['src::connection.reply.window'] = (() =>{
    
    
    
    
    
    

    
    function main(window,message){

        

window.postMessage(message , '*') ;
    }
    return function(window,message){
        
        
        return  main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , window,message) ;
    }
    

})() ;

exports['src::connection.window.receive'] = (() =>{
    let receive,connectionReceiveWindow,connectionReplyWindow;
    
    
    
    
    
    let __first_executed_1536229642097__ = false ;
    

    
    function main(window,actionFn){

        

receive(window , 'connection.receive.window' , 'connection.reply.window' , actionFn) ;
    }
    return function(window,actionFn){
        
        if(!__first_executed_1536229642097__){
            receive = include('connection.receive');
connectionReceiveWindow = include('connection.receive.window');
connectionReplyWindow = include('connection.reply.window');
            
            __first_executed_1536229642097__ = true ;
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

        }).call(this) , window,actionFn) ;
    }
    

})() ;

exports['src::connection.message.is.reply'] = (() =>{
    let is;
    
    
    
    
    
    let __first_executed_1536229642097__ = false ;
    

    
    function main(message){

        

return is(message) && message.hasOwnProperty('reply') ;
    }
    return function(message){
        
        if(!__first_executed_1536229642097__){
            is = include('connection.message.is');
            
            __first_executed_1536229642097__ = true ;
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

        }).call(this) , message) ;
    }
    

})() ;

exports['src::connection.message.is.reply.to'] = (() =>{
    let isMain,isReply;
    
    
    
    
    
    let __first_executed_1536229642097__ = false ;
    

    
    function main(replyMessage,message){

        

return isReply(replyMessage) && isMain(message) && replyMessage.id === message.id ;
    }
    return function(replyMessage,message){
        
        if(!__first_executed_1536229642097__){
            isMain = include('connection.message.is.main');
isReply = include('connection.message.is.reply');
            
            __first_executed_1536229642097__ = true ;
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

        }).call(this) , replyMessage,message) ;
    }
    

})() ;

exports['src::connection.message.reply.result'] = (() =>{
    
    
    
    
    
    

    
    function main(replyMessage){

        

let {
    reply
} = replyMessage ;

if(reply !== false){

    let {
        data
    } = reply ;

    return data ;
}
    }
    return function(replyMessage){
        
        
        return  main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , replyMessage) ;
    }
    

})() ;

exports['src::connection.send'] = (() =>{
    let isReply,isReplyTo,result;
    
    
    
    
    
    let __first_executed_1536229642097__ = false ;
    

    
    function main(sender,implementName,message){

        

return new Promise(callback =>{

    include(implementName)(sender , message , replyMessage =>{

        if(isReplyTo(replyMessage , message)){
    
            callback(result(replyMessage)) ;
            
            return true ;
        }

    }) ;
}) ;
    }
    return function(sender,implementName,message){
        
        if(!__first_executed_1536229642097__){
            isReply = include('connection.message.is.reply');
isReplyTo = include('connection.message.is.reply.to');
result = include('connection.message.reply.result');
            
            __first_executed_1536229642097__ = true ;
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

        }).call(this) , sender,implementName,message) ;
    }
    

})() ;

exports['src::connection.send.window'] = (() =>{
    
    
    
    
    
    

    
    function main(window,message,fn){

        

window.postMessage(message , '*') ;

const 
callback = ({
    data
}) =>{

    if(fn(data) === true){

        window.removeEventListener('message' , callback) ;
    }
} ;

window.addEventListener('message' ,callback) ;
    }
    return function(window,message,fn){
        
        
        return  main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , window,message,fn) ;
    }
    

})() ;

exports['src::connection.message.package'] = (() =>{
    
    
    
    
    
    

    
    

let count = 0 ;

function main(action , data){

    return {
        id:`${Date.now()}-${++ count}`,
        action,
        data
    } ;
}
    return function(action,data){
        
        
        return main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , action,data) ;
    }
    

})() ;

exports['src::connection.window.send'] = (() =>{
    let send,connectionSendWindow,doPackage;
    
    
    
    
    
    let __first_executed_1536229642097__ = false ;
    

    
    function main(window,action,data){

        

return send(window , 'connection.send.window' , doPackage(action , data)) ;
    }
    return function(window,action,data){
        
        if(!__first_executed_1536229642097__){
            send = include('connection.send');
connectionSendWindow = include('connection.send.window');
doPackage = include('connection.message.package');
            
            __first_executed_1536229642097__ = true ;
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

        }).call(this) , window,action,data) ;
    }
    

})() ;

