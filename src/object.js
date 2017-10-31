const {
    empty:is_empty,
    object:is_object,
    iterable:is_iterable,
    number:is_number
} = require('./is'),
{
    decode,
    encode
} = require('./object/key');

exports.get = (data , key) =>{

    if(is_empty(key) || key === '.'){
    
        return data ;
    }

    if(data.hasOwnProperty(key)){

        return data[key] ;
    }
        
    let keys = key.split('.') ;
    
    key = decode(keys[keys.length - 1]) ;

    keys.pop() ;
    
    let value = data;
 
    for(let key of keys){

        value = value[decode(key)] ;
    
        if(!is_object(value) && !is_iterable(value)){
    
            return ;
        }
    
    }
    
    return value[key] ;
}

exports.set = (data , key , value , isCover = true) =>{

    if(is_empty(key) || key === '.'){
        
        return data;
    }

    if(data.hasOwnProperty(key)){

        data[key] = value ;

        return data ;
    }
        
    let keys = key.split('.') ;
    
    key = decode(keys[keys.length - 1]) ;
    
    keys.pop() ;
    
    let target = data,
        prevTarget,
        prevKey;
    
    for(let key of keys){

        key = decode(key) ;

        if(!is_object(target) && !is_iterable(target)){
    
            if(is_number(key)){

                target = prevTarget[prevKey] = [] ;
            
            }else{

                target = prevTarget[prevKey] = {} ;
            }
        }

        prevTarget = target ;
    
        target = target[key] ;

        prevKey = key ;
    }

    if(!is_object(target) && !is_iterable(target)){

        if(is_number(key)){

            target = prevTarget[prevKey] = [] ;
        
        }else{

            target = prevTarget[prevKey] = {} ;
        }
    }

    if(isCover === false && target.hasOwnProperty(key)){

        return data ;
    }

    target[key] = value;

    return data ;
}

function get_values(data , iterableByValue = false , rootKey = ''){

    const {
        assign
    } = Object ;

    if(is_object(data)){
        
        let keys = Object.keys(data),
            result = {};

        for(let key of keys){

            assign(result , get_values(data[key] , iterableByValue , `${rootKey}${encode(key)}.`)) ;
        }

        return result ;

    }
    
    if(iterableByValue && is_iterable(data)){

        let len = data.length,
            result = {};

        for(let i = 0 ; i < len ; i ++){

            assign(result , get_values(data[i] , iterableByValue , `${rootKey}${i}.`)) ;
        }

        return result ;
    }

    rootKey = rootKey.replace(/\.$/ , '') ;

    if(rootKey === ''){

        return {} ;
    }

    return {
        [rootKey]:data
    } ;
}

function get_keys(data , iterableByValue = false , rootKey = ''){

    if(is_object(data)){

        let keys = Object.keys(data),
            result = [];

        for(let key of keys){

            result.push(...get_keys(data[key] , iterableByValue , `${rootKey}${encode(key)}.`)) ;
        }

        return result ;

    }
    
    if(iterableByValue && is_iterable(data)){

        let len = data.length,
            result = [];

        for(let i = 0 ; i < len ; i ++){

            result.push(...get_keys(data[i] , iterableByValue , `${rootKey}${i}.`)) ;
        }

        return result ;
    }

    rootKey = rootKey.replace(/\.$/ , '') ;

    if(rootKey === ''){

        return [] ;
    }

    return [
        rootKey
    ] ;
}

exports.keys = get_keys ;

exports.values = get_values ;

exports.assign = (dest , source , isCover) =>{

    let data = get_values(source),
        {
            set
        } = exports,
        keys = Object.keys(data);

    for(let key of keys){

        set(dest , key , data[key] , isCover) ;
    }

    return dest ;
}

exports.clone = (target , count = 1) =>{

    let source = JSON.stringify(target),
        result = [];

    for(let i = 0 ; i < count ; i ++){

        result.push(source) ;
    }

    return JSON.parse(`[${result.join(',')}]`) ;
}

exports.defineProperties = (target , properties) =>{

    let names = Object.keys(properties) ;

    for(let name of names){

        processPropertyConfig(target , name , properties[name]) ;
    }

    Object.defineProperties(target , properties) ;
}

exports.defineProperty = (target , name , config) =>{

    processPropertyConfig(target , name , config) ;

    Object.defineProperty(target , name , config) ;
}

function processPropertyConfig(target , name , config){

    if(config.once === true){

        let originGet = config.get ;
        
        if(originGet){
    
            config.get = () =>{
    
                let privateName = `__${name}__` ;
    
                if(!target.hasOwnProperty(privateName)){
    
                    target[privateName] = originGet.call(target) ;
    
                }
    
                return target[privateName] ;
            }
        }
    }

    delete config.once ;
}