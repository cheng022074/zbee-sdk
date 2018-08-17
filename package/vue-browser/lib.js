


exports['src::browser.event.init'] = (() =>{
    
    
    
    
    let __once_1534473867457_value__,
        __once_1534473867457_locked__ = false;
    
    let __first_executed_1534473867457__ = false ;
    
    
    

function preventDefault(e){

    switch(e.target.tagName){

        case 'INPUT':

            return ;
    }

    e.preventDefault() ;
}

function main(target){

    target.addEventListener('touchstart' , preventDefault) ;

    target.addEventListener('touchmove' , preventDefault) ;
}
    return function(target = window){
        
        
        if(__once_1534473867457_locked__){

            return __once_1534473867457_value__ ;

        }
        
        __once_1534473867457_locked__ = true ;
        
        return  __once_1534473867457_value__ = main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , target) ;
    }
    

})() ;

exports['src::browser.animationFrame.map'] = (() =>{
    
    
    
    
    let __once_1534473867457_value__,
        __once_1534473867457_locked__ = false;
    
    let __first_executed_1534473867457__ = false ;
    
    
    function main(){

        

return new Map() ;
    }
    return function(){
        
        
        if(__once_1534473867457_locked__){

            return __once_1534473867457_value__ ;

        }

        __once_1534473867457_locked__ = true ;
        
        return __once_1534473867457_value__ =  main.call((function(){

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

exports['src::browser.animationFrame.set'] = (() =>{
    let getMap;
    
    
    
    let __first_executed_1534473867457__ = false ;
    
    
    

let count = 0 ;

function main(fn , scope){

    count ++ ;

    let map = getMap(),
        animationFrame = new AnimationFrame(fn , scope);

    map.set(count , animationFrame) ;

    animationFrame.start() ;

    return count ;
}

class AnimationFrame{

    constructor(fn , scope){

        let me = this ;

        me.fn = fn ;

        me.scope = scope ;
    }

    start(){

        let me = this,
            {
                fn,
                scope
            } = me,
            animationFrame = time =>{

                fn.call(scope , time) ;

                me.animationFrameId = requestAnimationFrame(animationFrame) ;
                
            } ;

        me.animationFrameId = requestAnimationFrame(animationFrame) ;
    }

    stop(){

        cancelAnimationFrame(this.animationFrameId) ;
    }
}
    return function(fn,scope){
        
        if(!__first_executed_1534473867457__){
            getMap = include('browser.animationFrame.map');
            
            __first_executed_1534473867457__ = true ;
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

        }).call(this) , fn,scope) ;
    }
    

})() ;

exports['src::is.type'] = (() =>{
    
    
    
    
    let __first_executed_1534473867457__ = false ;
    
    
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

exports['src::is.function'] = (() =>{
    let isType;
    
    
    
    let __first_executed_1534473867458__ = false ;
    
    
    function main(data){

        

return isType(data , 'function') ;
    }
    return function(data){
        
        if(!__first_executed_1534473867458__){
            isType = include('is.type');
            
            __first_executed_1534473867458__ = true ;
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

exports['src::is.object.simple'] = (() =>{
    
    
    
    
    let __first_executed_1534473867458__ = false ;
    
    
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

exports['config::vue'] = {
    "gestures":[
        "browser.event.gesture.tap"
    ]
} ;

exports['src::vue.plugin.gestures'] = (() =>{
    let isFunction,isObject,configVue;
    let plugins;
    
    
    let __once_1534473867458_value__,
        __once_1534473867458_locked__ = false;
    
    let __first_executed_1534473867458__ = false ;
    
    
    

const events = {};

function process_event_name(name){

    return `touch:${name}` ;
}

function process_event_listener(listener){

    if(isObject(listener)){

        if(listener.hasOwnProperty('fn')){

            let config = Object.assign({} , listener) ;

            delete config.fn ;

            return {
                fn:listener.fn,
                config
            } ;
        }

    }else if(isFunction(listener)){

        return {
            fn:listener,
            config:{}
        } ;
    }

    return {} ;
}

function adddEventListener(el , name , listener , isInstall = true){

    name = process_event_name(name) ;

    let {
        fn,
        config
    } = process_event_listener(listener) ;

    if(isFunction(fn)){

        if(events.hasOwnProperty(name)){

            if(isInstall){

                events[name].install(el , config) ;
            }

            el.addEventListener(name , fn) ;
        }
    }
}

function removeEventListener(el , name , listener , isUninstall = true){

    name = process_event_name(name) ;

    let {
        fn
    } = process_event_listener(listener) ;

    if(isFunction(fn)){

        if(events.hasOwnProperty(name)){

            if(isUninstall){

                events[name].uninstall(el) ;
            }

            el.removeEventListener(name , fn) ;
        }

    }
}

function bind(el , {
    value:fn,
    arg:name
}){
    adddEventListener(el , name , fn) ;

}

function unbind(el , {
    value:fn,
    arg:name
}){

    removeEventListener(el , name , fn) ;
}

function update(el , {
    value:fn,
    oldValue:oldFn,
    arg:name
}){

    removeEventListener(el , name , oldFn , false),
    adddEventListener(el , name , fn , false) ;
}

function main(){

    for(let plugin of plugins){

        plugin = include(plugin) ;
    
        let {
            handledEvents
        } = plugin ;
    
        for(let handledEvent of handledEvents){
    
            events[handledEvent] = plugin ;
        }
    }

    return {
        install(Vue){

            Vue.directive('touch' , {
                bind,
                unbind,
                update
            }) ;
       }
    } ;
} ;
    return function(){
        
        if(!__first_executed_1534473867458__){
            isFunction = include('is.function');
isObject = include('is.object.simple');
configVue = include('config::vue');
            plugins = config('vue' , 'gestures');
            __first_executed_1534473867458__ = true ;
        }
        
        
        if(__once_1534473867458_locked__){

            return __once_1534473867458_value__ ;

        }
        
        __once_1534473867458_locked__ = true ;
        
        return  __once_1534473867458_value__ = main.call((function(){

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

exports['src::browser.event.gesture.tap.properties.handleEvents'] = (() =>{
    
    
    
    
    let __once_1534473867458_value__,
        __once_1534473867458_locked__ = false;
    
    let __first_executed_1534473867458__ = false ;
    
    
    function main(){

        

return [
    'touch:beforetap',
    'touch:tap',
    'touch:tapcancel'
] ;
    }
    return function(){
        
        
        if(__once_1534473867458_locked__){

            return __once_1534473867458_value__ ;

        }

        __once_1534473867458_locked__ = true ;
        
        return __once_1534473867458_value__ =  main.call((function(){

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

exports['src::os.name'] = (() =>{
    
    
    
    
    let __once_1534473867458_value__,
        __once_1534473867458_locked__ = false;
    
    let __first_executed_1534473867458__ = false ;
    
    
    function main(){

        

const NAMES = {
    iphone: 'iOS',
    android:'Android',
    mac: 'MacOS',
    win: 'Windows',
    linux: 'Linux',
    other: 'Other'
};

let userAgent = navigator.userAgent.toLowerCase(),
    name = NAMES[(userAgent.match(/mac|win|linux/) || ['other'])[0]];

switch(name){

    case 'MacOS':
    case 'Linux':

        {

            let name = NAMES[(userAgent.match(/iphone|android/) || ['other'])[0]] ;

            if(name !== 'Other'){

                return name ;
            }
        }
}

return name ;
    }
    return function(){
        
        
        if(__once_1534473867458_locked__){

            return __once_1534473867458_value__ ;

        }

        __once_1534473867458_locked__ = true ;
        
        return __once_1534473867458_value__ =  main.call((function(){

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

exports['src::browser.embed.name'] = (() =>{
    
    
    
    
    let __once_1534473867458_value__,
        __once_1534473867458_locked__ = false;
    
    let __first_executed_1534473867458__ = false ;
    
    
    function main(){

        

const NAMES = {
    ue4: 'UE4',
    unity:'U3D',
    other: 'Other'
};

return NAMES[(navigator.userAgent.toLowerCase().match(/ue4|unity/) || ['other'])[0]];
    }
    return function(){
        
        
        if(__once_1534473867458_locked__){

            return __once_1534473867458_value__ ;

        }

        __once_1534473867458_locked__ = true ;
        
        return __once_1534473867458_value__ =  main.call((function(){

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

exports['src::browser.support.touch'] = (() =>{
    let osName,getName;
    
    
    
    let __once_1534473867458_value__,
        __once_1534473867458_locked__ = false;
    
    let __first_executed_1534473867458__ = false ;
    
    
    function main(){

        

const isTouch = window.hasOwnProperty('ontouchstart');

 if(osName() === 'Windows'){

    let name = getName() ;

    return isTouch && name !== 'U3D' && name !== 'UE4';
 }

 return isTouch ;
    }
    return function(){
        
        if(!__first_executed_1534473867458__){
            osName = include('os.name');
getName = include('browser.embed.name');
            
            __first_executed_1534473867458__ = true ;
        }
        
        
        if(__once_1534473867458_locked__){

            return __once_1534473867458_value__ ;

        }

        __once_1534473867458_locked__ = true ;
        
        return __once_1534473867458_value__ =  main.call((function(){

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

exports['src::browser.event.pointer'] = (() =>{
    let isTouch;
    
    
    
    let __first_executed_1534473867459__ = false ;
    
    
    function main(e,valid){

        

if(isTouch()){

    let {
        changedTouches:touches
    } = e ;

    if(valid){

        if(touches.length == 1){

            return touches[0] ;
        }
    
    }else{

        return touches[0] ;
    }
}

return e ;
    }
    return function(e,valid = false){
        
        if(!__first_executed_1534473867459__){
            isTouch = include('browser.support.touch');
            
            __first_executed_1534473867459__ = true ;
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

        }).call(this) , e,valid) ;
    }
    

})() ;

exports['src::array.removeByIndex'] = (() =>{
    
    
    
    
    let __first_executed_1534473867459__ = false ;
    
    
    function main(data,index){

        

if(index >= 0 && index < data.length){

    data.splice(index , 1) ;

    return true ;
}

return false ;
    }
    return function(data,index){
        
        
        return  main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , data,index) ;
    }
    

})() ;

exports['src::map.event.listener'] = (() =>{
    let remove;
    
    
    
    let __once_1534473867459_value__,
        __once_1534473867459_locked__ = false;
    
    let __first_executed_1534473867459__ = false ;
    
    
    function main(){

        

class Map{

    constructor(){

        let me = this ;

        me.functions = [] ;

        me.scopes = [] ;

        me.results = [] ;
    }

    indexOf(fn , scope){

        let {
            functions,
            scopes
        } = this,
        len = functions.length;

        for(let i = 0 ; i < len ; i ++){

            if(functions[i] === fn && scopes[i] === scope){

                return i ;
            }
        }

        return -1 ;
    }

    get(fn , scope){

        let 
        me = this,
        {
            functions,
            scopes,
            results
        } = me,
        index = me.indexOf(fn , scope);

        if(index !== -1){

            return results[index] ;
        }

        functions.push(fn) ;

        fn = fn.bind(scope) ;

        scopes.push(scope) ;

        results.push(fn) ;

        return fn;
    }

    remove(fn , scope){

        let 
        me = this,
        {
            functions,
            scopes,
            results
        } = me,
        index = me.indexOf(fn , scope);

        if(index !== -1){

            remove(functions , index) ;

            remove(scopes , index) ;

            remove(results , index) ;
        }
    }
}

return new Map() ;
    }
    return function(){
        
        if(!__first_executed_1534473867459__){
            remove = include('array.removeByIndex');
            
            __first_executed_1534473867459__ = true ;
        }
        
        
        if(__once_1534473867459_locked__){

            return __once_1534473867459_value__ ;

        }

        __once_1534473867459_locked__ = true ;
        
        return __once_1534473867459_value__ =  main.call((function(){

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

exports['src::browser.html.event.listener.add'] = (() =>{
    let getMap;
    
    
    
    let __first_executed_1534473867459__ = false ;
    
    
    function main(target,event,fn,scope){

        

target.addEventListener(event , getMap().get(fn , scope)) ;
    }
    return function(target,event,fn,scope){
        
        if(!__first_executed_1534473867459__){
            getMap = include('map.event.listener');
            
            __first_executed_1534473867459__ = true ;
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

        }).call(this) , target,event,fn,scope) ;
    }
    

})() ;

exports['src::browser.html.element.addWindowEventListener'] = (() =>{
    let addEventListener;
    
    
    
    let __first_executed_1534473867459__ = false ;
    
    
    function main(el,event,fn){

        

addEventListener(window , event , fn , el) ;
    }
    return function(el,event,fn){
        
        if(!__first_executed_1534473867459__){
            addEventListener = include('browser.html.event.listener.add');
            
            __first_executed_1534473867459__ = true ;
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

        }).call(this) , el,event,fn) ;
    }
    

})() ;

exports['src::math.point.distance'] = (() =>{
    
    
    
    
    let __first_executed_1534473867459__ = false ;
    
    
    function main(point1,point2){

        

const {
    pow,
    sqrt
} = Math ;

return sqrt(pow(point1.x - point2.x , 2) + pow(point1.y - point2.y , 2) , 2);
    }
    return function(point1,point2){
        
        
        return  main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , point1,point2) ;
    }
    

})() ;

exports['src::browser.html.event.listener.remove'] = (() =>{
    let getMap;
    
    
    
    let __first_executed_1534473867459__ = false ;
    
    
    function main(target,event,fn,scope){

        

let map = getMap() ;

target.removeEventListener(event , map.get(fn , scope)) ;

map.remove(fn , scope) ;
    }
    return function(target,event,fn,scope){
        
        if(!__first_executed_1534473867459__){
            getMap = include('map.event.listener');
            
            __first_executed_1534473867459__ = true ;
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

        }).call(this) , target,event,fn,scope) ;
    }
    

})() ;

exports['src::browser.html.element.removeWindowEventListener'] = (() =>{
    let removeEventListener;
    
    
    
    let __first_executed_1534473867459__ = false ;
    
    
    function main(el,event,fn){

        

removeEventListener(window , event , fn , el) ;
    }
    return function(el,event,fn){
        
        if(!__first_executed_1534473867459__){
            removeEventListener = include('browser.html.event.listener.remove');
            
            __first_executed_1534473867459__ = true ;
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

        }).call(this) , el,event,fn) ;
    }
    

})() ;

exports['src::browser.event.dispatch'] = (() =>{
    
    
    
    
    let __first_executed_1534473867459__ = false ;
    
    
    function main(target,name,detail){

        

target.dispatchEvent(new CustomEvent(name , {
    bubbles:false,
    detail
})) ;
    }
    return function(target,name,detail){
        
        
        return  main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , target,name,detail) ;
    }
    

})() ;

exports['src::object.data.name.signature'] = (() =>{
    
    
    
    
    let __once_1534473867459_value__,
        __once_1534473867459_locked__ = false;
    
    let __first_executed_1534473867459__ = false ;
    
    
    function main(){

        

return `zbee-key-${Date.now()}` ;
    }
    return function(){
        
        
        if(__once_1534473867459_locked__){

            return __once_1534473867459_value__ ;

        }

        __once_1534473867459_locked__ = true ;
        
        return __once_1534473867459_value__ =  main.call((function(){

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

exports['src::object.data.name'] = (() =>{
    let signature;
    
    
    
    let __first_executed_1534473867459__ = false ;
    
    
    function main(name){

        

return `${signature()}-${name}` ;
    }
    return function(name){
        
        if(!__first_executed_1534473867459__){
            signature = include('object.data.name.signature');
            
            __first_executed_1534473867459__ = true ;
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

        }).call(this) , name) ;
    }
    

})() ;

exports['src::object.data.get'] = (() =>{
    let getName;
    
    
    
    let __first_executed_1534473867459__ = false ;
    
    
    function main(target,name){

        

return target[getName(name)] ;
    }
    return function(target,name){
        
        if(!__first_executed_1534473867459__){
            getName = include('object.data.name');
            
            __first_executed_1534473867459__ = true ;
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

        }).call(this) , target,name) ;
    }
    

})() ;

exports['src::object.data.set'] = (() =>{
    let getName;
    
    
    
    let __first_executed_1534473867459__ = false ;
    
    
    function main(target,name,value){

        

target[getName(name)] = value ;
    }
    return function(target,name,value){
        
        if(!__first_executed_1534473867459__){
            getName = include('object.data.name');
            
            __first_executed_1534473867459__ = true ;
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

        }).call(this) , target,name,value) ;
    }
    

})() ;

exports['src::browser.event.gesture.tap.methods.onEnd'] = (() =>{
    let disabled,dispatch,getEvent,get,set;
    
    
    
    let __first_executed_1534473867459__ = false ;
    
    
    function main(e){

        

e.preventDefault() ;

let el = this,
    event = getEvent(e),
    defer = get(el , 'tap:defer');

dispatch(el , 'touch:beforetap' , {
    browserEvent:e,
    event:getEvent(e)
}) ;

if(defer){

    set(el , 'tap:deferTimer' , setTimeout(() =>{

        dispatch(el , 'touch:tap' , {
            browserEvent:e,
            event:getEvent(e)
        }) ;
        
        disabled(el) ;

    } , defer)) ;
    
}else{

    dispatch(el , 'touch:tap' , {
        browserEvent:e,
        event:getEvent(e)
    }) ;
    
    disabled(el) ;
}
    }
    return function(e){
        
        if(!__first_executed_1534473867459__){
            disabled = include('browser.event.gesture.tap.methods.disabled');
dispatch = include('browser.event.dispatch');
getEvent = include('browser.event.pointer');
get = include('object.data.get');
set = include('object.data.set');
            
            __first_executed_1534473867459__ = true ;
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

        }).call(this) , e) ;
    }
    

})() ;

exports['src::browser.event.pointer.move'] = (() =>{
    let isTouch;
    
    
    
    let __once_1534473867459_value__,
        __once_1534473867459_locked__ = false;
    
    let __first_executed_1534473867459__ = false ;
    
    
    function main(){

        

return isTouch() ? 'touchmove' : 'pointermove' ;
    }
    return function(){
        
        if(!__first_executed_1534473867459__){
            isTouch = include('browser.support.touch');
            
            __first_executed_1534473867459__ = true ;
        }
        
        
        if(__once_1534473867459_locked__){

            return __once_1534473867459_value__ ;

        }

        __once_1534473867459_locked__ = true ;
        
        return __once_1534473867459_value__ =  main.call((function(){

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

exports['src::browser.event.pointer.up'] = (() =>{
    let isTouch;
    
    
    
    let __once_1534473867459_value__,
        __once_1534473867459_locked__ = false;
    
    let __first_executed_1534473867459__ = false ;
    
    
    function main(){

        

return isTouch() ? 'touchend' : 'pointerup' ;
    }
    return function(){
        
        if(!__first_executed_1534473867459__){
            isTouch = include('browser.support.touch');
            
            __first_executed_1534473867459__ = true ;
        }
        
        
        if(__once_1534473867459_locked__){

            return __once_1534473867459_value__ ;

        }

        __once_1534473867459_locked__ = true ;
        
        return __once_1534473867459_value__ =  main.call((function(){

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

exports['src::object.data.remove'] = (() =>{
    let getName;
    
    
    
    let __first_executed_1534473867459__ = false ;
    
    
    function main(target,name){

        

delete target[getName(name)] ;
    }
    return function(target,name){
        
        if(!__first_executed_1534473867459__){
            getName = include('object.data.name');
            
            __first_executed_1534473867459__ = true ;
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

        }).call(this) , target,name) ;
    }
    

})() ;

exports['src::browser.event.gesture.tap.methods.disabled'] = (() =>{
    let removeEventListener,onMove,onEnd,getMoveEventName,getUpEventName,get,remove,tap;
    
    
    
    let __first_executed_1534473867459__ = false ;
    
    
    function main(el){

        

removeEventListener(el , getMoveEventName() , onMove) ;

removeEventListener(el , getUpEventName() , onEnd) ;

clearTimeout(get(el , 'tap:deferTimer')) ;

remove(el , 'tap:deferTimer') ;

remove(el , 'tap:startPoint') ;

tap.locked = false ;
    }
    return function(el){
        
        if(!__first_executed_1534473867459__){
            removeEventListener = include('browser.html.element.removeWindowEventListener');
onMove = include('browser.event.gesture.tap.methods.onMove');
onEnd = include('browser.event.gesture.tap.methods.onEnd');
getMoveEventName = include('browser.event.pointer.move');
getUpEventName = include('browser.event.pointer.up');
get = include('object.data.get');
remove = include('object.data.remove');
tap = include('browser.event.gesture.tap');
            
            __first_executed_1534473867459__ = true ;
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

        }).call(this) , el) ;
    }
    

})() ;

exports['src::browser.scale'] = (() =>{
    let osName;
    
    
    
    let __first_executed_1534473867460__ = false ;
    
    
    function main(){

        

switch(osName){

    case 'iOS':
    case 'Android':

        return 1 ;
}

return window.devicePixelRatio ;
    }
    return function(){
        
        if(!__first_executed_1534473867460__){
            osName = include('os.name');
            
            __first_executed_1534473867460__ = true ;
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

        }).call(this) ) ;
    }
    

})() ;

exports['config::gesture.tap'] = {
    "timeout":100,
    "moveDistance":100
} ;

exports['src::browser.event.gesture.tap.methods.onMove'] = (() =>{
    let getEvent,getDistance,disabled,scale,get,dispatch,configGestureTap;
    let moveDistance;
    
    
    let __first_executed_1534473867460__ = false ;
    
    
    function main(e){

        

e.preventDefault() ;

let el = this,
    event = getEvent(e);

if(Math.round(Math.abs(getDistance({
    x:event.pageX,
    y:event.pageY
} , get(el , 'tap:startPoint')) * scale())) >= moveDistance){

    dispatch(el , 'touch:tapcancel' , {
        browserEvent:e,
        event
    }) ;
    
    disabled(el) ;
}
    }
    return function(e){
        
        if(!__first_executed_1534473867460__){
            getEvent = include('browser.event.pointer');
getDistance = include('math.point.distance');
disabled = include('browser.event.gesture.tap.methods.disabled');
scale = include('browser.scale');
get = include('object.data.get');
dispatch = include('browser.event.dispatch');
configGestureTap = include('config::gesture.tap');
            moveDistance = config('gesture.tap' , 'moveDistance');
            __first_executed_1534473867460__ = true ;
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

        }).call(this) , e) ;
    }
    

})() ;

exports['src::browser.event.gesture.tap.methods.enabled'] = (() =>{
    let addEventListener,onMove,onEnd,getMoveEventName,getUpEventName;
    
    
    
    let __first_executed_1534473867460__ = false ;
    
    
    function main(el){

        

addEventListener(el , getMoveEventName() , onMove) ;

addEventListener(el , getUpEventName() , onEnd) ;
    }
    return function(el){
        
        if(!__first_executed_1534473867460__){
            addEventListener = include('browser.html.element.addWindowEventListener');
onMove = include('browser.event.gesture.tap.methods.onMove');
onEnd = include('browser.event.gesture.tap.methods.onEnd');
getMoveEventName = include('browser.event.pointer.move');
getUpEventName = include('browser.event.pointer.up');
            
            __first_executed_1534473867460__ = true ;
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

        }).call(this) , el) ;
    }
    

})() ;

exports['src::object.data.has'] = (() =>{
    let getName;
    
    
    
    let __first_executed_1534473867460__ = false ;
    
    
    function main(target,name){

        

return target.hasOwnProperty(getName(name)) ;
    }
    return function(target,name){
        
        if(!__first_executed_1534473867460__){
            getName = include('object.data.name');
            
            __first_executed_1534473867460__ = true ;
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

        }).call(this) , target,name) ;
    }
    

})() ;

exports['src::browser.event.gesture.tap.methods.onStart'] = (() =>{
    let getEvent,enabled,set,get,has,tap,configGestureTap;
    let timeout;
    
    
    let __first_executed_1534473867460__ = false ;
    
    
    function main(e){

        

let {
    locked,
    time
} = tap ;

if(locked === true){

    return ;
}

let currentTime = Date.now() ;

if(time && currentTime - time <= timeout){

    return ;
}

tap.time = currentTime ;

tap.locked = true ;

e.preventDefault() ;

let event = getEvent(e , true);

if(!event){

    return ;
}

let el = this ;

set(el , 'tap:startPoint' , {
    x:event.pageX,
    y:event.pageY
}) ;

if(has(el , 'tap:defer')){

    clearTimeout(get(el , 'tap:deferTimer')) ;
}

enabled(el) ;
    }
    return function(e){
        
        if(!__first_executed_1534473867460__){
            getEvent = include('browser.event.pointer');
enabled = include('browser.event.gesture.tap.methods.enabled');
set = include('object.data.set');
get = include('object.data.get');
has = include('object.data.has');
tap = include('browser.event.gesture.tap');
configGestureTap = include('config::gesture.tap');
            timeout = config('gesture.tap' , 'timeout');
            __first_executed_1534473867460__ = true ;
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

        }).call(this) , e) ;
    }
    

})() ;

exports['src::browser.event.pointer.down'] = (() =>{
    let isTouch;
    
    
    
    let __once_1534473867460_value__,
        __once_1534473867460_locked__ = false;
    
    let __first_executed_1534473867460__ = false ;
    
    
    function main(){

        

return isTouch() ? 'touchstart' : 'pointerdown' ;
    }
    return function(){
        
        if(!__first_executed_1534473867460__){
            isTouch = include('browser.support.touch');
            
            __first_executed_1534473867460__ = true ;
        }
        
        
        if(__once_1534473867460_locked__){

            return __once_1534473867460_value__ ;

        }

        __once_1534473867460_locked__ = true ;
        
        return __once_1534473867460_value__ =  main.call((function(){

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

exports['src::browser.event.gesture.tap.methods.install'] = (() =>{
    let onStart,getEventName,set;
    
    
    
    let __first_executed_1534473867460__ = false ;
    
    
    function main(el,config){

        

if(config){

    let {
        defer
    } = config ;

    if(defer){

        set(el , 'tap:defer' , defer) ;
    }
}

el.addEventListener(getEventName() , onStart) ;
    }
    return function(el,config){
        
        if(!__first_executed_1534473867460__){
            onStart = include('browser.event.gesture.tap.methods.onStart');
getEventName = include('browser.event.pointer.down');
set = include('object.data.set');
            
            __first_executed_1534473867460__ = true ;
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

        }).call(this) , el,config) ;
    }
    

})() ;

exports['src::browser.event.gesture.tap.methods.uninstall'] = (() =>{
    let onStart,getEventName;
    
    
    
    let __first_executed_1534473867460__ = false ;
    
    
    function main(el){

        

el.removeEventListener(getEventName() , onStart) ;
    }
    return function(el){
        
        if(!__first_executed_1534473867460__){
            onStart = include('browser.event.gesture.tap.methods.onStart');
getEventName = include('browser.event.pointer.down');
            
            __first_executed_1534473867460__ = true ;
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

        }).call(this) , el) ;
    }
    

})() ;

exports['src::browser.event.gesture.tap'] = (() =>{

    
        class Main{
            static  get handledEvents (){
                    return include('browser.event.gesture.tap.properties.handleEvents').call(this) ;
                }
static install(){
                    return include('browser.event.gesture.tap.methods.install').apply(this , arguments) ;
                }static uninstall(){
                    return include('browser.event.gesture.tap.methods.uninstall').apply(this , arguments) ;
                }
        };
        

    return Main ;

})() ;

exports['src::browser.event.gesture.drag.properties.handleEvents'] = (() =>{
    
    
    
    
    let __once_1534473867462_value__,
        __once_1534473867462_locked__ = false;
    
    let __first_executed_1534473867462__ = false ;
    
    
    function main(){

        

return [
    'touch:dragstart',
    'touch:drag',
    'touch:dragend'
] ;
    }
    return function(){
        
        
        if(__once_1534473867462_locked__){

            return __once_1534473867462_value__ ;

        }

        __once_1534473867462_locked__ = true ;
        
        return __once_1534473867462_value__ =  main.call((function(){

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

exports['src::browser.event.gesture.drag.methods.resetInfo'] = (() =>{
    let get;
    
    
    
    let __first_executed_1534473867462__ = false ;
    
    
    function main(el,axis){

        

let info = get(el , 'drag:info'),
    value = get(el , 'drag:lastPoint')[axis],
    startPoint = get(el , 'drag:startPoint'),
    startValue = startPoint[axis],
    delta = value - startValue,
    capAxis = axis.toUpperCase(),
    startTime = get(el , 'drag:startTime');

    info.delta[axis] = delta;
    info.absDelta[axis] = Math.abs(delta);

    info.previousTime[axis] = startTime;
    info.previous[axis] = startValue;
    info[axis] = value;
    info.direction[axis] = 0;

    info['start' + capAxis] = startPoint[axis];
    info['previous' + capAxis] = info.previous[axis];
    info['page' + capAxis] = info[axis];
    info['delta' + capAxis] = info.delta[axis];
    info['absDelta' + capAxis] = info.absDelta[axis];
    info['previousDelta' + capAxis] = 0;
    info.startTime = startTime;
    }
    return function(el,axis){
        
        if(!__first_executed_1534473867462__){
            get = include('object.data.get');
            
            __first_executed_1534473867462__ = true ;
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

        }).call(this) , el,axis) ;
    }
    

})() ;

exports['src::browser.event.gesture.drag.methods.updateInfo'] = (() =>{
    let get;
    
    
    
    let __first_executed_1534473867462__ = false ;
    
    
    function main(el,axis,updatePrevious){

        

 
let info = get(el , 'drag:info'),
    time = Date.now(),
    value = get(el , 'drag:lastPoint')[axis],
    previousValue = get(el , 'drag:previousPoint')[axis],
    startPoint = get(el , 'drag:startPoint'),
    startValue = startPoint[axis],
    delta = value - startValue,
    direction = info.direction,
    capAxis = axis.toUpperCase(),
    previousFlick = info.previous[axis],
    previousDelta;

    previousDelta = info.delta[axis];
    info.delta[axis] = delta;
    info.absDelta[axis] = Math.abs(delta);

    if (updatePrevious && value !== previousFlick && value !== info[axis] && time - info.previousTime[axis] >= 50) {

        info.previous[axis] = info[axis];
        
        info.previousTime[axis] = info.time;
    }

    info[axis] = value;

    if (value > previousValue) {

        direction[axis] = 1;
    }
    else if (value < previousValue) {

        direction[axis] = -1;
    }

    info['start' + capAxis] = startPoint[axis];
    info['previous' + capAxis] = info.previous[axis];
    info['page' + capAxis] = info[axis];
    info['delta' + capAxis] = info.delta[axis];
    info['absDelta' + capAxis] = info.absDelta[axis];
    info['previousDelta' + capAxis] = previousDelta;
    info.startTime = get(el , 'drag:startTime');
    }
    return function(el,axis,updatePrevious){
        
        if(!__first_executed_1534473867462__){
            get = include('object.data.get');
            
            __first_executed_1534473867462__ = true ;
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

        }).call(this) , el,axis,updatePrevious) ;
    }
    

})() ;

exports['src::browser.event.gesture.drag.methods.onDragMove'] = (() =>{
    let get,set,has,updateInfo,getEvent,dispatch;
    
    
    
    let __first_executed_1534473867462__ = false ;
    
    
    function main(e){

        

e.preventDefault() ;

let event = getEvent(e),
    el = this ;

if(has(el , 'drag:lastPoint')){

    set(el , 'drag:previousPoint' , get(el , 'drag:lastPoint')) ;
}

set(el , 'drag:lastPoint' , {
    x:event.pageX,
    y:event.pageY
}) ;

updateInfo(el , 'x' , true);

updateInfo(el , 'y' , true);

let info = get(el , 'drag:info') ;

info.time = Date.now();

dispatch(el , 'touch:drag' , {
    event,
    browserEvent:e,
    info
}) ;
    }
    return function(e){
        
        if(!__first_executed_1534473867462__){
            get = include('object.data.get');
set = include('object.data.set');
has = include('object.data.has');
updateInfo = include('browser.event.gesture.drag.methods.updateInfo');
getEvent = include('browser.event.pointer');
dispatch = include('browser.event.dispatch');
            
            __first_executed_1534473867462__ = true ;
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

        }).call(this) , e) ;
    }
    

})() ;

exports['src::browser.event.gesture.drag.methods.onAxisDragEnd'] = (() =>{
    
    
    
    
    let __first_executed_1534473867462__ = false ;
    
    
    function main(axis,info){

        

let duration = info.time - info.previousTime[axis];

if (duration > 0) {

    info.flick.velocity[axis] = (info[axis] - info.previous[axis]) / duration;
}
    }
    return function(axis,info){
        
        
        return  main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , axis,info) ;
    }
    

})() ;

exports['src::browser.event.gesture.drag.methods.onEnd'] = (() =>{
    let get,set,remove,getEvent,updateInfo,onAxisDragEnd,getMoveEventName,getEndEventName,onDragMove,onEnd,dispatch,removeEventListener;
    
    
    
    let __first_executed_1534473867462__ = false ;
    
    
    function main(e){

        

e.preventDefault() ;

let el = this,
    event = getEvent(e),
    info = get(el , 'drag:info');

set(el , 'drag:lastPoint' , {
    x:event.pageX,
    y:event.pageY
}) ;

updateInfo(el , 'x');

updateInfo(el , 'y');

info.time = Date.now();

onAxisDragEnd('x', info);

onAxisDragEnd('y', info);

dispatch(el , 'touch:dragend', {
    event,
    browserEvent:e,
    info
});

removeEventListener(el , getMoveEventName() , onDragMove),
removeEventListener(el , getEndEventName() , onEnd) ;

remove(el , 'drag:info') ;

remove(el , 'drag:lastPoint') ;

remove(el , 'drag:previousPoint') ;

remove(el , 'drag:startTime') ;

remove(el , 'drag:startPoint') ;
    }
    return function(e){
        
        if(!__first_executed_1534473867462__){
            get = include('object.data.get');
set = include('object.data.set');
remove = include('object.data.remove');
getEvent = include('browser.event.pointer');
updateInfo = include('browser.event.gesture.drag.methods.updateInfo');
onAxisDragEnd = include('browser.event.gesture.drag.methods.onAxisDragEnd');
getMoveEventName = include('browser.event.pointer.move');
getEndEventName = include('browser.event.pointer.up');
onDragMove = include('browser.event.gesture.drag.methods.onDragMove');
onEnd = include('browser.event.gesture.drag.methods.onEnd');
dispatch = include('browser.event.dispatch');
removeEventListener = include('browser.html.element.removeWindowEventListener');
            
            __first_executed_1534473867462__ = true ;
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

        }).call(this) , e) ;
    }
    

})() ;

exports['config::gesture.drag'] = {
    "minDistance":8
} ;

exports['src::browser.event.gesture.drag.methods.onMove'] = (() =>{
    let set,get,getEvent,scale,resetInfo,getMoveEventName,getEndEventName,addEventListener,removeEventListener,onMove,onDragMove,onEnd,distance,dispatch,configGestureDrag;
    let minDistance;
    
    
    let __first_executed_1534473867463__ = false ;
    
    
    function main(e){

        


e.preventDefault() ;

let event = getEvent(e , true),
    el = this,
    info = get(el , 'drag:info'),
    point = {
        x:event.pageX,
        y:event.pageY
    };

if (Math.round(distance(get(el , 'drag:startPoint') , point) * scale()) >= minDistance) {

    set(el , 'drag:previousPoint' , point) ;

    set(el , 'drag:lastPoint' , point) ;

    resetInfo(el , 'x');
    
    resetInfo(el , 'y');

    info.time = Date.now();

    dispatch(el , 'touch:dragstart', {
        browserEvent:e,
        event,
        info
    });

    let moveEventName = getMoveEventName() ;

    removeEventListener(el , moveEventName , onMove) ;

    addEventListener(el , moveEventName , onDragMove) ;

    addEventListener(el , getEndEventName() , onEnd);
}
    }
    return function(e){
        
        if(!__first_executed_1534473867463__){
            set = include('object.data.set');
get = include('object.data.get');
getEvent = include('browser.event.pointer');
scale = include('browser.scale');
resetInfo = include('browser.event.gesture.drag.methods.resetInfo');
getMoveEventName = include('browser.event.pointer.move');
getEndEventName = include('browser.event.pointer.up');
addEventListener = include('browser.html.element.addWindowEventListener');
removeEventListener = include('browser.html.element.removeWindowEventListener');
onMove = include('browser.event.gesture.drag.methods.onMove');
onDragMove = include('browser.event.gesture.drag.methods.onDragMove');
onEnd = include('browser.event.gesture.drag.methods.onEnd');
distance = include('math.point.distance');
dispatch = include('browser.event.dispatch');
configGestureDrag = include('config::gesture.drag');
            minDistance = config('gesture.drag' , 'minDistance');
            __first_executed_1534473867463__ = true ;
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

        }).call(this) , e) ;
    }
    

})() ;

exports['src::browser.event.gesture.drag.methods.onStart'] = (() =>{
    let set,getEvent,addEventListener,onMove,getEventName;
    
    
    
    let __first_executed_1534473867463__ = false ;
    
    
    function main(e){

        

e.preventDefault() ;

let event = getEvent(e , true);

if(!event){

    return ;
}

let el = this ;

set(el, 'drag:info', {
    previous: {
        x: 0,
        y: 0
    },
    x: 0,
    y: 0,
    delta: {
        x: 0,
        y: 0
    },
    absDelta: {
        x: 0,
        y: 0
    },
    flick: {
        velocity: {
            x: 0,
            y: 0
        }
    },
    direction: {
        x: 0,
        y: 0
    },
    time: 0,
    previousTime: {
        x: 0,
        y: 0
    }
}),
set(el , 'drag:startTime' , Date.now()),
set(el , 'drag:startPoint' , {
    x:event.pageX,
    y:event.pageY
});

addEventListener(el , getEventName() , onMove) ;
    }
    return function(e){
        
        if(!__first_executed_1534473867463__){
            set = include('object.data.set');
getEvent = include('browser.event.pointer');
addEventListener = include('browser.html.element.addWindowEventListener');
onMove = include('browser.event.gesture.drag.methods.onMove');
getEventName = include('browser.event.pointer.move');
            
            __first_executed_1534473867463__ = true ;
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

        }).call(this) , e) ;
    }
    

})() ;

exports['src::browser.event.gesture.drag.methods.install'] = (() =>{
    let onStart,getEventName;
    
    
    
    let __first_executed_1534473867463__ = false ;
    
    
    function main(el){

        

el.addEventListener(getEventName() , onStart) ;
    }
    return function(el){
        
        if(!__first_executed_1534473867463__){
            onStart = include('browser.event.gesture.drag.methods.onStart');
getEventName = include('browser.event.pointer.down');
            
            __first_executed_1534473867463__ = true ;
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

        }).call(this) , el) ;
    }
    

})() ;

exports['src::browser.event.gesture.drag.methods.uninstall'] = (() =>{
    let onStart,getEventName;
    
    
    
    let __first_executed_1534473867463__ = false ;
    
    
    function main(el){

        

el.removeEventListener(getEventName() , onStart) ;
    }
    return function(el){
        
        if(!__first_executed_1534473867463__){
            onStart = include('browser.event.gesture.drag.methods.onStart');
getEventName = include('browser.event.pointer.down');
            
            __first_executed_1534473867463__ = true ;
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

        }).call(this) , el) ;
    }
    

})() ;

exports['src::browser.event.gesture.drag'] = (() =>{

    
        class Main{
            static  get handledEvents (){
                    return include('browser.event.gesture.drag.properties.handleEvents').call(this) ;
                }
static install(){
                    return include('browser.event.gesture.drag.methods.install').apply(this , arguments) ;
                }static uninstall(){
                    return include('browser.event.gesture.drag.methods.uninstall').apply(this , arguments) ;
                }
        };
        

    return Main ;

})() ;

exports['src::browser.event.gesture.swipe.properties.handleEvents'] = (() =>{
    
    
    
    
    let __once_1534473867463_value__,
        __once_1534473867463_locked__ = false;
    
    let __first_executed_1534473867463__ = false ;
    
    
    function main(){

        

return [
    'touch:swipestart',
    'touch:swipe',
    'touch:swipecancel'
] ;
    }
    return function(){
        
        
        if(__once_1534473867463_locked__){

            return __once_1534473867463_value__ ;

        }

        __once_1534473867463_locked__ = true ;
        
        return __once_1534473867463_value__ =  main.call((function(){

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

exports['config::gesture.swipe'] = {
    "moveDistance":8,
    "minDistance": 80,
    "maxOffset": 35,
    "maxDuration": 1000
} ;

exports['src::browser.event.gesture.swipe.methods.onEnd'] = (() =>{
    let cancel,disabled,dispatch,getEvent,get,set,configGestureSwipe;
    let maxDuration,moveDistance,minDistance,maxOffset;
    
    
    let __first_executed_1534473867463__ = false ;
    
    
    function main(e){

        

e.preventDefault() ;

let el = this,
    event = getEvent(e),
    x = event.pageX,
    y = event.pageY,
    deltaX = x - get(el , 'swipe:startX'),
    deltaY = y - get(el , 'swipe:startY'),
    absDeltaX = Math.abs(deltaX),
    absDeltaY = Math.abs(deltaY),
    duration = Date.now() - get(el , 'swipe:startTime'),
    isHorizontal = get(el , 'swipe:isHorizontal'),
    isVertical = get(el , 'swipe:isVertical'),
    direction,
    distance;


if(isVertical && absDeltaY < minDistance){

    set(el , 'swipe:isVertical' , isVertical = false) ;
}

if(isHorizontal && absDeltaX < minDistance){

    set(el , 'swipe:isHorizontal' , isHorizontal = false) ;
}

if(isHorizontal){

    direction = (deltaX < 0) ? 'left' : 'right';

    distance = absDeltaX;

}else if(isVertical){

    direction = (deltaY < 0) ? 'up' : 'down';
    
    distance = absDeltaY;
}

if(!isHorizontal && !isVertical){

    return cancel(el , event , e) ;
}

disabled(el) ;

dispatch(el , 'touch:swipe' , {
    browserEvent:e,
    event,
    direction,
    distance,
    duration
});
    }
    return function(e){
        
        if(!__first_executed_1534473867463__){
            cancel = include('browser.event.gesture.swipe.methods.cancel');
disabled = include('browser.event.gesture.swipe.methods.disabled');
dispatch = include('browser.event.dispatch');
getEvent = include('browser.event.pointer');
get = include('object.data.get');
set = include('object.data.set');
configGestureSwipe = include('config::gesture.swipe');
configGestureSwipe = include('config::gesture.swipe');
configGestureSwipe = include('config::gesture.swipe');
configGestureSwipe = include('config::gesture.swipe');
            maxDuration = config('gesture.swipe' , 'maxDuration');
moveDistance = config('gesture.swipe' , 'moveDistance');
minDistance = config('gesture.swipe' , 'minDistance');
maxOffset = config('gesture.swipe' , 'maxOffset');
            __first_executed_1534473867463__ = true ;
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

        }).call(this) , e) ;
    }
    

})() ;

exports['src::browser.event.gesture.swipe.methods.disabled'] = (() =>{
    let removeEventListener,onMove,onEnd,getMoveEventName,getUpEventName,get,remove;
    
    
    
    let __first_executed_1534473867463__ = false ;
    
    
    function main(el){

        

removeEventListener(el , getMoveEventName() , onMove) ;

removeEventListener(el , getUpEventName() , onEnd) ;

remove(el , 'swipe:startTime') ;

remove(el , 'swipe:isHorizontal') ;

remove(el , 'swipe:isVertical') ;

remove(el , 'swipe:startX') ;

remove(el , 'swipe:startY') ;
    }
    return function(el){
        
        if(!__first_executed_1534473867463__){
            removeEventListener = include('browser.html.element.removeWindowEventListener');
onMove = include('browser.event.gesture.swipe.methods.onMove');
onEnd = include('browser.event.gesture.swipe.methods.onEnd');
getMoveEventName = include('browser.event.pointer.move');
getUpEventName = include('browser.event.pointer.up');
get = include('object.data.get');
remove = include('object.data.remove');
            
            __first_executed_1534473867463__ = true ;
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

        }).call(this) , el) ;
    }
    

})() ;

exports['src::browser.event.gesture.swipe.methods.cancel'] = (() =>{
    let disabled,dispatch;
    
    
    
    let __first_executed_1534473867464__ = false ;
    
    
    function main(el,event,e){

        

disabled(el) ;

dispatch(el , 'touch:swipecancel' , {
    browserEvent:e,
    event
}) ;
    }
    return function(el,event,e){
        
        if(!__first_executed_1534473867464__){
            disabled = include('browser.event.gesture.swipe.methods.disabled');
dispatch = include('browser.event.dispatch');
            
            __first_executed_1534473867464__ = true ;
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

        }).call(this) , el,event,e) ;
    }
    

})() ;

exports['src::browser.event.gesture.swipe.methods.onMove'] = (() =>{
    let getEvent,cancel,get,set,dispatch,removeEventListener,onMove,getMoveEventName,supportTouch,configGestureSwipe;
    let maxDuration,moveDistance,minDistance,maxOffset;
    
    
    let __first_executed_1534473867464__ = false ;
    
    
    function main(e){

        

e.preventDefault() ;

let el = this,
    event = getEvent(e),
    x = event.pageX,
    y = event.pageY,
    deltaX = x - get(el , 'swipe:startX'),
    deltaY = y - get(el , 'swipe:startY'),
    absDeltaX = Math.abs(deltaX),
    absDeltaY = Math.abs(deltaY),
    duration = Date.now() - get(el , 'swipe:startTime'),
    isHorizontal = get(el , 'swipe:isHorizontal'),
    isVertical = get(el , 'swipe:isVertical'),
    direction,
    distance;

if ((supportTouch() && (absDeltaX === 0 && absDeltaY === 0)) || (duration > maxDuration)) {

    return cancel(el , event , e) ;

}

if (isHorizontal && absDeltaY > maxOffset) {

    set(el , 'swipe:isHorizontal' , isHorizontal = false) ;
}

if (isVertical && absDeltaX > maxOffset) {

    set(el , 'swipe:isVertical' , isVertical = false) ;
}

if(!isHorizontal && !isVertical){

    return cancel(el , event , e) ;
}

if (!isVertical || !isHorizontal){

    if(isHorizontal && absDeltaX < minDistance) {

        direction = (deltaX < 0) ? 'left' : 'right';

        distance = absDeltaX;

    }else if(isVertical && absDeltaY < minDistance) {

        direction = (deltaY < 0) ? 'up' : 'down';
        
        distance = absDeltaY;
    }
}

if (direction) {
    
    removeEventListener(el , getMoveEventName() , onMove) ;

    dispatch(el , 'touch:swipestart' , {
        browserEvent:e,
        event,
        direction,
        distance,
        duration
    });
}
    }
    return function(e){
        
        if(!__first_executed_1534473867464__){
            getEvent = include('browser.event.pointer');
cancel = include('browser.event.gesture.swipe.methods.cancel');
get = include('object.data.get');
set = include('object.data.set');
dispatch = include('browser.event.dispatch');
removeEventListener = include('browser.html.element.removeWindowEventListener');
onMove = include('browser.event.gesture.swipe.methods.onMove');
getMoveEventName = include('browser.event.pointer.move');
supportTouch = include('browser.support.touch');
configGestureSwipe = include('config::gesture.swipe');
configGestureSwipe = include('config::gesture.swipe');
configGestureSwipe = include('config::gesture.swipe');
configGestureSwipe = include('config::gesture.swipe');
            maxDuration = config('gesture.swipe' , 'maxDuration');
moveDistance = config('gesture.swipe' , 'moveDistance');
minDistance = config('gesture.swipe' , 'minDistance');
maxOffset = config('gesture.swipe' , 'maxOffset');
            __first_executed_1534473867464__ = true ;
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

        }).call(this) , e) ;
    }
    

})() ;

exports['src::browser.event.gesture.swipe.methods.enabled'] = (() =>{
    let addEventListener,onMove,onEnd,getMoveEventName,getUpEventName;
    
    
    
    let __first_executed_1534473867464__ = false ;
    
    
    function main(el){

        

addEventListener(el , getMoveEventName() , onMove) ;

addEventListener(el , getUpEventName() , onEnd) ;
    }
    return function(el){
        
        if(!__first_executed_1534473867464__){
            addEventListener = include('browser.html.element.addWindowEventListener');
onMove = include('browser.event.gesture.swipe.methods.onMove');
onEnd = include('browser.event.gesture.swipe.methods.onEnd');
getMoveEventName = include('browser.event.pointer.move');
getUpEventName = include('browser.event.pointer.up');
            
            __first_executed_1534473867464__ = true ;
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

        }).call(this) , el) ;
    }
    

})() ;

exports['src::browser.event.gesture.swipe.methods.onStart'] = (() =>{
    let getEvent,enabled,set;
    
    
    
    let __first_executed_1534473867464__ = false ;
    
    
    function main(e){

        

e.preventDefault() ;

let event = getEvent(e , true);

if(!event){

    return ;
}

let el = this ;

set(el , 'swipe:startTime' , Date.now()) ;

set(el , 'swipe:isHorizontal' , true) ;

set(el , 'swipe:isVertical' , true) ;

set(el , 'swipe:startX' , event.pageX) ;

set(el , 'swipe:startY' , event.pageY) ;

enabled(el) ;
    }
    return function(e){
        
        if(!__first_executed_1534473867464__){
            getEvent = include('browser.event.pointer');
enabled = include('browser.event.gesture.swipe.methods.enabled');
set = include('object.data.set');
            
            __first_executed_1534473867464__ = true ;
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

        }).call(this) , e) ;
    }
    

})() ;

exports['src::browser.event.gesture.swipe.methods.install'] = (() =>{
    let onStart,getEventName;
    
    
    
    let __first_executed_1534473867464__ = false ;
    
    
    function main(el){

        

el.addEventListener(getEventName() , onStart) ;
    }
    return function(el){
        
        if(!__first_executed_1534473867464__){
            onStart = include('browser.event.gesture.swipe.methods.onStart');
getEventName = include('browser.event.pointer.down');
            
            __first_executed_1534473867464__ = true ;
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

        }).call(this) , el) ;
    }
    

})() ;

exports['src::browser.event.gesture.swipe.methods.uninstall'] = (() =>{
    
    
    
    
    let __first_executed_1534473867464__ = false ;
    
    
    function main(el){

        

 // 代码实现
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

exports['src::browser.event.gesture.swipe'] = (() =>{

    
        class Main{
            static  get handledEvents (){
                    return include('browser.event.gesture.swipe.properties.handleEvents').call(this) ;
                }
static install(){
                    return include('browser.event.gesture.swipe.methods.install').apply(this , arguments) ;
                }static uninstall(){
                    return include('browser.event.gesture.swipe.methods.uninstall').apply(this , arguments) ;
                }
        };
        

    return Main ;

})() ;

exports['src::browser.html.element.style.set'] = (() =>{
    
    
    
    
    let __first_executed_1534473867464__ = false ;
    
    
    function main(el,prop,value){

        

el.style.setProperty(prop , value) ;
    }
    return function(el,prop,value){
        
        
        return  main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , el,prop,value) ;
    }
    

})() ;

exports['src::url.template.apply'] = (() =>{
    
    
    
    
    let __first_executed_1534473867464__ = false ;
    
    
    function main(url,data){

        

return url.replace(/\:([a-z]+)/g , (match , name) =>{

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

exports['src::is.string'] = (() =>{
    let isType;
    
    
    
    let __first_executed_1534473867464__ = false ;
    
    
    function main(data){

        

return isType(data , 'string') ;
    }
    return function(data){
        
        if(!__first_executed_1534473867464__){
            isType = include('is.type');
            
            __first_executed_1534473867464__ = true ;
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
    
    
    
    
    let __first_executed_1534473867464__ = false ;
    
    
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
    
    
    
    let __first_executed_1534473867465__ = false ;
    
    
    

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
        
        if(!__first_executed_1534473867465__){
            isAbsolute = include('url.isAbsolute');
            
            __first_executed_1534473867465__ = true ;
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
    
    
    
    let __first_executed_1534473867465__ = false ;
    
    
    function main(url,data){

        

let querystring ;

if(isString(data)){

    querystring = data ;

}else{

    const {
        stringify
    } = require('querystring') ;
    
    querystring = stringify(data);

}

if(url.includes('?')){

    return `${url}&${querystring}` ;
}

return `${url}?${querystring}` ;
    }
    return function(url,data){
        
        if(!__first_executed_1534473867465__){
            isString = include('is.string');
            
            __first_executed_1534473867465__ = true ;
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

exports['src::xml.parse'] = (() =>{
    
    
    
    
    let __first_executed_1534473867465__ = false ;
    
    
    

const {
    DOMParser
} = require('xmldom'),
parser = new DOMParser();

function main(){

    try{

        return parser.parseFromString(data , 'text/xml') ;

    }catch(err){


    }

    return parser.parseFromString('<xml/>' , 'text/xml') ;
}
    return function(data){
        
        
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

exports['src::is.object'] = (() =>{
    let isType;
    
    
    
    let __first_executed_1534473867465__ = false ;
    
    
    function main(data){

        

return Object.prototype.toString.call(data) === '[object Object]' ;
    }
    return function(data){
        
        if(!__first_executed_1534473867465__){
            isType = include('is.type');
            
            __first_executed_1534473867465__ = true ;
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
    
    
    
    let __first_executed_1534473867465__ = false ;
    
    
    

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
        
        if(!__first_executed_1534473867465__){
            isObject = include('is.object');
            
            __first_executed_1534473867465__ = true ;
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
    
    
    
    let __first_executed_1534473867465__ = false ;
    
    
    function main(data){

        

 return Array.isArray(data) ;
    }
    return function(data){
        
        if(!__first_executed_1534473867465__){
            isType = include('is.type');
            
            __first_executed_1534473867465__ = true ;
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
    
    
    
    let __first_executed_1534473867465__ = false ;
    
    
    function main(data,allowEmptyString){

        

return (data == null) || (!allowEmptyString ? data === '' : false) || (isArray(data) && data.length === 0);
    }
    return function(data,allowEmptyString = false){
        
        if(!__first_executed_1534473867465__){
            isArray = include('is.array');
            
            __first_executed_1534473867465__ = true ;
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
    
    
    
    let __first_executed_1534473867465__ = false ;
    
    
    

function main(target , splitRe){

    return target.split(splitRe).filter(filter) ;
 }

 function filter(target){

    return !isEmpty(target) ;
 }
    return function(target,splitRe){
        
        if(!__first_executed_1534473867465__){
            isEmpty = include('is.empty');
            
            __first_executed_1534473867465__ = true ;
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
    
    
    
    let __first_executed_1534473867465__ = false ;
    
    
    

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
        
        if(!__first_executed_1534473867465__){
            isObject = include('is.object');
split = include('string.split');
            
            __first_executed_1534473867465__ = true ;
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
    
    
    
    
    let __first_executed_1534473867465__ = false ;
    
    
    

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
    
    
    
    let __first_executed_1534473867465__ = false ;
    
    
    function main(dest,source){

        

let keys = getKeys(source) ;

for(let key of keys){

    set(dest , key , get(source , key)) ;
}

return dest ;
    }
    return function(dest,source){
        
        if(!__first_executed_1534473867465__){
            getKeys = include('object.keys');
set = include('object.set');
get = include('object.get');
            
            __first_executed_1534473867465__ = true ;
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

        }).call(this) , dest,source) ;
    }
    

})() ;

exports['config::http'] = {
    "default":{
        "timeout":20000,
        "type":"json"
    }
} ;

exports['src::http.params.parse'] = (() =>{
    let apply,isObject,isString,join,append,parse,assign,configHttp;
    let http;
    
    
    let __first_executed_1534473867465__ = false ;
    
    
    

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
            body
        } = params;

        return assign({
            uri:append(join(rootPath , apply(uri , path)) , {
                _dc:Date.now()
            }),
            timeout,
            method,
            headers,
            qs:query,
            transform:transform(responseType)
        } , process_body(body , requestType));
    }

    throw new Error('试图请求未注册的路径') ;
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
    return function(uri,method,params){
        
        if(!__first_executed_1534473867465__){
            apply = include('url.template.apply');
isObject = include('is.object.simple');
isString = include('is.string');
join = include('url.join');
append = include('url.append');
parse = include('xml.parse');
assign = include('object.assign');
configHttp = include('config::http');
            http = config('http');
            __first_executed_1534473867465__ = true ;
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

exports['src::http.methods.get'] = (() =>{
    let parse;
    
    
    
    let __first_executed_1534473867465__ = false ;
    
    
    function main(uri,params){

        

return require('request-promise')(parse(uri , 'get' , params)) ;
    }
    return function(uri,params){
        
        if(!__first_executed_1534473867465__){
            parse = include('http.params.parse');
            
            __first_executed_1534473867465__ = true ;
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

exports['src::http.methods.post'] = (() =>{
    let parse;
    
    
    
    let __first_executed_1534473867465__ = false ;
    
    
    function main(uri,params){

        

return require('request-promise')(parse(uri , 'post' , params)) ;
    }
    return function(uri,params){
        
        if(!__first_executed_1534473867465__){
            parse = include('http.params.parse');
            
            __first_executed_1534473867465__ = true ;
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

exports['src::http.methods.put'] = (() =>{
    let parse;
    
    
    
    let __first_executed_1534473867465__ = false ;
    
    
    function main(uri,params){

        

return require('request-promise')(parse(uri , 'put' , params)) ;
    }
    return function(uri,params){
        
        if(!__first_executed_1534473867465__){
            parse = include('http.params.parse');
            
            __first_executed_1534473867465__ = true ;
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

exports['src::http.methods.delete'] = (() =>{
    let parse;
    
    
    
    let __first_executed_1534473867465__ = false ;
    
    
    function main(uri,params){

        

return require('request-promise')(parse(uri , 'delete' , params)) ;
    }
    return function(uri,params){
        
        if(!__first_executed_1534473867465__){
            parse = include('http.params.parse');
            
            __first_executed_1534473867465__ = true ;
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
                    return include('http.methods.get').apply(this , arguments) ;
                }static post(){
                    return include('http.methods.post').apply(this , arguments) ;
                }static put(){
                    return include('http.methods.put').apply(this , arguments) ;
                }static delete(){
                    return include('http.methods.delete').apply(this , arguments) ;
                }
        };
        

    return Main ;

})() ;

exports['src::connection.message.is'] = (() =>{
    let isObject;
    
    
    
    let __first_executed_1534473867466__ = false ;
    
    
    function main(data){

        

if(isObject(data)){

    return data.hasOwnProperty('id') && data.hasOwnProperty('action') ;
}

return false ;
    }
    return function(data){
        
        if(!__first_executed_1534473867466__){
            isObject = include('is.object.simple');
            
            __first_executed_1534473867466__ = true ;
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

exports['src::connection.message.is.reply'] = (() =>{
    let is;
    
    
    
    let __first_executed_1534473867466__ = false ;
    
    
    function main(message){

        

return is(message) && message.hasOwnProperty('reply') ;
    }
    return function(message){
        
        if(!__first_executed_1534473867466__){
            is = include('connection.message.is');
            
            __first_executed_1534473867466__ = true ;
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

exports['src::connection.message.reply.result'] = (() =>{
    
    
    
    
    let __first_executed_1534473867466__ = false ;
    
    
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

exports['src::connection.sender.send'] = (() =>{
    let isReply,isReplyTo,result;
    
    
    
    let __first_executed_1534473867466__ = false ;
    
    
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
        
        if(!__first_executed_1534473867466__){
            isReply = include('connection.message.is.reply');
isReplyTo = include('connection.message.is.reply.to');
result = include('connection.message.reply.result');
            
            __first_executed_1534473867466__ = true ;
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

exports['src::connection.sender.send.window'] = (() =>{
    
    
    
    
    let __first_executed_1534473867466__ = false ;
    
    
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
    
    
    
    
    let __first_executed_1534473867466__ = false ;
    
    
    

let count = 0 ;

function main(){

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
    let send,connectionSenderSendWindow,package;
    
    
    
    let __first_executed_1534473867466__ = false ;
    
    
    function main(window,action,data){

        

return send(window , 'connection.sender.send.window' , package(action , data)) ;
    }
    return function(window,action,data){
        
        if(!__first_executed_1534473867466__){
            send = include('connection.sender.send');
connectionSenderSendWindow = include('connection.sender.send.window');
package = include('connection.message.package');
            
            __first_executed_1534473867466__ = true ;
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

exports['src::connection.message.is.main'] = (() =>{
    let is;
    
    
    
    let __first_executed_1534473867467__ = false ;
    
    
    function main(message){

        

return is(message) && !message.hasOwnProperty('reply') ;
    }
    return function(message){
        
        if(!__first_executed_1534473867467__){
            is = include('connection.message.is');
            
            __first_executed_1534473867467__ = true ;
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
    
    
    
    
    let __first_executed_1534473867467__ = false ;
    
    
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

exports['src::function.empty'] = (() =>{
    
    
    
    
    let __first_executed_1534473867467__ = false ;
    
    
    

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

exports['src::connection.receiver.receive'] = (() =>{
    let isMain,reply,isString,isFunction,emptyFn;
    
    
    
    let __first_executed_1534473867467__ = false ;
    
    
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
        
        if(!__first_executed_1534473867467__){
            isMain = include('connection.message.is.main');
reply = include('connection.message.reply');
isString = include('is.string');
isFunction = include('is.function');
emptyFn = include('function.empty');
            
            __first_executed_1534473867467__ = true ;
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

exports['src::connection.receiver.receive.window'] = (() =>{
    
    
    
    
    let __first_executed_1534473867467__ = false ;
    
    
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

exports['src::connection.receiver.reply.window'] = (() =>{
    
    
    
    
    let __first_executed_1534473867467__ = false ;
    
    
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
    let receive,connectionReceiverReceiveWindow,connectionReceiverReplyWindow;
    
    
    
    let __first_executed_1534473867467__ = false ;
    
    
    function main(window,actionFn){

        

receive(window , 'connection.receiver.receive.window' , 'connection.receiver.reply.window' , actionFn) ;
    }
    return function(window,actionFn){
        
        if(!__first_executed_1534473867467__){
            receive = include('connection.receiver.receive');
connectionReceiverReceiveWindow = include('connection.receiver.receive.window');
connectionReceiverReplyWindow = include('connection.receiver.reply.window');
            
            __first_executed_1534473867467__ = true ;
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


exports['src::browser.setAnimationFrame'] = include('src::browser.animationFrame.set') ;
