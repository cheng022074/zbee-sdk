


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

exports['src::browser.event.gesture.tap.double.properties.handleEvents'] = (() =>{
    
    
    
    
    let __once_1534473867949_value__,
        __once_1534473867949_locked__ = false;
    
    let __first_executed_1534473867949__ = false ;
    
    
    function main(){

        

return [
    'touch:singletap',
    'touch:doubletap'
] ;
    }
    return function(){
        
        
        if(__once_1534473867949_locked__){

            return __once_1534473867949_value__ ;

        }

        __once_1534473867949_locked__ = true ;
        
        return __once_1534473867949_value__ =  main.call((function(){

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

exports['config::gesture.doubletap'] = {
    "moveDistance":8,
    "maxDuration": 300,
    "tapDistance": 24
} ;

exports['src::browser.event.gesture.tap.double.methods.onEnd'] = (() =>{
    let disabled,dispatch,getEvent,getDistance,get,set,scale,configGestureDoubletap;
    let maxDuration,tapDistance;
    
    
    let __first_executed_1534473867949__ = false ;
    
    
    function main(e){

        

e.preventDefault() ;



let el = this,
    event = getEvent(e),
    time = Date.now(),
    target = event.target,
    lastTapTime = get(el , 'doubletap:lastTapTime');

set(el , 'doubletap:lastTapTime' , time) ;

set(el , 'doubletap:lastTarget' , target) ;

if(lastTapTime){

    let duration = time - lastTapTime ;

    if(duration <= maxDuration){

        let distance = Math.round(Math.abs(getDistance({
            x:event.pageX,
            y:event.pageY
        } , get(el , 'doubletap:startPoint')) * scale())) ;

        if(distance <= tapDistance){

            if(target !== get(el , 'doubletap:lastTarget')){

                disabled(el) ;

                return ;
            }

            dispatch(el , 'touch:doubletap' , {
                browserEvent:e,
                event:getEvent(e)
            }) ;

            disabled(el) ;

            return ;
        }
    }
}

if(time - get(el , 'doubletap:startTime') > maxDuration){

    dispatch(el , 'touch:singletap' , {
        browserEvent:e,
        event:getEvent(e)
    }) ;

    disabled(el) ;

}else{

    set(el , 'doubletap:singleTapTimer' , setTimeout(() =>{

        dispatch(el , 'touch:singletap' , {
            browserEvent:e,
            event:getEvent(e)
        }) ;

        disabled(el) ;

    } , maxDuration)) ;
}
    }
    return function(e){
        
        if(!__first_executed_1534473867949__){
            disabled = include('browser.event.gesture.tap.double.methods.disabled');
dispatch = include('browser.event.dispatch');
getEvent = include('browser.event.pointer');
getDistance = include('math.point.distance');
get = include('object.data.get');
set = include('object.data.set');
scale = include('browser.scale');
configGestureDoubletap = include('config::gesture.doubletap');
configGestureDoubletap = include('config::gesture.doubletap');
            maxDuration = config('gesture.doubletap' , 'maxDuration');
tapDistance = config('gesture.doubletap' , 'tapDistance');
            __first_executed_1534473867949__ = true ;
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

exports['src::browser.event.gesture.tap.double.methods.disabled'] = (() =>{
    let removeEventListener,onMove,onEnd,getMoveEventName,getUpEventName,get,remove;
    
    
    
    let __first_executed_1534473867949__ = false ;
    
    
    function main(el){

        

removeEventListener(el , getMoveEventName() , onMove) ;

removeEventListener(el , getUpEventName() , onEnd) ;

clearTimeout(get(el , 'doubletap:singleTapTimer')) ;

remove(el , 'doubletap:singleTapTimer') ;

remove(el , 'doubletap:startTime') ;

remove(el , 'doubletap:lastTapTime') ;

remove(el , 'doubletap:lastStartPoint') ;

remove(el , 'doubletap:startPoint') ;

remove(el , 'doubletap:singleTapTimer') ;
    }
    return function(el){
        
        if(!__first_executed_1534473867949__){
            removeEventListener = include('browser.html.element.removeWindowEventListener');
onMove = include('browser.event.gesture.tap.double.methods.onMove');
onEnd = include('browser.event.gesture.tap.double.methods.onEnd');
getMoveEventName = include('browser.event.pointer.move');
getUpEventName = include('browser.event.pointer.up');
get = include('object.data.get');
remove = include('object.data.remove');
            
            __first_executed_1534473867949__ = true ;
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

exports['src::browser.event.gesture.tap.double.methods.onMove'] = (() =>{
    let getEvent,getDistance,disabled,scale,get,configGestureDoubletap;
    let moveDistance;
    
    
    let __first_executed_1534473867949__ = false ;
    
    
    function main(e){

        

e.preventDefault() ;

let el = this,
    event = getEvent(e);

if(Math.round(Math.abs(getDistance({
    x:event.pageX,
    y:event.pageY
} , get(el , 'doubletap:lastStartPoint')) * scale())) >= moveDistance){
    
    disabled(el) ;
}
    }
    return function(e){
        
        if(!__first_executed_1534473867949__){
            getEvent = include('browser.event.pointer');
getDistance = include('math.point.distance');
disabled = include('browser.event.gesture.tap.double.methods.disabled');
scale = include('browser.scale');
get = include('object.data.get');
configGestureDoubletap = include('config::gesture.doubletap');
            moveDistance = config('gesture.doubletap' , 'moveDistance');
            __first_executed_1534473867949__ = true ;
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

exports['src::browser.event.gesture.tap.double.methods.enabled'] = (() =>{
    let addEventListener,onMove,onEnd,getMoveEventName,getUpEventName;
    
    
    
    let __first_executed_1534473867949__ = false ;
    
    
    function main(el){

        

addEventListener(el , getMoveEventName() , onMove) ;

addEventListener(el , getUpEventName() , onEnd) ;
    }
    return function(el){
        
        if(!__first_executed_1534473867949__){
            addEventListener = include('browser.html.element.addWindowEventListener');
onMove = include('browser.event.gesture.tap.double.methods.onMove');
onEnd = include('browser.event.gesture.tap.double.methods.onEnd');
getMoveEventName = include('browser.event.pointer.move');
getUpEventName = include('browser.event.pointer.up');
            
            __first_executed_1534473867949__ = true ;
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

exports['src::browser.event.gesture.tap.double.methods.onStart'] = (() =>{
    let getEvent,enabled,set,get,has;
    
    
    
    let __first_executed_1534473867949__ = false ;
    
    
    function main(e){

        

e.preventDefault() ;

let event = getEvent(e , true) ;

if(!event){

    return ;
}

let el = this,
    point = {
        x:event.pageX,
        y:event.pageY
    };

set(el , 'doubletap:lastStartPoint' , point) ;

if(!has(el , 'doubletap:startPoint')){

    set(el , 'doubletap:startPoint' , point) ;
}

set(el , 'doubletap:startTime' , Date.now()) ;

clearTimeout(get(el , 'doubletap:singleTapTimer')) ;

enabled(el) ;
    }
    return function(e){
        
        if(!__first_executed_1534473867949__){
            getEvent = include('browser.event.pointer');
enabled = include('browser.event.gesture.tap.double.methods.enabled');
set = include('object.data.set');
get = include('object.data.get');
has = include('object.data.has');
            
            __first_executed_1534473867949__ = true ;
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

exports['src::browser.event.gesture.tap.double.methods.install'] = (() =>{
    let onStart,getEventName;
    
    
    
    let __first_executed_1534473867949__ = false ;
    
    
    function main(el){

        

el.addEventListener(getEventName() , onStart) ;
    }
    return function(el){
        
        if(!__first_executed_1534473867949__){
            onStart = include('browser.event.gesture.tap.double.methods.onStart');
getEventName = include('browser.event.pointer.down');
            
            __first_executed_1534473867949__ = true ;
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

exports['src::browser.event.gesture.tap.double.methods.uninstall'] = (() =>{
    let onStart,getEventName;
    
    
    
    let __first_executed_1534473867949__ = false ;
    
    
    function main(el){

        

el.removeEventListener(getEventName() , onStart) ;
    }
    return function(el){
        
        if(!__first_executed_1534473867949__){
            onStart = include('browser.event.gesture.tap.double.methods.onStart');
getEventName = include('browser.event.pointer.down');
            
            __first_executed_1534473867949__ = true ;
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

exports['src::browser.event.gesture.tap.double'] = (() =>{

    
        class Main{
            static  get handledEvents (){
                    return include('browser.event.gesture.tap.double.properties.handleEvents').call(this) ;
                }
static install(){
                    return include('browser.event.gesture.tap.double.methods.install').apply(this , arguments) ;
                }static uninstall(){
                    return include('browser.event.gesture.tap.double.methods.uninstall').apply(this , arguments) ;
                }
        };
        

    return Main ;

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

exports['src::browser.html.element.getXY'] = (() =>{
    
    
    
    
    let __first_executed_1534473867950__ = false ;
    
    
    function main(el){

        

const 
{
    round
} = Math ;

let 
x = 0,
y = 0,
{
    body
} = document;

if(el !== document && el !== body){
   
    try{

        let bodyRect = body.getBoundingClientRect(),
            rect = el.getBoundingClientRect();

        x = rect.left - bodyRect.left;
        y = rect.top - bodyRect.top;
    
    }catch(ex){

    }
}

return {
    x:round(x), 
    y:round(y)
};
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

exports['src::browser.html.element.getStyle'] = (() =>{
    let isArray,getStyle;
    
    
    
    let __first_executed_1534473867950__ = false ;
    
    
    function main(el,prop,inline){

        

if(isArray(prop)){

    let values = {},
        props = prop;
    
    for(let prop of props){

        values[prop] = getStyle(el , prop , inline) ;
    }

    return values ;

}

if(inline){

    return el.style.getPropertyValue(prop);

}else{

    style = window.getComputedStyle(el , null);

    if(style){

        return style[prop] ;

    }else{

        return getStyle(el , prop , true) ;
    }
}
    }
    return function(el,prop,inline = false){
        
        if(!__first_executed_1534473867950__){
            isArray = include('is.array');
getStyle = include('browser.html.element.getStyle');
            
            __first_executed_1534473867950__ = true ;
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

        }).call(this) , el,prop,inline) ;
    }
    

})() ;

exports['src::is.number'] = (() =>{
    let isType;
    
    
    
    let __first_executed_1534473867950__ = false ;
    
    
    function main(data){

        

return isType(data , 'number') && isFinite(data);
    }
    return function(data){
        
        if(!__first_executed_1534473867950__){
            isType = include('is.type');
            
            __first_executed_1534473867950__ = true ;
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

exports['src::browser.html.element.translateXY'] = (() =>{
    let getStyle,getXY,isNumber;
    
    
    
    let __first_executed_1534473867950__ = false ;
    
    
    function main(el,x,y){

        

let 
{
    position,
    left,
    top
} = getStyle(el , [
        'position',
        'top',
        'left'
    ]),
isRelative = position === 'relative',
{
    x:orignX,
    y:orginY
} = getXY(el);

left = parseFloat(left) ;

top = parseFloat(top) ;
 
if(isNaN(left)){
    
    left = isRelative ? 0 : el.offsetLeft;
}

if(isNaN(top)){

    top = isRelative ? 0 : el.offsetTop;
}

return {
    x: x - orignX + left,
    y: y - orginY + top
};
    }
    return function(el,x,y){
        
        if(!__first_executed_1534473867950__){
            getStyle = include('browser.html.element.getStyle');
getXY = include('browser.html.element.getXY');
isNumber = include('is.number');
            
            __first_executed_1534473867950__ = true ;
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

        }).call(this) , el,x,y) ;
    }
    

})() ;

exports['src::browser.html.element.translatePoints'] = (() =>{
    let translateXY;
    
    
    
    let __first_executed_1534473867950__ = false ;
    
    
    function main(el,x,y){

        

let {
    x:left,
    y:top
} = translateXY(el , x , y) ;

return {
    left,
    top
} ;
    }
    return function(el,x,y){
        
        if(!__first_executed_1534473867950__){
            translateXY = include('browser.html.element.translateXY');
            
            __first_executed_1534473867950__ = true ;
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

        }).call(this) , el,x,y) ;
    }
    

})() ;

exports['src::browser.html.element.isStyle'] = (() =>{
    let getStyle;
    
    
    
    let __first_executed_1534473867950__ = false ;
    
    
    function main(el,prop,value){

        

return getStyle(el , prop) === value ;
    }
    return function(el,prop,value){
        
        if(!__first_executed_1534473867950__){
            getStyle = include('browser.html.element.getStyle');
            
            __first_executed_1534473867950__ = true ;
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

        }).call(this) , el,prop,value) ;
    }
    

})() ;

exports['src::browser.html.element.setStyle'] = (() =>{
    let isString,setStyle;
    
    
    
    let __first_executed_1534473867950__ = false ;
    
    
    function main(el,prop,value){

        

if(isString(prop)){

    el.style.setProperty(prop , value) ;

}else{

    let names = Object.keys(prop) ;

    for(let name of names){

        setStyle(el , name , prop[name]) ;
    }
}
    }
    return function(el,prop,value){
        
        if(!__first_executed_1534473867950__){
            isString = include('is.string');
setStyle = include('browser.html.element.setStyle');
            
            __first_executed_1534473867950__ = true ;
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

        }).call(this) , el,prop,value) ;
    }
    

})() ;

exports['src::is.defined'] = (() =>{
    let isType;
    
    
    
    let __first_executed_1534473867740__ = false ;
    
    
    function main(data){

        

return !isType(data , 'undefined') ;
    }
    return function(data){
        
        if(!__first_executed_1534473867740__){
            isType = include('is.type');
            
            __first_executed_1534473867740__ = true ;
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

exports['src::browser.html.element.position'] = (() =>{
    let isStyle,setStyle,isDefined,setXY;
    
    
    
    let __first_executed_1534473867950__ = false ;
    
    
    function main(el,pos,zIndex,x,y){

        

if(el !== document && el !== document.body){

    if(!pos && isStyle(el , 'position' , 'static')){
    
        setStyle(el , 'position' , 'relative') ;
    
    }else if(pos){

        setStyle(el , 'position' , pos) ;
    }

    if(isDefined(zIndex)){

        setStyle(el , 'zindex' , zIndex) ;
    }

    if(x || y){

        setXY(el , x || false , y || false) ;
    }
}
    }
    return function(el,pos,zIndex,x,y){
        
        if(!__first_executed_1534473867950__){
            isStyle = include('browser.html.element.isStyle');
setStyle = include('browser.html.element.setStyle');
isDefined = include('is.defined');
setXY = include('browser.html.element.setXY');
            
            __first_executed_1534473867950__ = true ;
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

        }).call(this) , el,pos,zIndex,x,y) ;
    }
    

})() ;

exports['src::browser.html.element.setXY'] = (() =>{
    let translatePoints,position;
    
    
    
    let __first_executed_1534473867950__ = false ;
    
    
    function main(el,x,y){

        

let 
{
    top,
    left
} = translatePoints(el , x , y),
{
    style
} = el,
pos;

position(el) ;

style.top = `${top}px` ;

style.left = `${left}px` ;
    }
    return function(el,x,y){
        
        if(!__first_executed_1534473867950__){
            translatePoints = include('browser.html.element.translatePoints');
position = include('browser.html.element.position');
            
            __first_executed_1534473867950__ = true ;
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

        }).call(this) , el,x,y) ;
    }
    

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

exports['src::browser.html.element.style.get'] = (() =>{
    
    
    
    
    let __first_executed_1534473867950__ = false ;
    
    
    function main(el,prop){

        

let cs = window.getComputedStyle(el , '') ;

if(cs){

   return cs[prop] ;
}
    }
    return function(el,prop){
        
        
        return  main.call((function(){

            let me = this,
                target;

            if(typeof global !== 'undefined'){

                target = global ;
            
            }else{

                target = window ;
            }

            return me === target ? main : me ;

        }).call(this) , el,prop) ;
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

exports['src::array.from'] = (() =>{
    let isEmpty,isString;
    
    
    
    let __first_executed_1534473867951__ = false ;
    
    
    function main(data){

        

if(isEmpty(data)){

    return [];
}

if (data && data.length !== undefined && !isString(data)) {

    return Array.from(data);

}

return [
    data
];
    }
    return function(data){
        
        if(!__first_executed_1534473867951__){
            isEmpty = include('is.empty');
isString = include('is.string');
            
            __first_executed_1534473867951__ = true ;
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

exports['src::vue.slot.children'] = (() =>{
    let from;
    
    
    
    let __first_executed_1534473867951__ = false ;
    
    
    function main(vue){

        

let children = from(vue.$slots.default),
    result = [];

for(let node of children){

    if(node.tag){

        result.push(node) ;
    }
}

return result ;
    }
    return function(vue){
        
        if(!__first_executed_1534473867951__){
            from = include('array.from');
            
            __first_executed_1534473867951__ = true ;
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

        }).call(this) , vue) ;
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

exports['src::vue.createElement.config'] = (() =>{
    let get,split;
    
    
    
    let __first_executed_1534473867951__ = false ;
    
    
    function main(node,property,isSelf){

        

let attrs = get(node , 'data.attrs') || {};

if(attrs.hasOwnProperty(property)){

   let config = attrs[property],
       keys = Object.keys(config),
       classes = {},
       props = {};

   for(let key of keys){

       switch(key){

           case 'class':

               let values = split(config[key] , /\s/) ;

               for(let value of values){

                   classes[value] = true ;
               }

               break ;

           case 'self':

               isSelf = config[key] ;

               break ;

           default:

               props[key] = config[key] ;
       }
   }

   delete attrs[property] ;

   return {
       isSelf,
       config:{
           'class':classes,
           props
       }
   } ;
}

return {
   isSelf,
   config:{}
} ;
    }
    return function(node,property,isSelf = false){
        
        if(!__first_executed_1534473867951__){
            get = include('object.get');
split = include('string.split');
            
            __first_executed_1534473867951__ = true ;
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

        }).call(this) , node,property,isSelf) ;
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

exports['src::browser.html.element.getWidth'] = (() =>{
    let isStyle;
    
    
    
    let __first_executed_1534473867951__ = false ;
    
    
    function main(el){

        

if(isStyle(el , 'display' , 'none')){

    return 0 ;
}

try{

    let {
        left,
        right
    } = el.getBoundingClientRect() ;

    return right - left ;

}catch(err){


}

return el.offsetWidth ;
    }
    return function(el){
        
        if(!__first_executed_1534473867951__){
            isStyle = include('browser.html.element.isStyle');
            
            __first_executed_1534473867951__ = true ;
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

exports['src::browser.html.element.getHeight'] = (() =>{
    let isStyle;
    
    
    
    let __first_executed_1534473867951__ = false ;
    
    
    function main(el){

        


if(isStyle(el , 'display' , 'none')){

    return 0 ;
}

if(el === document.body){

    return document.body.clientHeight ;
}

try{

    let {
        top,
        bottom
    } = el.getBoundingClientRect() ;

    return top - bottom ;

}catch(err){


}

return el.offsetHeight ;
    }
    return function(el){
        
        if(!__first_executed_1534473867951__){
            isStyle = include('browser.html.element.isStyle');
            
            __first_executed_1534473867951__ = true ;
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

exports['src::browser.html.element.getSize'] = (() =>{
    let getWidth,getHeight;
    
    
    
    let __first_executed_1534473867951__ = false ;
    
    
    function main(el){

        

return{
    width:getWidth(el),
    height:getHeight(el)
} ;
    }
    return function(el){
        
        if(!__first_executed_1534473867951__){
            getWidth = include('browser.html.element.getWidth');
getHeight = include('browser.html.element.getHeight');
            
            __first_executed_1534473867951__ = true ;
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

exports['src::browser.html.element.box.page'] = (() =>{
    let getXY,getSize;
    
    
    
    let __first_executed_1534473867951__ = false ;
    
    
    function main(el){

        

let {
    x,
    y
} = getXY(el),
{
    width,
    height
} = getSize(el);


return {
    width,
    height,
    left:x,
    top:y,
    right:x + width,
    bottom:y + height
} ;
    }
    return function(el){
        
        if(!__first_executed_1534473867951__){
            getXY = include('browser.html.element.getXY');
getSize = include('browser.html.element.getSize');
            
            __first_executed_1534473867951__ = true ;
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

exports['src::object.equals'] = (() =>{
    let keys,get;
    
    
    
    let __first_executed_1534473867951__ = false ;
    
    
    function main(value1,value2){

        

let keys1 = keys(value1),
    keys2 = keys(value2) ;

if(keys1.length !== keys2.length){

    return false ;
}

for(let key of keys1){

    if(!keys2.includes(key) || get(value1 , key) !== get(value2 , key)){

        return false ;
    }
}

return true ;
    }
    return function(value1,value2){
        
        if(!__first_executed_1534473867951__){
            keys = include('object.keys');
get = include('object.get');
            
            __first_executed_1534473867951__ = true ;
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

        }).call(this) , value1,value2) ;
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

