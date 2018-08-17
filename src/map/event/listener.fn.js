/**
 * 
 * 基于事件机制作用域实现一个侦听函数公共管理模块
 * 
 * @import remove from array.removeByIndex
 * 
 * @once
 * 
 */

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