
/**
 * 
 * 创建数组代理
 * 
 * @import create from .create scoped
 * 
 * @import save from .save scoped
 * 
 * @import is.number
 * 
 * @param {array} data 代理的数组
 * 
 * @return {mixed} 代理后的数组 
 * 
 */

 

function main(data){

    let {
        length:len
    } = data ;
    
    for(let i = 0 ; i < len ; i ++){

        data[i] = create(data[i]) ;
    }

    rewrite(data , 'push') ;

    rewrite(data , 'pop') ;

    rewrite(data , 'unshift') ;

    rewrite(data , 'shift') ;

    return new Proxy(data , {
    
       set(data , index , value){
    
            if(isNumber(index) && data.__ZBEE_SET_LOCKED__ !== true){
    
                data[index] = create(value , true) ;
    
                save() ;
            
            }else{
    
                data[index] = value ;
            }
    
           return true ;
       }
    
    }) ;
}

function rewrite(data , method){

    data[method] = function (...values){

        let me = this ;

        me.__ZBEE_SET_LOCKED__ = true ;

        Array.prototype[method].apply(me , values) ;

        me.__ZBEE_SET_LOCKED__ = false ;

        save() ;

    } ;
}