
/**
 * 
 * 多次返回的 Promise 封装
 * 
 * @class
 * 
 * 
 */

 function execute(field , data){

    let fns = this[`$${field}`];

    for(let fn of fns){

        data = fn(data) ;
    }
 }

 function apply(field , fn){

    let me = this ;

    me[`$${field}`].push(fn) ;

    return me ;
 }

 class main{

    constructor(fn){

        let me = this ;

        setTimeout(() => fn(data => execute.call(me , 'resolves' , data) , error => execute.call(me , 'rejects' , error)) , 0) ;

        me.$resolves = [] ;

        me.$rejects = [] ;
    }

    then(resolve){

        return apply.call(this , resolve) ;
    }

    catch(reject){

        return apply.call(this , reject) ;
    }
 }