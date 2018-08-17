


exports['src::environment.name'] = (() =>{
    
    
    
    
    let __once_1534494169109_value__,
        __once_1534494169109_locked__ = false;
    
    let __first_executed_1534494169109__ = false ;
    
    
    function main(){

        

const {
    toString
} = Object.prototype ;

if(typeof window === 'object' && toString.call(window) === '[object Window]' && typeof document === 'object' && toString.call(document) === '[object HTMLDocument]'){

    return 'browser' ;
}

const {
    env
} = process ;

if(env['ZBEE-RUNTIME-ENVIRONMENT'] === 'yes'){

    return 'zbee' ;
}

return 'node' ;
    }
    return function(){
        
        
        if(__once_1534494169109_locked__){

            return __once_1534494169109_value__ ;

        }

        __once_1534494169109_locked__ = true ;
        
        return __once_1534494169109_value__ =  main.call((function(){

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

exports['src::fork.path'] = (() =>{
    let getName;
    
    
    
    let __once_1534494169110_value__,
        __once_1534494169110_locked__ = false;
    
    let __first_executed_1534494169110__ = false ;
    
    
    function main(){

        

const {
    env
} = process,
{
    join
} = require('path');

switch(getName()){
    
    case 'zbee':

        return join(env['ZBEE-APPLICATION-ROOT-PATH'] , 'bin' , 'header.js') ;

        break ;

    case 'node':

        return __filename ;

        break ;

    default:

        return ;
};
    }
    return function(){
        
        if(!__first_executed_1534494169110__){
            getName = include('environment.name');
            
            __first_executed_1534494169110__ = true ;
        }
        
        
        if(__once_1534494169110_locked__){

            return __once_1534494169110_value__ ;

        }

        __once_1534494169110_locked__ = true ;
        
        return __once_1534494169110_value__ =  main.call((function(){

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

exports['src::fork.process'] = (() =>{
    let getPath;
    
    
    
    let __first_executed_1534494169110__ = false ;
    
    
    function main(name,...args){

        

const {
    fork
} = require('child_process') ;

return new Promise((resolve , reject) =>{

    fork(getPath() , {
        env:{
            'ZBEE-APPLICATION-ROOT-PATH':env['ZBEE-APPLICATION-ROOT-PATH'],
            'ZBEE-ENTRY-NAME':name,
            'ZBEE-ENTRY-ARGS':JSON.stringify(args)
        }
    }).on('message' , resolve).on('error' , reject) ;

}) ;
    }
    return function(name,...args){
        
        if(!__first_executed_1534494169110__){
            getPath = include('fork.path');
            
            __first_executed_1534494169110__ = true ;
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

        }).call(this) , name,...args) ;
    }
    

})() ;

exports['src::fork.worker'] = (() =>{
    let getPath;
    
    
    
    let __first_executed_1534494169112__ = false ;
    
    
    function main(name){

        

const {
    fork,
    setupMaster,
    isMaster
} = require('cluster'),
{
    env
} = process;

if(isMaster){

    setupMaster({
        exec:getPath()
    }) ;
    
    return fork({
        'ZBEE-APPLICATION-ROOT-PATH':env['ZBEE-APPLICATION-ROOT-PATH'],
        'ZBEE-ENTRY-NAME':name
    }) ;
}
    }
    return function(name){
        
        if(!__first_executed_1534494169112__){
            getPath = include('fork.path');
            
            __first_executed_1534494169112__ = true ;
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

