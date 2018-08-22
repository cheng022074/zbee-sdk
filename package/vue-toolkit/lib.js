


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

exports['src::is.array'] = (() =>{
    let isType;
    
    
    
    
    
    let __first_executed_1534925206806__ = false ;
    

    
    function main(data){

        

 return Array.isArray(data) ;
    }
    return function(data){
        
        if(!__first_executed_1534925206806__){
            isType = include('is.type');
            
            __first_executed_1534925206806__ = true ;
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
    
    
    
    
    
    let __first_executed_1534925206806__ = false ;
    

    
    function main(data,allowEmptyString){

        

return (data == null) || (!allowEmptyString ? data === '' : false) || (isArray(data) && data.length === 0);
    }
    return function(data,allowEmptyString = false){
        
        if(!__first_executed_1534925206806__){
            isArray = include('is.array');
            
            __first_executed_1534925206806__ = true ;
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

exports['src::is.string'] = (() =>{
    let isType;
    
    
    
    
    
    let __first_executed_1534925206806__ = false ;
    

    
    function main(data){

        

return isType(data , 'string') ;
    }
    return function(data){
        
        if(!__first_executed_1534925206806__){
            isType = include('is.type');
            
            __first_executed_1534925206806__ = true ;
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

exports['src::array.from'] = (() =>{
    let isEmpty,isString;
    
    
    
    
    
    let __first_executed_1534925206807__ = false ;
    

    
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
        
        if(!__first_executed_1534925206807__){
            isEmpty = include('is.empty');
isString = include('is.string');
            
            __first_executed_1534925206807__ = true ;
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

