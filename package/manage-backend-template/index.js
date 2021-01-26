/* eslint-disable */

const innerExports = {} ;



export const include = (() =>{

    const nameRe = /^(\w+)\:{2}(.+?)$/,
          CODES = {};

    return name =>{

        if(CODES.hasOwnProperty(name)){

            return CODES[name] ;
        }

        let match = name.match(nameRe),
            folder,
            className;
    
        if(match){
    
            folder = match[1],
            className = match[2] ;
    
        }else{

            if(innerExports.hasOwnProperty(name)){

                return CODES[name] = innerExports[name] ;
            }
    
            folder = 'src',
            className = name ;
        }

        let fullName = `${folder}::${className}`,
            code = CODES[name] = innerExports[fullName] ;

        if(code === undefined && folder !== 'config'){

            throw new Error(`${fullName} 没有定义`) ;
        }

        return code ;
    } ;

})();

const config = (() =>{

    const {
        freeze:freeze2,
        isFrozen,
        keys
    } = Object ;

    function freeze(data){

        if (data && typeof data === 'object' && !isFrozen(data)){

            freeze2(data);

            let names = keys(data) ;

            for(let name of names){

                freeze(data[name]) ;
            }
        }

        return data;
    }

    const config = {};

    function get_config(target , key){

        if(key){
    
            if(target.hasOwnProperty(key)){
        
                return freeze(target[key]) ;
            }
        
            let names = key.split(/\./),
                prefix = '';
        
            for(let name of names){
        
                let key = `${prefix}${name}` ;
        
                if(target.hasOwnProperty(key)){
        
                    target = target[key] ;
        
                    prefix = '' ;
                
                }else{
        
                    prefix = `${key}.` ;
                }
            }

            if(prefix){
        
                return ;
            }
        }

        return freeze(target) ; 
    }

    return (name , key) =>{

        if(config.hasOwnProperty(name)){

            return get_config(config[name] , key) ;
        }

        return get_config(include(`config::${name}`)() , key) ;
    }

})();

export const override = (() =>{

    const nameRe = /^(\w+)\:{2}(.+?)$/ ;

    return (name , fn) =>{

        if(!nameRe.test(name)){

            name = `src::${name}` ;
        }

        if(typeof name === 'string' && typeof fn === 'function'){
    
            exports[name] = fn ;
        }
    } ;

})();

const mixins = ({
    extend,
    mixins
}) =>{

    let baseClass = extend || class {} ;

    if(mixins){

        for(let mixin of mixins){

            baseClass = mixin(baseClass) ;
        }
    }

    return baseClass ;
};




innerExports['src::function.buffer'] = (() =>{

                    let get;
    
                    let var_init_locked_1611566411927;
    
                    

                    function main(fn , {scope , buffer}){

        
/**
 * 
 * 实现懒执行模式函数
 * 
 * @import get from function.get
 * 
 * @param {mixed} fn 函数
 * 
 * @param {object} [config = {}] 函数配置
 * 
 * @param {mixed} [config.scope] 函数作用域
 * 
 * @param {mixed} [config.buffer = 0] 缓存时间
 * 
 * 
 */

let bufferId ;

return (...args) =>{

    if(bufferId){

        clearTimeout(bufferId) ;

        bufferId = null ;
    }

    bufferId = setTimeout(() => {

        get(fn , scope)(...args) ;

        bufferId = null ;

    } , buffer) ;
} ;

    }
    
                    return function(fn , {scope , buffer = 0} = {}){
    
                        
        if(!var_init_locked_1611566411927){

            get = include('src::function.get');

            var_init_locked_1611566411927 = true ;
        }
        
    
                        return main.call(this , fn , {scope , buffer}) ;
                    } ;
    
                })();

innerExports['src::is.type'] = (() =>{

                    
    
                    
    
                    

                    function main(data , type){

        /**
 * 
 * 对于 typeof 的简单封装
 * 
 * @param {mixed} data 检验数据
 * 
 * @param {string} type 检验数据类型
 * 
 * @return {boolean} 如果检验数据的数据类型与检验数据类型一致，则返回 true，否则返回 false 
 * 
 */

 return typeof data === type ;

    }
    
                    return function(data , type){
    
                        
    
                        return main.call(this , data , type) ;
                    } ;
    
                })();

innerExports['src::is.string'] = (() =>{

                    let isType;
    
                    let var_init_locked_1611566399143;
    
                    

                    function main(data){

        /**
 * 
 * 判定数据是否为字符串类型
 * 
 * @import is.type
 * 
 * @param {mixed} data 检验数据
 * 
 * @return {boolean} 如果给定值为字符串类型则返回 true , 否则返回 false 
 * 
 */

return isType(data , 'string') ;

    }
    
                    return function(data){
    
                        
        if(!var_init_locked_1611566399143){

            isType = include('src::is.type');

            var_init_locked_1611566399143 = true ;
        }
        
    
                        return main.call(this , data) ;
                    } ;
    
                })();

innerExports['src::is.function'] = (() =>{

                    let isType;
    
                    let var_init_locked_1611566399358;
    
                    

                    function main(data){

        /**
 * 
 * 判定数据是否为函数类型
 * 
 * @import is.type
 * 
 * @param {mixed} data 检验数据
 * 
 * @return {mixed} 如果给定值为函数类型则返回 true , 否则返回 false
 * 
 */

return isType(data , 'function') && !data.__ZBEE_IS_CLASS__;

    }
    
                    return function(data){
    
                        
        if(!var_init_locked_1611566399358){

            isType = include('src::is.type');

            var_init_locked_1611566399358 = true ;
        }
        
    
                        return main.call(this , data) ;
                    } ;
    
                })();

innerExports['src::function.empty'] = (() =>{

                    
    
                    
    
                    

                    /**
 * 
 * 返回一个空函数
 * 
 * @scoped
 * 
 */

const emptyFn = () =>{
} ;

function main(){

    return emptyFn ;
}
    
                    return function(){
    
                        
    
                        return main.call(this ) ;
                    } ;
    
                })();

innerExports['src::function.get'] = (() =>{

                    let isString,isFunction,empty;
    
                    let var_init_locked_1611566400053;
    
                    

                    function main(fn , scope){

        /**
 * 
 * 获得一个函数引用
 * 
 * @import is.string
 * 
 * @import is.function
 * 
 * @import empty from function.empty
 * 
 * @param {string | function} fn 函数描述
 * 
 * @param {mixed} [scope] 函数作用域
 * 
 * @return {function} 函数引用本身 
 * 
 */

if(isString(fn)){

    if(scope && fn in scope){

        fn = scope[fn] ;

    }else{

        try{

            fn = include(fn) ;
        
        }catch(err){


        }

        
    }
}

if(isFunction(fn)){

    if(scope){

        return fn.bind(scope) ;
    }

    return fn ;
}

return empty() ;

    }
    
                    return function(fn , scope){
    
                        
        if(!var_init_locked_1611566400053){

            isString = include('src::is.string');
isFunction = include('src::is.function');
empty = include('src::function.empty');

            var_init_locked_1611566400053 = true ;
        }
        
    
                        return main.call(this , fn , scope) ;
                    } ;
    
                })();

innerExports['src::is.object.simple'] = (() =>{

                    
    
                    
    
                    

                    function main(data){

        /**
 * 
 * 判定数据是否为简单对象类型
 * 
 * @param {mixed} data 检验数据
 * 
 * @return {boolean} 如果给定值为简单对象类型则返回 true , 否则返回 false 
 * 
 */

return data instanceof Object && data.constructor === Object;

    }
    
                    return function(data){
    
                        
    
                        return main.call(this , data) ;
                    } ;
    
                })();

innerExports['src::array.from'] = (() =>{

                    let isEmpty,isString;
    
                    let var_init_locked_1611566399093;
    
                    

                    function main(data){

        /**
 * 
 * 将非数组数据打包成数组数据
 * 
 * @import is.empty
 * 
 * @import is.string
 * 
 * @param {mixed} data 数据
 * 
 * @return {array} 数组数据
 * 
 */

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
    
                        
        if(!var_init_locked_1611566399093){

            isEmpty = include('src::is.empty');
isString = include('src::is.string');

            var_init_locked_1611566399093 = true ;
        }
        
    
                        return main.call(this , data) ;
                    } ;
    
                })();

innerExports['src::is.array'] = (() =>{

                    let isType;
    
                    let var_init_locked_1611566398937;
    
                    

                    function main(data){

        /**
 * 
 * 判定数据是否为数组类型
 * 
 * @import is.type
 * 
 * @param {mixed} data 检验数据
 * 
 * @return {boolean} 如果给定值为数组类型则返回 true , 否则返回 false 
 * 
 */

 return Array.isArray(data) ;

    }
    
                    return function(data){
    
                        
        if(!var_init_locked_1611566398937){

            isType = include('src::is.type');

            var_init_locked_1611566398937 = true ;
        }
        
    
                        return main.call(this , data) ;
                    } ;
    
                })();

innerExports['src::is.empty'] = (() =>{

                    let isArray;
    
                    let var_init_locked_1611566399118;
    
                    

                    function main(data , allowEmptyString){

        /**
 * 
 * 判定数据是否为空
 * 
 * @import is.array
 * 
 * @param {mixed} data 检验数据
 * 
 * @param {boolean} [allowEmptyString = false] 是否视空符串不为空，默认空符串为空
 * 
 * @return {mixed} 如果给定值为空则返回 true , 否则返回 false  
 * 
 */

return (data == null) || (!allowEmptyString ? data === '' : false) || (isArray(data) && data.length === 0);

    }
    
                    return function(data , allowEmptyString = false){
    
                        
        if(!var_init_locked_1611566399118){

            isArray = include('src::is.array');

            var_init_locked_1611566399118 = true ;
        }
        
    
                        return main.call(this , data , allowEmptyString) ;
                    } ;
    
                })();




