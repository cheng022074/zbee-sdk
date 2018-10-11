


exports['src::os.name'] = (() =>{
    
    
    
    
    let __once_1539242100689_value__,
        __once_1539242100689_locked__ = false;
    
    
    

    
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
        
        
        if(__once_1539242100689_locked__){

            return __once_1539242100689_value__ ;

        }

        __once_1539242100689_locked__ = true ;
        
        return __once_1539242100689_value__ =  main.call((function(){

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

exports['src::is.pc'] = (() =>{
    let name;
    
    
    
    let __once_1539242100689_value__,
        __once_1539242100689_locked__ = false;
    
    
    
    let __first_executed_1539242100689__ = false ;
    

    
    function main(){

        

switch(name()){

    case 'MacOS':
    case 'Windows':
    case 'Linux':

        return true ;
}

return false ;
    }
    return function(){
        
        if(!__first_executed_1539242100689__){
            name = include('os.name');
            
            __first_executed_1539242100689__ = true ;
        }
        
        
        if(__once_1539242100689_locked__){

            return __once_1539242100689_value__ ;

        }

        __once_1539242100689_locked__ = true ;
        
        return __once_1539242100689_value__ =  main.call((function(){

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

