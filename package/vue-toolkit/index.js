


exports['css::var.reset'] = `$var-reset-font-family:"Helvetica Neue", HelveticaNeue, "Helvetica-Neue", Helvetica, "BBAlpha Sans", sans-serif !default;`


exports['css::reset'] = `html, body {
    font-family: $var-reset-font-family;
    font-weight: normal;
    text-size-adjust: none;
    margin: 0;
    cursor: default;
}

body, div, dl, dt, dd, ul, ol, li, h1, h2, h3,
h4, h5, h6, pre, code, form, fieldset, legend,
input, textarea, p, blockquote, th, td {
    margin: 0;
    padding: 0;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

fieldset, img {
    border: 0;
}

address, caption, cite, code, dfn, em, strong, th, var {
    font-style: normal;
    font-weight: normal;
}

li {
    list-style: none;
}

caption, th {
    text-align: left;
}

h1, h2, h3, h4, h5, h6 {
    font-size: 100%;
    font-weight: normal;
}

q:before,
q:after {
    content: '';
}

abbr, acronym {
    border: 0;
    font-variant: normal;
}

sup {
    vertical-align: text-top;
}

sub {
    vertical-align: text-bottom;
}

input, textarea, select {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
}

*:focus {
    outline: none;
}

body.x-desktop {
    overflow: hidden;
}


*, *:after, *:before {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-touch-callout: none;
    -webkit-user-drag: none;
    user-select: none;
    touch-action: none;
}

input, textarea {
    user-select: text;
}`


exports['css::reset.viewport'] = `html,body {
    position: relative;
    width: 100%;
    height: 100%;
}`


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
    
    
    
    
    
    let __first_executed_1541121637347__ = false ;
    

    
    function main(data){

        

 return Array.isArray(data) ;
    }
    return function(data){
        
        if(!__first_executed_1541121637347__){
            isType = include('is.type');
            
            __first_executed_1541121637347__ = true ;
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
    
    
    
    
    
    let __first_executed_1541121637348__ = false ;
    

    
    function main(data,allowEmptyString){

        

return (data == null) || (!allowEmptyString ? data === '' : false) || (isArray(data) && data.length === 0);
    }
    return function(data,allowEmptyString = false){
        
        if(!__first_executed_1541121637348__){
            isArray = include('is.array');
            
            __first_executed_1541121637348__ = true ;
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
    
    
    
    
    
    let __first_executed_1541121637348__ = false ;
    

    
    function main(data){

        

return isType(data , 'string') ;
    }
    return function(data){
        
        if(!__first_executed_1541121637348__){
            isType = include('is.type');
            
            __first_executed_1541121637348__ = true ;
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
    
    
    
    
    
    let __first_executed_1541121637348__ = false ;
    

    
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
        
        if(!__first_executed_1541121637348__){
            isEmpty = include('is.empty');
isString = include('is.string');
            
            __first_executed_1541121637348__ = true ;
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


exports['src::path.string'] = (() =>{
    
    
    
    
    
    

    
    function main(path){

        

return path.replace(/\\/g , '\\\\') ;
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

