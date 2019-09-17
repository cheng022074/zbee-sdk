const exports = {} ;



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

            if(exports.hasOwnProperty(name)){

                return CODES[name] = exports[name] ;
            }
    
            folder = 'src',
            className = name ;
        }

        let fullName = `${folder}::${className}`,
            code = CODES[name] = exports[fullName] ;

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




exports['src::is.type'] = (() =>{

                

                

                

                

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

exports['src::is.string'] = (() =>{

                let isType;

                let var_init_locked_1568695723921;

                

                

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

                    
        if(!var_init_locked_1568695723921){

            isType = include('is.type');

            var_init_locked_1568695723921 = true ;
        }
        

                    

                    return main.call(this , data) ;
                } ;

            })();

exports['src::is.object.simple'] = (() =>{

                

                

                

                

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

exports['src::is.class'] = (() =>{

                let isType;

                let var_init_locked_1568695723923;

                

                

                function main(data){

        
/**
 * 
 * 判断数据是否为类
 * 
 * @import is.type
 * 
 * @param {mixed} data 检测数据
 * 
 * @return {boolean} 如果指定数据是类则返回 true ，否则返回 false 
 * 
 */

return isType(data , 'function') && data.ZBEE_CLASS === true ;

    }

                return function(data){

                    
        if(!var_init_locked_1568695723923){

            isType = include('is.type');

            var_init_locked_1568695723923 = true ;
        }
        

                    

                    return main.call(this , data) ;
                } ;

            })();

exports['src::is.function'] = (() =>{

                let isType;

                let var_init_locked_1568695723924;

                

                

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

return isType(data , 'function') && data.ZBEE_CLASS !== true;

    }

                return function(data){

                    
        if(!var_init_locked_1568695723924){

            isType = include('is.type');

            var_init_locked_1568695723924 = true ;
        }
        

                    

                    return main.call(this , data) ;
                } ;

            })();

exports['src::class.create'] = (() =>{

                let isString,isFunction,isClass;

                let var_init_locked_1568695723927;

                

                

                function main(baseClass , ...args){

        
/**
 * 
 * 实例基于指定类对象
 * 
 * @import is.string
 * 
 * @import is.function
 * 
 * @import is.class
 * 
 * @param {mixed} baseClass 类
 * 
 * @param {mixed} [...args] 类参数
 * 
 */



if(isString(baseClass)){

    baseClass = include(baseClass) ;
}

if(isFunction(baseClass)){

    baseClass = baseClass(...args) ;

    if(!isClass(baseClass)){

        return baseClass ;
    }
}

if(isClass(baseClass)){

    return new baseClass(...args) ;
}

    }

                return function(baseClass , ...args){

                    
        if(!var_init_locked_1568695723927){

            isString = include('is.string');
isFunction = include('is.function');
isClass = include('is.class');

            var_init_locked_1568695723927 = true ;
        }
        

                    

                    return main.call(this , baseClass , ...args) ;
                } ;

            })();

exports['src::is.defined'] = (() =>{

                

                

                

                

                function main(data){

        /**
 * 
 * 判断给定数据是否定义
 * 
 * @param {mixed} data 检验数据
 * 
 * @return {boolean} 如果数据定义则返回 true , 否则返回 false
 * 
 */

return data !== undefined ;

    }

                return function(data){

                    

                    

                    return main.call(this , data) ;
                } ;

            })();

exports['src::class.create.option'] = (() =>{

                let isString,isObject,isClass,create,isDefined;

                let var_init_locked_1568695723933;

                

                

                function main(namespace , option){

        /**
 * 
 * 基于配置的实例
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
 * 
 * @import is.class
 * 
 * @import create from class.create
 * 
 * @import is.defined
 * 
 * @param {string} namespace 命名空间
 * 
 * @param {mixed}  [option] 配置
 * 
 * @return {mixed} 类实例
 * 
 */

 if(isString(option)){

    return create(`${namespace}.${option}`) ;

 }else if(isObject(option)){

    let {
        type,
        ...currentOptions
    } = option,
    name;

    if(type){

        name = `${namespace}.${type}` ;
    
    }else{

        name = namespace ;
    }

    return create(name , currentOptions) ;
 
}else if(!isDefined(options)){

    return create(namespace) ;
}

    }

                return function(namespace , option){

                    
        if(!var_init_locked_1568695723933){

            isString = include('is.string');
isObject = include('is.object.simple');
isClass = include('is.class');
create = include('class.create');
isDefined = include('is.defined');

            var_init_locked_1568695723933 = true ;
        }
        

                    

                    return main.call(this , namespace , option) ;
                } ;

            })();

exports['src::class.empty'] = (() =>{

                

                

                

                let var_once_value_1568695723934;

                function main(){

        
/**
 * 
 * 返回一个空类
 * 
 * @once
 * 
 * @return {function} 类引用 
 * 
 */

 return class {

 } ;

    }

                return function(){

                    

                    

                    
        if(var_once_value_1568695723934){

            return var_once_value_1568695723934 ;

        }
        return var_once_value_1568695723934 = main.call(this ) ;
        
                } ;

            })();

exports['src::map.constructor'] = (() =>{

                

                

                

                

                function main(){

        
/**
 * 
 * 初始化 Map 对象
 * 
 */

this.map = new Map() ;

    }

                return function(){

                    

                    

                    return main.call(this ) ;
                } ;

            })();

exports['src::map.size'] = (() =>{

                

                

                

                

                function main(){

        
/**
 * 
 * 获得当前 Map 的键值对数量
 * 
 * @return {number} 数量 
 * 
 */

return this.map.size ;

    }

                return function(){

                    

                    

                    return main.call(this ) ;
                } ;

            })();

exports['src::map.find'] = (() =>{

                

                

                

                

                function main(keys){

        
/**
 * 
 * 判断指定组合键是否存在
 * 
 * @param {array} keys 组合键
 * 
 * @return {object} 返回查询结果 
 * 
 */

let me = this,
{
    map
} = me,
currentKeys = map.keys(),
{
    length
} = keys;

for(let groupKeys  of currentKeys){

   if(length === groupKeys.length){

       let isMatch = true ;

       for(let i = 0 ; i < length ; i ++){

           if(groupKeys[i] !== keys[i]){

               isMatch = false ;

               break ;
           }
       }

       if(isMatch){

           return {
               match:true,
               key:groupKeys
           } ;
       }
   }
}

return {
    match:false
} ;

    }

                return function(keys){

                    

                    

                    return main.call(this , keys) ;
                } ;

            })();

exports['src::map.set'] = (() =>{

                let find;

                let var_init_locked_1568695723944;

                let var_current_scope_1568695723944;

                

                function main(...values){

        
/**
 * 
 * 设置一个值
 * 
 * @import find from .find scoped
 * 
 * @param {array} [...values] 包含多维键，以及相应值
 * 
 * @return {Map} 返回当前对象 
 * 
 */

 let me = this,
 {
    map
 } = me,
 {
     length
 } = values;

 if(length >= 2){

    let keys = values.slice(0 , length - 1),
        value = values[length - 1],
        {
            match,
            key
        } = find(keys);

    if(match){

        map.set(key ,value) ;
    
    }else{

        map.set(keys , value) ;
    }
 }

 return me ;

    }

                return function(...values){

                    

                    
        if(!var_current_scope_1568695723944 !== this){

            find = include('src::map.find').bind(this);

            var_current_scope_1568695723944 = this ;
        }
        

                    return main.call(this , ...values) ;
                } ;

            })();

exports['src::map.get'] = (() =>{

                let find;

                let var_init_locked_1568695723945;

                let var_current_scope_1568695723945;

                

                function main(...keys){

        
/**
 * 
 * 判断指定组合键是否存在
 * 
 * @import find from .find scoped
 * 
 * @param {array} [...keys] 组合键
 * 
 * @return {boolean} 如果组合键存在，则返回 true , 否则返回 false 
 * 
 */

let me = this,
{
    map
} = me ;

let {
    match,
    key
} = find(keys) ;

if(match){

    return map.get(key) ;
}

    }

                return function(...keys){

                    

                    
        if(!var_current_scope_1568695723945 !== this){

            find = include('src::map.find').bind(this);

            var_current_scope_1568695723945 = this ;
        }
        

                    return main.call(this , ...keys) ;
                } ;

            })();

exports['src::map.has'] = (() =>{

                let find;

                let var_init_locked_1568695723946;

                let var_current_scope_1568695723946;

                

                function main(...keys){

        
/**
 * 
 * 判断指定组合键是否存在
 * 
 * @import find from .find scoped
 * 
 * @param {array} [...keys] 组合键
 * 
 * @return {boolean} 如果组合键存在，则返回 true , 否则返回 false 
 * 
 */

 let {
    match
 } = find(keys) ;

 return match ;

    }

                return function(...keys){

                    

                    
        if(!var_current_scope_1568695723946 !== this){

            find = include('src::map.find').bind(this);

            var_current_scope_1568695723946 = this ;
        }
        

                    return main.call(this , ...keys) ;
                } ;

            })();

exports['src::map.delete'] = (() =>{

                let find;

                let var_init_locked_1568695723948;

                let var_current_scope_1568695723948;

                

                function main(...keys){

        

/**
 * 
 * 删除指定组合键
 * 
 * @import find from .find scoped
 * 
 * @param {array} [...keys] 组合键
 * 
 * @return {boolean} 如果组合键存在，则返回 true , 否则返回 false 
 * 
 */

let me = this,
{
    map
} = me ;

let {
    match,
    key
} = find(keys) ;

if(match){

    return map.delete(key) ;
}

return false ;

    }

                return function(...keys){

                    

                    
        if(!var_current_scope_1568695723948 !== this){

            find = include('src::map.find').bind(this);

            var_current_scope_1568695723948 = this ;
        }
        

                    return main.call(this , ...keys) ;
                } ;

            })();

exports['src::map.forEach'] = (() =>{

                

                

                

                

                function main(fn , scope){

        
/**
 * 
 * 实现迭代
 * 
 * @param {function} fn 函数引用
 * 
 * @param {mixed} scope 函数作用域
 * 
 */

 let {
    map
 } = this ;

 map.forEach(fn , scope) ;

    }

                return function(fn , scope){

                    

                    

                    return main.call(this , fn , scope) ;
                } ;

            })();

exports['src::map.clear'] = (() =>{

                

                

                

                

                function main(){

        
/**
 * 
 * 清空
 * 
 */

 this.map.clear() ;

    }

                return function(){

                    

                    

                    return main.call(this ) ;
                } ;

            })();

exports['src::map.find.fuzzy'] = (() =>{

                let isDefined;

                let var_init_locked_1568695723953;

                

                

                function main(...keys){

        
/**
 * 
 * 以模糊寻找方式匹配键值
 * 
 * @import is.defined
 * 
 * @param {array} [...keys] 匹配键值
 * 
 * @return {array} 搜索结果 
 * 
 */

let me = this,
{
    map
} = me,
currentKeys = map.keys(),
{
    length
} = keys,
result = [];

for(let groupKeys  of currentKeys){

    let isMatch = true ;

    for(let i = 0 ; i < length ; i ++){

        let key = keys[i] ;

        if(!isDefined(key)){

            continue ;
        }

        if(groupKeys[i] !== key){

            isMatch = false ;

            break ;
        }
    }

    if(isMatch){

        result.push({
            key:groupKeys,
            value:map.get(groupKeys)
        }) ;
    }
}

return result ;

    }

                return function(...keys){

                    
        if(!var_init_locked_1568695723953){

            isDefined = include('is.defined');

            var_init_locked_1568695723953 = true ;
        }
        

                    

                    return main.call(this , ...keys) ;
                } ;

            })();

exports['src::map'] = (() =>{

                let extend,constructor,get_size,method_set,method_get,method_has,method_delete,method_forEach,method_clear,method_find,isObject;

                let var_init_locked_1568695723957;

                let var_class_1568695723957;

                

                return function(){

                    
        if(!var_init_locked_1568695723957){

            extend = include('class.empty')();
constructor = include('src::map.constructor');
get_size = include('map.size');
method_set = include('src::map.set');
method_get = include('src::map.get');
method_has = include('src::map.has');
method_delete = include('src::map.delete');
method_forEach = include('src::map.forEach');
method_clear = include('src::map.clear');
method_find = include('map.find.fuzzy');
isObject = include('is.object.simple');

            var_init_locked_1568695723957 = true ;
        }
        

                    
        if(!var_class_1568695723957){

            class main {

            

            

            constructor(...args){

            

            constructor.apply(this , args) ;

        }

            set(...args){

            return method_set.apply(this , args) ;

        }
get(...args){

            return method_get.apply(this , args) ;

        }
has(...args){

            return method_has.apply(this , args) ;

        }
delete(...args){

            return method_delete.apply(this , args) ;

        }
forEach(...args){

            return method_forEach.apply(this , args) ;

        }
clear(...args){

            return method_clear.apply(this , args) ;

        }
find(...args){

            return method_find.apply(this , args) ;

        }

            get size(){

                return get_size.call(this) ;
    
            }

        }

            var_class_1568695723957 = class extends main{

                static get ZBEE_CLASS(){

                    return true ;
                }

                get ZBEE_CURRENT_CLASS(){

                    return var_class_1568695723957 ;
                }

            } ;
        }
        

                    return new var_class_1568695723957();
                } ;

            })();

exports['src::event.listeners'] = (() =>{

                let map;

                let var_init_locked_1568695723957;

                

                let var_once_value_1568695723957;

                function main(){

        
/**
 * 
 * 维护全局事件监听对象
 * 
 * @import map value
 * 
 * @return {Map} 集合对象 
 * 
 * @once
 * 
 */

return map ;

    }

                return function(){

                    
        if(!var_init_locked_1568695723957){

            map = include('map')();

            var_init_locked_1568695723957 = true ;
        }
        

                    

                    
        if(var_once_value_1568695723957){

            return var_once_value_1568695723957 ;

        }
        return var_once_value_1568695723957 = main.call(this ) ;
        
                } ;

            })();

exports['src::event.listener.native.remove'] = (() =>{

                

                

                

                

                function main(target , name , fn){

        
/**
 * 
 * 适配事件主体对象的移除事件的方法
 * 
 * @param {mixed} target 事件主体
 * 
 * @param {string} name 事件名称
 * 
 * @param {function} fn 事件监听函数
 * 
 */

const remove = target.removeEventListener || target.un || target.off;

remove.call(target , name , fn) ;

    }

                return function(target , name , fn){

                    

                    

                    return main.call(this , target , name , fn) ;
                } ;

            })();

exports['src::event.listener.remove'] = (() =>{

                let isString,isObject,remove,listeners,native;

                let var_init_locked_1568695723961;

                

                

                function main(target , name , fn , {scope}){

        /**
 * 
 * 移除事件监听
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
 * 
 * @import remove from ..remove
 * 
 * @import listeners from ....listeners value
 * 
 * @import native from .native.remove
 * 
 * @param {mixed} target 事件主体
 * 
 * @param {string} name 事件名称
 * 
 * @param {mixed} fn 事件回调
 * 
 * @param {object} [options = {}] 事件配置
 * 
 * @param {mixed} [options.scope] 事件作用域
 * 
 */

 scope = scope || target ;

 if(isString(name)){

    let listener = listeners.get(target , name , fn , scope) ;

    if(listener){

        native(target , name , listener) ;

        listeners.delete(target , name , fn , scope) ;
    }
 
 }else if(isObject(name)){

    let {
        scope,
        ...listeners
    } = name,
    names = Object.keys(listeners);

    for(let name of names){

        remove(target , name , listeners[name]) ;
    }

 }

    }

                return function(target , name , fn , {scope} = {}){

                    
        if(!var_init_locked_1568695723961){

            isString = include('is.string');
isObject = include('is.object.simple');
remove = include('src::event.listener.remove');
listeners = include('src::event.listeners')();
native = include('src::event.listener.native.remove');

            var_init_locked_1568695723961 = true ;
        }
        

                    

                    return main.call(this , target , name , fn , {scope}) ;
                } ;

            })();

exports['src::function.empty'] = (() =>{

                

                

                

                

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

exports['src::function.get'] = (() =>{

                let isString,isFunction,empty;

                let var_init_locked_1568695723966;

                

                

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

        fn = include(fn) ;
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

                    
        if(!var_init_locked_1568695723966){

            isString = include('is.string');
isFunction = include('is.function');
empty = include('function.empty');

            var_init_locked_1568695723966 = true ;
        }
        

                    

                    return main.call(this , fn , scope) ;
                } ;

            })();

exports['src::event.listener.native.add'] = (() =>{

                

                

                

                

                function main(target , name , fn){

        
/**
 * 
 * 适配事件主体对象的添加事件的方法
 * 
 * @param {mixed} target 事件主体
 * 
 * @param {string} name 事件名称
 * 
 * @param {function} fn 事件监听函数
 * 
 */

 const add = target.addEventListener || target.on ;

 add.call(target , name , fn) ;

    }

                return function(target , name , fn){

                    

                    

                    return main.call(this , target , name , fn) ;
                } ;

            })();

exports['src::is.array'] = (() =>{

                let isType;

                let var_init_locked_1568695723968;

                

                

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

                    
        if(!var_init_locked_1568695723968){

            isType = include('is.type');

            var_init_locked_1568695723968 = true ;
        }
        

                    

                    return main.call(this , data) ;
                } ;

            })();

exports['src::event.listener.add'] = (() =>{

                let isString,isObject,add,remove,get,listeners,native,isArray;

                let var_init_locked_1568695723976;

                

                

                function main(target , name , fn , {once , scope}){

        /**
 * 
 * 添加事件监听
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
 * 
 * @import add from ..add
 * 
 * @import remove from ..remove
 * 
 * @import get from function.get
 * 
 * @import listeners from ....listeners value
 * 
 * @import native from .native.add
 * 
 * @import is.array
 * 
 * @param {mixed} target 事件主体
 * 
 * @param {string|object} name 事件名称
 * 
 * @param {mixed} fn 事件回调
 * 
 * @param {object} [options = {}] 事件配置
 * 
 * @param {boolean} [options.once = false] 只监听一次
 * 
 * @param {mixed} [options.scope] 事件作用域
 * 
 */

 scope = scope || target ;

 if(isString(name)){

    if(listeners.has(target , name , fn , scope)){

        return ;
    }

    let listener,
        listenerFn = get(fn , scope) ;

    if(listenerFn){

        if(once){

            listener = function(...args){

                listenerFn(args) ;

                remove(target , name , listener) ;
            } ;
        
        }else{

            listener = listenerFn ;
        }

        native(target , name , listener) ;

        listeners.set(target , name , fn , scope , listener) ;
    }

 }else if(isObject(name)){

    let {
        scope,
        ...listeners
    } = name,
    names = Object.keys(listeners) ;

    for(let name of names){

        let listener = listeners[name];

        if(isObject(listener)){

            let {
                fn,
                ...options
            } = listener ;

            options.scope = options.scope || scope ;

            add(target , name , fn , options) ;
        
        }else{

            add(target , name , listeners[name] , {
                scope
            }) ;
        }        
    }

 }else if(isArray(name)){

    for(let config of name){

        add(target , config) ;
    }
 }

    }

                return function(target , name , fn , {once = false , scope} = {}){

                    
        if(!var_init_locked_1568695723976){

            isString = include('is.string');
isObject = include('is.object.simple');
add = include('src::event.listener.add');
remove = include('src::event.listener.remove');
get = include('function.get');
listeners = include('src::event.listeners')();
native = include('src::event.listener.native.add');
isArray = include('is.array');

            var_init_locked_1568695723976 = true ;
        }
        

                    

                    return main.call(this , target , name , fn , {once , scope}) ;
                } ;

            })();

exports['src::mixin.observable.constructor'] = (() =>{

                let add,isObject,isArray;

                let var_init_locked_1568695723978;

                

                

                
/**
 * 
 * 初始化观察者
 * 
 * @import add from event.listener.add
 * 
 * @import isObject from is.object.simple
 * 
 * @import is.array
 * 
 * @param {object} options 配置
 * 
 */

const EventEmitter = require('events') ;

function main({
    listeners
}){

    let me = this,
        emitter = me.emitter = new EventEmitter() ;

    emitter.setMaxListeners(Number.MAX_VALUE) ;

    me.$suspendEvents = false ;

    if(isObject(listeners) || isArray(listeners)){

        add(me , listeners) ;

    }
}



                return function(options){

                    
        if(!var_init_locked_1568695723978){

            add = include('event.listener.add');
isObject = include('is.object.simple');
isArray = include('is.array');

            var_init_locked_1568695723978 = true ;
        }
        

                    

                    return main.call(this , options) ;
                } ;

            })();

exports['src::mixin.observable.listener.add'] = (() =>{

                

                

                

                

                function main(event , fn){

        
/**
 * 
 * 添加事件监听
 * 
 * @param {string} event 事件名称
 * 
 * @param {mixed} fn 事件回调函数
 * 
 */

let {
    emitter
} = this ;

emitter.addListener(event , fn) ;

    }

                return function(event , fn){

                    

                    

                    return main.call(this , event , fn) ;
                } ;

            })();

exports['src::mixin.observable.listener.remove'] = (() =>{

                

                

                

                

                function main(event , fn){

        
/**
 * 
 * 移除事件监听
 * 
 * @param {string} event 事件名称
 * 
 * @param {function} fn 事件回调函数
 * 
 * 
 */

let {
    emitter
} = this ;

emitter.removeListener(event , fn) ;


    }

                return function(event , fn){

                    

                    

                    return main.call(this , event , fn) ;
                } ;

            })();

exports['src::mixin.observable.event.fire'] = (() =>{

                let isArray;

                let var_init_locked_1568695723982;

                

                

                
/**
 *
 * 触发事件
 * 
 * @import is.array
 *
 * @param {string} event 事件名称
 *
 * @param {mixed} [...args] 事件参数
 *
 */

 function main(event , ...args){

    let me = this ;

    if(me.$suspendEvents === true){

        return ;
    }

    doFireBubbleEvent.call(me , event , me , ...args) ;
 }

 function doFireBubbleEvent(event , target , ...args){

    let me = this,{
        bubbleTarget,
        emitter
    } = me ;

    emitter.emit(event , target ,  ...args) ;

    if(bubbleTarget){

        doFireBubbleEvent.call(bubbleTarget , event , target , ...args) ;
    }
 }

                return function(event , ...args){

                    
        if(!var_init_locked_1568695723982){

            isArray = include('is.array');

            var_init_locked_1568695723982 = true ;
        }
        

                    

                    return main.call(this , event , ...args) ;
                } ;

            })();

exports['src::mixin.observable.events.suspend'] = (() =>{

                

                

                

                

                function main(){

        
/**
 * 
 * 暂停事件监听
 * 
 */

this.$suspendEvents = true ;

    }

                return function(){

                    

                    

                    return main.call(this ) ;
                } ;

            })();

exports['src::mixin.observable.events.resume'] = (() =>{

                

                

                

                

                function main(){

        
/**
 * 
 * 恢复事件监听
 * 
 */

 this.$suspendEvents = false ;

    }

                return function(){

                    

                    

                    return main.call(this ) ;
                } ;

            })();

exports['src::mixin.observable'] = (() =>{

                let constructor,method_addListener,method_removeListener,method_fireEvent,method_suspendEvents,method_resumeEvents,isObject;

                let var_init_locked_1568695723986;

                

                

                function main(extend){

                        return class extends extend{

                            
                
                            
                
                            constructor(options){

            super(options) ;

            if(isObject(options)){

                constructor.call(this , options) ;
            
            }else{

                constructor.call(this , {}) ;
            }

        }
                
                            addListener(...args){

            return method_addListener.apply(this , args) ;

        }
on(...args){

                return this.addListener(...args) ;
    
            }
removeListener(...args){

            return method_removeListener.apply(this , args) ;

        }
un(...args){

                return this.removeListener(...args) ;
    
            }
fireEvent(...args){

            return method_fireEvent.apply(this , args) ;

        }
suspendEvents(...args){

            return method_suspendEvents.apply(this , args) ;

        }
resumeEvents(...args){

            return method_resumeEvents.apply(this , args) ;

        }
                
                            
                
                        }

                }

                return function(extend){

                    
        if(!var_init_locked_1568695723986){

            constructor = include('src::mixin.observable.constructor');
method_addListener = include('src::mixin.observable.listener.add');
method_removeListener = include('src::mixin.observable.listener.remove');
method_fireEvent = include('src::mixin.observable.event.fire');
method_suspendEvents = include('src::mixin.observable.events.suspend');
method_resumeEvents = include('src::mixin.observable.events.resume');
isObject = include('is.object.simple');

            var_init_locked_1568695723986 = true ;
        }
        

                    

                    return main.call(this , extend) ;
                } ;

            })();

exports['src::data.proxy.create'] = (() =>{

                let create;

                let var_init_locked_1568695723986;

                

                

                function main(proxy){

        
/**
 * 
 * 创建新的代理
 * 
 * @import create from class.create.option
 * 
 * @param {mixed} [proxy = 'memory'] 数据代理
 * 
 * @return {mixed} 数据代理 
 * 
 */

 return create('data.proxy' , proxy) ;

    }

                return function(proxy = 'memory'){

                    
        if(!var_init_locked_1568695723986){

            create = include('class.create.option');

            var_init_locked_1568695723986 = true ;
        }
        

                    

                    return main.call(this , proxy) ;
                } ;

            })();

exports['src::object.proxy'] = (() =>{

                

                

                

                

                
/**
 * 
 * 对象代理，如果对象没有需要的方法或者属性时，则会抛出异常
 * 
 * @param {mixed} target 需要代理的对象
 * 
 * @return {object.Proxy} 代理对象引用 
 * 
 */

 function main(target){

    return new Proxy(target) ;
 }

 class Proxy{

    constructor(target){

        this.target = target ;
    }

    call(method , ...args){

        let {
            target
        } = this ;

        if(method in target){

            return target[method](...args) ;
        
        }else{

            throw new ProxyMethodNotFoundError(target , method) ;
        }
    }

    callIf(method , ...args){

        let {
            target
        } = this ;

        if(method in target){

            return target[method](...args) ;
        }
    }

    set(name , value){

        let {
            target
        } = this ;

        if(name in target){

            target[name] = value ;
        
        }else{

            throw new ProxyPropertyNotFoundError(target , name , 'set') ;
        }
    }

    setIf(name , value){

        let {
            target
        } = this ;

        if(name in target){

            target[name] = value ;
        
        }
    }

    get(name){

        let {
            target
        } = this ;

        if(name in target){

            return target[name] ;
        
        }else{

            throw new ProxyPropertyNotFoundError(target , name , 'get') ;
        }
    }

    getIf(name){

        let {
            target
        } = this ;

        if(name in target){

            return target[name] ;
        
        }
    }

    fireEvent(name , ...args){

        let {
            target
        } = this ;

        if('fireEvent' in target){

            target.fireEvent(name , ...args) ;
        }
    }
 }

 class ProxyMethodNotFoundError extends Error{

    constructor(target , method){

        super(`无法访问名称为 ${method} 的方法`) ;

        let me = this ;

        me.proxyTarget = target ;

        me.proxyMethod = method ;

    }
 }

 class ProxyPropertyNotFoundError extends Error{

    constructor(target , property , mode){

        let modeMessage ;

        switch(mode){

            case 'set':

                modeMessage = '设置' ;

                break ;

            case 'get':

                modeMessage = '获取' ;
        }

        super(`无法${modeMessage}名称为 ${property} 的属性`) ;

        let me = this ;

        me.proxyTarget = target ;

        me.proxyProperty = property ;

    }
 }

                return function(target){

                    

                    

                    return main.call(this , target) ;
                } ;

            })();

exports['src::is.object'] = (() =>{

                let isType;

                let var_init_locked_1568695723994;

                

                

                function main(data){

        /**
 * 
 * 判定数据是否为对象类型
 * 
 * @import is.type
 * 
 * @param {mixed} data 检验数据
 * 
 * @return {boolean} 如果给定值为对象类型则返回 true , 否则返回 false 
 * 
 */

return Object.prototype.toString.call(data) === '[object Object]' ;

    }

                return function(data){

                    
        if(!var_init_locked_1568695723994){

            isType = include('is.type');

            var_init_locked_1568695723994 = true ;
        }
        

                    

                    return main.call(this , data) ;
                } ;

            })();

exports['src::object.key.join'] = (() =>{

                

                

                

                

                
/**
 * 
 * 将多个键值连接起来
 * 
 * @param {array} [...keys] 一组键值
 * 
 * @return {string} 连接后的键值 
 * 
 */

const suffixRe = /(?:^\.+)|(?:\.+$)/g ;

function main(...keys){

    let result = [] ;

    for(let key of keys){

        key = key.replace(suffixRe , '') ;

        if(key){

            result.push(key) ;
        }
    }

    return result.join('.') ;
}



                return function(...keys){

                    

                    

                    return main.call(this , ...keys) ;
                } ;

            })();

exports['src::object.value.get'] = (() =>{

                let isArray,isObject,isDefined,join;

                let var_init_locked_1568695723997;

                

                

                
/**
 * 
 * 获得一个对象的键值
 * 
 * @import is.array
 * 
 * @import is.object
 * 
 * @import is.defined
 * 
 * @import join from object.key.join
 * 
 * @param {object} data 对象数据
 * 
 * @param {string} [key = '.'] 对象键值
 * 
 * @return {mixed} 对应对象数据的键值的数据 
 * 
 * @scoped
 * 
 */

const firstKeyRe = /^([^\.]+)\./;

function main(data , key , prefixKey = ''){

    if(key === '.'){

        return data ;
    }

    if(isObject(data)){

        let firstKey,
            lastKey = key.replace(firstKeyRe , function(){

                firstKey = arguments[1] ;
                
                return '' ;

            }) ;

        if(firstKey){

            firstKey = join(prefixKey , firstKey) ;

            let result ;

            if(data.hasOwnProperty(firstKey)){

                result = data[firstKey] ;

                prefixKey = '' ;

            }else{

                result = data ;

                prefixKey = firstKey ;
            }

            if(lastKey){

                return main(result , lastKey , prefixKey) ;
            }
        
            return result ;
        
        }else{

            return data[join(prefixKey , lastKey)] ;
        }

    }else if(isArray(data)){

        let result = [] ;

        for(let item of data){

            let itemResult = main(item , key) ;

            if(isArray(itemResult)){

                result.push(...itemResult) ;
            
            }else if(!isDefined(itemResult)){

                result.push(itemResult) ;

            }
        }

        return result ;
    }
}

                return function(data , key = '.'){

                    
        if(!var_init_locked_1568695723997){

            isArray = include('is.array');
isObject = include('is.object');
isDefined = include('is.defined');
join = include('object.key.join');

            var_init_locked_1568695723997 = true ;
        }
        

                    

                    return main.call(this , data , key) ;
                } ;

            })();

exports['src::is.empty'] = (() =>{

                let isArray;

                let var_init_locked_1568695723999;

                

                

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

                    
        if(!var_init_locked_1568695723999){

            isArray = include('is.array');

            var_init_locked_1568695723999 = true ;
        }
        

                    

                    return main.call(this , data , allowEmptyString) ;
                } ;

            })();

exports['src::array.from'] = (() =>{

                let isEmpty,isString;

                let var_init_locked_1568695724000;

                

                

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

                    
        if(!var_init_locked_1568695724000){

            isEmpty = include('is.empty');
isString = include('is.string');

            var_init_locked_1568695724000 = true ;
        }
        

                    

                    return main.call(this , data) ;
                } ;

            })();

exports['src::data.reader.json'] = (() =>{

                let objectValueGet,isString,isFunction,arrayFrom,isEmpty,getModel;

                let var_init_locked_1568695724003;

                

                

                /**
 * 
 * JSON 数据读取器
 * 
 * @import object.value.get
 * 
 * @import is.string
 * 
 * @import is.function
 * 
 * @import array.from
 * 
 * @import is.empty
 * 
 * @import getModel from data.model.get
 * 
 * @param {object} [config = {}] 读取参数设置
 * 
 * @param {string} [config.rootProperty = '.'] 读取数据的根
 * 
 * @param {function} [config.model] 数据模型类
 * 
 * @param {boolean} [config.isModelData = true] 是否解析成模型化的数据 
 * 
 * @return {function} 读取器所生成的解析函数
 * 
 */

 function main({
   rootProperty,
   model,
   isModelData
 }){

   const Model = getModel(model) ;

   let {
      fields
   } = Model ;

   return  (new Function('data' , `

      var me = this,
         include = me.include,
         converts = me.converts,
         createModel = me.createModel,
         get = include('object.value.get'),
         from = include('array.from'),
         isEmpty = include('is.empty');

      ${generate_get_root_data(rootProperty)}

      data = from(data) ;

      var result = [],
          len = data.length;

      for(var i = 0 ; i < len ; i ++){

         var item = {},
             currentItem = data[i];

         ${generate_get_field_data(fields)}

         result.push(createModel(item)) ;
      }

      return result;

    `)).bind({
       include,
       converts:fields.converts,
       createModel:data => isModelData ? new Model({
         innerData:data
       }) : data
    });
 }

 function generate_get_root_data(rootProperty){

   if(rootProperty !== '.'){

      return `data = get(data , '${rootProperty}');` ;
   }

   return '' ;
 }

 function generate_get_field_data({
   names
 }){

   let result = [] ;

   for(let name of names){

      result.push(`item['${name}'] = converts['${name}'](currentItem);`) ;

      result.push(`if(isEmpty(item['${name}'])){

         delete item['${name}'];
      
      }`) ;
   }

   return result.join('') ;
 }

                return function({rootProperty = '.' , model , isModelData = true} = {}){

                    
        if(!var_init_locked_1568695724003){

            objectValueGet = include('object.value.get');
isString = include('is.string');
isFunction = include('is.function');
arrayFrom = include('array.from');
isEmpty = include('is.empty');
getModel = include('data.model.get');

            var_init_locked_1568695724003 = true ;
        }
        

                    

                    return main.call(this , {rootProperty , model , isModelData}) ;
                } ;

            })();

exports['src::data.proxy.constructor'] = (() =>{

                let createProxy,createReader;

                let var_init_locked_1568695724004;

                

                

                function main({reader , model}){

        
/**
 * 
 * 初始化数据代理
 * 
 * @import createProxy from object.proxy
 * 
 * @import createReader from data.reader.json
 * 
 * @param {object} [options = {}] 配置
 * 
 * @param {mixed} [options.reader = {}] 配置读取器
 * 
 * @param {mixed} [options.model] 数据模型
 * 
 */

 let me = this ;

 me.proxy = createProxy(me) ;

 me.reader = createReader({
     ...reader,
     model
 }) ;

    }

                return function({reader = {} , model} = {}){

                    
        if(!var_init_locked_1568695724004){

            createProxy = include('object.proxy');
createReader = include('data.reader.json');

            var_init_locked_1568695724004 = true ;
        }
        

                    

                    return main.call(this , {reader , model}) ;
                } ;

            })();

exports['src::is.promise'] = (() =>{

                

                

                

                

                function main(data){

        
/**
 * 
 * 判断数据是否为 Promise 对象
 * 
 * @param {mixed} data 测试数据
 * 
 * @return {boolean} 如果是 Promise 则返回 true , 否则返回 false
 * 
 */

 return data instanceof Promise ;

    }

                return function(data){

                    

                    

                    return main.call(this , data) ;
                } ;

            })();

exports['src::data.proxy.read'] = (() =>{

                let isPromise;

                let var_init_locked_1568695724006;

                

                

                
/**
 * 
 * 读取数据
 * 
 * @import is.promise
 * 
 * @param {mixed} options 读取数据配置
 * 
 */

function fireReadEvent(data){

    let me = this,
    {
        reader
    } = me ;

    me.fireEvent('read' , reader(data)) ;
}

function main(options){

    let me = this,
    {
        proxy
    } = me,
    data = proxy.call('doRead' , options);
   
    if(isPromise(data)){
   
       data.then(data => fireReadEvent.call(me , data)) ;
    
    }else{

        fireReadEvent.call(me , data) ;
    }
}




                return function(options){

                    
        if(!var_init_locked_1568695724006){

            isPromise = include('is.promise');

            var_init_locked_1568695724006 = true ;
        }
        

                    

                    return main.call(this , options) ;
                } ;

            })();

exports['src::data.proxy'] = (() =>{

                let mixin_1568695723667__1,extend,constructor,method_read,isObject;

                let var_init_locked_1568695724007;

                let var_class_1568695724007;

                

                return function(){

                    
        if(!var_init_locked_1568695724007){

            mixin_1568695723667__1 = include('mixin.observable');
extend = include('class.empty')();
constructor = include('src::data.proxy.constructor');
method_read = include('src::data.proxy.read');
isObject = include('is.object.simple');

            var_init_locked_1568695724007 = true ;
        }
        

                    
        if(!var_class_1568695724007){

            class main extends mixins({extend , mixins:[include('mixin.observable')]}){

            

            

            constructor(...args){

            super(...args) ;

            constructor.apply(this , args) ;

        }

            read(...args){

            return method_read.apply(this , args) ;

        }

            

        }

            var_class_1568695724007 = class extends main{

                static get ZBEE_CLASS(){

                    return true ;
                }

                get ZBEE_CURRENT_CLASS(){

                    return var_class_1568695724007 ;
                }

            } ;
        }
        

                    return var_class_1568695724007;
                } ;

            })();

exports['src::is.proxy.memory'] = (() =>{

                let Proxy;

                let var_init_locked_1568695724007;

                

                

                function main(data){

        
/**
 * 
 * 判断是否内存代理
 * 
 * @import Proxy from data.proxy value
 * 
 * @param {mixed} data 测试数据
 * 
 * @return {boolean} 如果为内存代理则返回 true , 否则返回 false
 * 
 */


 return data instanceof Proxy && data.proxyType === 'memory' ;

    }

                return function(data){

                    
        if(!var_init_locked_1568695724007){

            Proxy = include('data.proxy')();

            var_init_locked_1568695724007 = true ;
        }
        

                    

                    return main.call(this , data) ;
                } ;

            })();

exports['src::object.keys'] = (() =>{

                let isObject;

                let var_init_locked_1568695724008;

                

                

                /**
 * 
 * 获取对象的键值组合
 * 
 * @import isObject from is.object.simple
 * 
 * @param {object} data 对象
 * 
 * @return {array} 键值数组
 * 
 * @scoped
 * 
 */

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

                    
        if(!var_init_locked_1568695724008){

            isObject = include('is.object.simple');

            var_init_locked_1568695724008 = true ;
        }
        

                    

                    return main.call(this , data) ;
                } ;

            })();

exports['src::string.split'] = (() =>{

                let isEmpty;

                let var_init_locked_1568695724009;

                

                

                
/**
 * 
 * 将字符串通过间隔符分隔成数组
 * 
 * @import is.empty
 * 
 * @param {String} target 字符串
 * 
 * @param {RegEx} splitRe 字符串分隔符
 * 
 * @scoped
 * 
 */

function main(target , splitRe){

    return target.split(splitRe).filter(filter) ;
 }

 function filter(target){

    return !isEmpty(target) ;
 }

                return function(target , splitRe){

                    
        if(!var_init_locked_1568695724009){

            isEmpty = include('is.empty');

            var_init_locked_1568695724009 = true ;
        }
        

                    

                    return main.call(this , target , splitRe) ;
                } ;

            })();

exports['src::object.value.set'] = (() =>{

                let isObject,split;

                let var_init_locked_1568695724010;

                

                

                /**
 * 
 * 设置对象的属性值
 * 
 * @import is.object
 * 
 * @import split from string.split
 * 
 * @param {object} target 目标对象
 * 
 * @param {string} key 属性名称
 * 
 * @param {mixed} value 属性值
 * 
 * @scoped
 * 
 */

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

                return function(target , key , value){

                    
        if(!var_init_locked_1568695724010){

            isObject = include('is.object');
split = include('string.split');

            var_init_locked_1568695724010 = true ;
        }
        

                    

                    return main.call(this , target , key , value) ;
                } ;

            })();

exports['src::object.assign.if'] = (() =>{

                let getKeys,set,get;

                let var_init_locked_1568695724011;

                

                

                
/**
 * 
 * 如果目标存在来源的字段，则不覆盖
 * 
 * @import getKeys from object.keys
 * 
 * @import set from object.value.set
 * 
 * @import get from object.value.get
 * 
 * @param {object} dest 目标数据
 * 
 * @param {object} [...sources] 来源数据
 * 
 * @return {object} 合并后数据
 * 
 * @scoped
 * 
 */

function assign(dest , source){

    let keys = getKeys(source),
        destKeys = getKeys(dest);

    for(let key of keys){

        if(!destKeys.includes(key)){

            set(dest , key , get(source , key)) ;
        }
    }

}

function main(dest , ...sources){

    for(let source of sources){

        assign(dest , source) ;
    }

    return dest ;

}

                return function(dest , ...sources){

                    
        if(!var_init_locked_1568695724011){

            getKeys = include('object.keys');
set = include('object.value.set');
get = include('object.value.get');

            var_init_locked_1568695724011 = true ;
        }
        

                    

                    return main.call(this , dest , ...sources) ;
                } ;

            })();

exports['src::data.model.base'] = (() =>{

                let isString,isObject,createProxy,isMemoryProxy,assign2;

                let var_init_locked_1568695724012;

                let var_class_1568695724012;

                

                return function(){

                    
        if(!var_init_locked_1568695724012){

            isString = include('is.string');
isObject = include('is.object.simple');
createProxy = include('data.proxy.create');
isMemoryProxy = include('is.proxy.memory');
assign2 = include('object.assign.if');

            var_init_locked_1568695724012 = true ;
        }
        

                    
        if(!var_class_1568695724012){

            
/**
 * 
 * 数据模型
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
 * 
 * @import createProxy from data.proxy.create
 * 
 * @import isMemoryProxy from is.proxy.memory
 * 
 * @import assign2 from object.assign.if
 * 
 * @class
 * 
 */

 class main{

    constructor({
        proxy = {},
        innerData = {},
        data,
        autoLoad
    } = {}){

        let me = this,
        {
            ZBEE_CURRENT_CLASS
        } = me;

        me.proxy = createProxy(assign2({
            type:'memory',
            model:ZBEE_CURRENT_CLASS,
            reader:{
                type:'json',
                isModelData:false
            },
            listeners:{
                read:'onProxyRead',
                scope:me
            }
        } , proxy)) ;

        me.data = innerData || {} ;

        if(data){
            
            let {
                proxy
            } = me ;

            if(isMemoryProxy(proxy)){

                proxy.read(data) ;
            }

        }else if(autoLoad){

            me.load() ;
        }
    }

    get idProperty(){

        return 'id' ;
    }

    get bubbleTarget(){

        return this.store ;
    }

    static get fieldConfigurations(){

        return [] ;
    }

    onProxyRead(proxy , records){

        if(records.length){

            let me = this ;

            Object.assign(me.data , records[0].data) ;

            me.fireEvent('load') ;
        }
    }
 }

            var_class_1568695724012 = class extends main{

                static get ZBEE_CLASS(){

                    return true ;
                }

                get ZBEE_CURRENT_CLASS(){

                    return var_class_1568695724012 ;
                }

            } ;
        }
        

                    return var_class_1568695724012;
                } ;

            })();

exports['src::data.model.fields'] = (() =>{

                let isString,from,isObject,isDefined,getModel,Store;

                let var_init_locked_1568695724021;

                

                

                
/**
 * 
 * 获取数据字段定义集合
 * 
 * @import is.string
 * 
 * @import from from array.from
 * 
 * @import isObject from is.object.simple
 * 
 * @import is.defined
 * 
 * @import getModel from data.model.get
 * 
 * @import Store from data.store value
 * 
 * @return {data.Fields} 字段定义集合 
 * 
 */

const createConvertFn = mapping => data => data[mapping],
    defaultGetFn = data => data,
    defaultEqualsFn = (value , oldValue) => value !== oldValue,
    defaultSetFn = function(value , name){

        this.data[name] = value ;
    },
    {
        assign,
        keys
    } = Object;

 function main(){

    let me = this,
    {
        $fields
    } = me;

    if($fields){

        return $fields ;
    }

    let {
        fieldConfigurations
    } = me,
    fields = [];

    for(let fieldConfig of fieldConfigurations){

        if(isString(fieldConfig)){

            fieldConfig = {
                name:fieldConfig,
                convert:createConvertFn(fieldConfig),
                get:defaultGetFn,
                equals:defaultEqualsFn,
                set:defaultSetFn
            } ;

        }else if(isObject(fieldConfig)){

            let {
                name,
                convert,
                mapping,
                persistent = false,
                get = defaultGetFn,
                equals = defaultEqualsFn,
                set = defaultSetFn,
                defaultValue,
                ...otherFieldConfig
            } = fieldConfig ;

            if(persistent){

                convert = () => defaultValue ;

            }else{

                if(mapping){

                    convert = createConvertFn(mapping) ;
                }

                convert = convert || createConvertFn(name) ;

                if(isDefined(defaultValue)){

                    let oldConvert = convert;

                    convert = (data) => {

                        let value = oldConvert(data) ;
                        
                        return isDefined(value) ? value : defaultValue ;

                    } ;
                }
            }

            fieldConfig = {
                name,
                convert,
                get,
                set,
                equals,
                ...otherFieldConfig
            } ;
        }

        if(isObject(fieldConfig)){

            let {
                hasMany,
                hasOne,
                belongsTo
            } = fieldConfig ;

            let association ;

            if(hasMany){

                association = {
                    type:'hasMany',
                    ...hasMany
                } ;

                delete fieldConfig.hasMany ;
            }

            if(hasOne){

                association = {
                    type:'hasOne',
                    ...hasOne
                } ;
                
                delete fieldConfig.hasOne ;
            }


            if(belongsTo){

                association = {
                    type:'belongsTo',
                    ...belongsTo
                } ;

            }

            if(association){

                assign(fieldConfig , getAssociationConfig(me , association)) ;
            }
        }

        fields.push(fieldConfig) ;
    }

    return me.$fields = new Fields(fields) ;
 }

 function getAssociationConfig(model , {
    model:AssociationModel,
    autoLoad,
    type,
    associationKey,
    assocationMode = 'local-data'
}){

   if(AssociationModel){

       AssociationModel = getModel(associationModel) ;
   
   }else{

       AssociationModel = model ;
   }

   switch(type){

       case 'hasMany':

           switch(assocationMode){

               case 'local-data':

                   return {
                       convert:data => new Store({
                           model:AssociationModel,
                           autoLoad,
                           data,
                           proxy:{
                               reader:{
                                   rootProperty:associationKey
                               }
                           }
                       })
                   } ;

               case 'local-key':

                   return {
                       convert:data => from(createConvertFn(associationKey)(data)),
                       get:keys => this.store.getByIds(keys)
                   } ;

               case 'remote-key':

                   // 等待远程 AJAX 代理实现

               break ;
           }

           break ;

       case 'hasOne':
       case 'belongsTo':

               switch(assocationMode){

                   case 'local-data':
   
                       return {
                           convert:data => new AssociationModel({
                               autoLoad,
                               data,
                               proxy:{
                                   reader:{
                                       rootProperty:associationKey
                                   }
                               }
                           })
                       } ;
   
                   case 'local-key':

                       return {
                           convert:createConvertFn(associationKey),
                           get(key){

                               let {
                                   store
                               } = this ;

                               if(store){

                                   return store.getById(key) ;
                               }

                               
                           }
                       } ;
   
                   case 'remote-key':

                       // 等待远程 AJAX 代理实现
   
                   break ;
               }
   }
}

class Fields{

    constructor(fields){

        let me = this,
            names = [],
            innerFields = [] ;

        for(let field of fields){

            let {
                name
            } = field ;

            if(!names.includes(name)){

                innerFields.push(field) ;

                names.push(name) ;
            
            }else{

                innerFields[names.indexOf(name)] = field ;
            }
        }

        me.fields = innerFields ;

        me.names = names ;
    }

    getField(name){

        let me = this,
            index = getFieldIndex.call(me , name);

        if(index !== -1){

           return me.fields[index] ;
        }
    }

    hasField(name){

        return getFieldIndex.call(this , name) !== -1 ;
    }

    get converts(){

        let {
            fields
        } = this,
        converts = {};
    
        for(let {
            name,
            convert
        } of fields){
    
            converts[name] = convert ;
        }

        return converts ;
    }
 }

 function getFieldIndex(name){

    let {
        names
    } = this ;

    return names.indexOf(name) ;
 }

                return function(){

                    
        if(!var_init_locked_1568695724021){

            isString = include('is.string');
from = include('array.from');
isObject = include('is.object.simple');
isDefined = include('is.defined');
getModel = include('data.model.get');
Store = include('data.store')();

            var_init_locked_1568695724021 = true ;
        }
        

                    

                    return main.call(this ) ;
                } ;

            })();

exports['src::data.model.store.bind.is'] = (() =>{

                

                

                

                

                function main(){

        
/**
 * 
 * 检测当前记录是否绑定存储器
 * 
 * @return {boolean} 如果记录绑定存储器则返回 true , 否则返回 false 
 * 
 */

 return this.hasOwnProperty('store') ;

    }

                return function(){

                    

                    

                    return main.call(this ) ;
                } ;

            })();

exports['src::id.generate'] = (() =>{

                

                

                

                

                
/**
 * 
 * 生成唯一的编号
 * 
 * @param {string} prefix 编号前缀
 * 
 * @return {string} 生成后的唯一编号 
 * 
 */

 let count = 1 ; 

 function main(prefix = 'zb-'){

    return `${prefix}${count ++}` ;

 }

                return function(prefix){

                    

                    

                    return main.call(this , prefix) ;
                } ;

            })();

exports['src::data.model.id'] = (() =>{

                let getId;

                let var_init_locked_1568695724024;

                

                

                function main(){

        
/**
 * 
 * 返回数据记录编号
 * 
 * @import getId from id.generate
 * 
 * @return {mixed} 编号 
 * 
 */

let me = this,
{
    $id
} = me;

if($id){

    return $id ;
}

let {
    idProperty
} = me ;

if(me.has(idProperty)){

    return me.$id =  me.get(idProperty) ;

}

return me.$id = getId('model-') ;

    }

                return function(){

                    
        if(!var_init_locked_1568695724024){

            getId = include('id.generate');

            var_init_locked_1568695724024 = true ;
        }
        

                    

                    return main.call(this ) ;
                } ;

            })();

exports['src::data.model.store.bind'] = (() =>{

                

                

                

                

                function main(store){

        
/**
 * 
 * 绑定存储器
 * 
 * @param {data.Store} store 数据存储器
 * 
 * @return {mixed} 返回说明 
 * 
 */

let me = this ;

if(!me.isBindStore){

    me.store = store ;
}

    }

                return function(store){

                    

                    

                    return main.call(this , store) ;
                } ;

            })();

exports['src::data.model.store.unbind'] = (() =>{

                

                

                

                

                function main(){

        
/**
 * 
 * 解绑存储器
 * 
 */

 delete this.store ;

    }

                return function(){

                    

                    

                    return main.call(this ) ;
                } ;

            })();

exports['src::data.model.has'] = (() =>{

                

                

                

                

                function main(name){

        
/**
 * 
 * 判断是否拥有此字段
 * 
 * @param {string} name 字段名称
 * 
 * @return {boolean} 如果拥有指定字段则返回 true , 否则返回 false
 * 
 */

let {
    fields
} = this.ZBEE_CURRENT_CLASS ;

return fields.hasField(name) ;

    }

                return function(name){

                    

                    

                    return main.call(this , name) ;
                } ;

            })();

exports['src::data.model.value.set'] = (() =>{

                let isString,isObject;

                let var_init_locked_1568695724031;

                

                

                function main(name , value){

        
/**
 * 
 * 设置属性
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
 * 
 * @param {mixed} name 属性名称
 * 
 * @param {mixed} value 属性值
 * 
 */

let values ;

if(isString(name)){

    values = {
        [name]:value
    } ;

}else{

    values = name ;
}

if(isObject(values)){

    let me = this,
    {
        ZBEE_CURRENT_CLASS
    } = me,
    {
        fields
    } = ZBEE_CURRENT_CLASS,
    names = Object.keys(values),
    updateValues = {};

    for(let name of names){

        let field = fields.getField(name);

        if(field){

            let value = values[name],
                oldValue = me.get(name);

            if(field.equals.call(me , value , oldValue)){

                field.set.call(me , value , name) ;

                updateValues[name] = value ;

                me.fireEvent('update' , name , value , oldValue) ;
            }
        }
    }

    return updateValues ;
}

    }

                return function(name , value){

                    
        if(!var_init_locked_1568695724031){

            isString = include('is.string');
isObject = include('is.object.simple');

            var_init_locked_1568695724031 = true ;
        }
        

                    

                    return main.call(this , name , value) ;
                } ;

            })();

exports['src::data.model.value.get'] = (() =>{

                

                

                

                

                function main(name){

        
/**
 * 
 * 获取属性
 * 
 * @param {mixed} name 属性名称
 * 
 * @return {mixed} 返回说明 
 * 
 */

let me = this,
{
    data,
    ZBEE_CURRENT_CLASS
} = me,
{
    fields
} = ZBEE_CURRENT_CLASS,
field = fields.getField(name);

if(field){

    return field.get.call(me , data[name]) ;
}

    }

                return function(name){

                    

                    

                    return main.call(this , name) ;
                } ;

            })();

exports['src::data.model.load'] = (() =>{

                

                

                

                

                function main(options){

        
/**
 * 
 * 加载数据
 * 
 * @param {mixed} options 加载配置
 * 
 * 
 */

this.proxy.read(options) ;

    }

                return function(options){

                    

                    

                    return main.call(this , options) ;
                } ;

            })();

exports['src::data.model.destroy'] = (() =>{

                

                

                

                

                function main(data){

        
/**
 * 
 * 函数实现说明
 * 
 * @param {mixed} data 参数说明
 * 
 * @return {mixed} 返回说明 
 * 
 */

 // 代码实现

    }

                return function(data){

                    

                    

                    return main.call(this , data) ;
                } ;

            })();

exports['src::data.model'] = (() =>{

                let mixin_1568695723663__1,extend,static_get_fields,get_isBindStore,get_id,method_bindStore,method_unbindStore,method_has,method_set,method_get,method_load,method_destroy,isObject;

                let var_init_locked_1568695724035;

                let var_class_1568695724035;

                

                return function(){

                    
        if(!var_init_locked_1568695724035){

            mixin_1568695723663__1 = include('mixin.observable');
extend = include('src::data.model.base')();
static_get_fields = include('src::data.model.fields');
get_isBindStore = include('src::data.model.store.bind.is');
get_id = include('src::data.model.id');
method_bindStore = include('src::data.model.store.bind');
method_unbindStore = include('src::data.model.store.unbind');
method_has = include('src::data.model.has');
method_set = include('src::data.model.value.set');
method_get = include('src::data.model.value.get');
method_load = include('src::data.model.load');
method_destroy = include('src::data.model.destroy');
isObject = include('is.object.simple');

            var_init_locked_1568695724035 = true ;
        }
        

                    
        if(!var_class_1568695724035){

            class main extends mixins({extend , mixins:[include('mixin.observable')]}){

            

            static get fields(){

                return static_get_fields.call(this) ;
    
            }

            

            bindStore(...args){

            return method_bindStore.apply(this , args) ;

        }
unbindStore(...args){

            return method_unbindStore.apply(this , args) ;

        }
has(...args){

            return method_has.apply(this , args) ;

        }
set(...args){

            return method_set.apply(this , args) ;

        }
get(...args){

            return method_get.apply(this , args) ;

        }
load(...args){

            return method_load.apply(this , args) ;

        }
destroy(...args){

            return method_destroy.apply(this , args) ;

        }

            get isBindStore(){

                return get_isBindStore.call(this) ;
    
            }
get id(){

                return get_id.call(this) ;
    
            }

        }

            var_class_1568695724035 = class extends main{

                static get ZBEE_CLASS(){

                    return true ;
                }

                get ZBEE_CURRENT_CLASS(){

                    return var_class_1568695724035 ;
                }

            } ;
        }
        

                    return var_class_1568695724035;
                } ;

            })();

exports['src::is.class.from'] = (() =>{

                let isClass,isString;

                let var_init_locked_1568695724036;

                

                

                function main(data , baseClass){

        
/**
 * 
 * 判定数据是否为指定类
 * 
 * @import is.class
 * 
 * @import is.string
 * 
 * @param {mixed} data 测试数据
 * 
 * @param {mixed} baseClass 基准类
 * 
 * @return {boolean} 如果数据为基准类时则返回 true ,  否则返回 false
 * 
 */

 if(isString(baseClass)){

    baseClass = include(baseClass)() ;
 }

 return isClass(data) && isClass(baseClass) && (data === baseClass || data.prototype instanceof baseClass) ;

    }

                return function(data , baseClass){

                    
        if(!var_init_locked_1568695724036){

            isClass = include('is.class');
isString = include('is.string');

            var_init_locked_1568695724036 = true ;
        }
        

                    

                    return main.call(this , data , baseClass) ;
                } ;

            })();

exports['src::is.data.model.class'] = (() =>{

                let dataModel,isClass;

                let var_init_locked_1568695724036;

                

                

                function main(data){

        
/**
 * 
 * 判断是否为数据模型类
 * 
 * 
 * @import data.model
 * 
 * @import isClass from is.class.from
 * 
 * @param {mixed} data 参照数据
 * 
 * @return {boolean} 如果是数据模型类则返回 true , 否则返回 false 
 * 
 */

 return isClass(data , 'data.model') ;



    }

                return function(data){

                    
        if(!var_init_locked_1568695724036){

            dataModel = include('data.model');
isClass = include('is.class.from');

            var_init_locked_1568695724036 = true ;
        }
        

                    

                    return main.call(this , data) ;
                } ;

            })();

exports['src::data.model.get'] = (() =>{

                let Model,isModelClass,isString,isFunction;

                let var_init_locked_1568695724037;

                

                

                function main(model){

        /**
* 
* 获取数据模型类引用
* 
* @import Model from data.model value
* 
* @import isModelClass from is.data.model.class
* 
* @import is.string
* 
* @import is.function
* 
* @param {mixed} model 数据模型名称
* 
* @return {data.Model} 模型类引用
* 
*/

if(isString(model)){

   model = include(`data.model.${model}`) ;
}

if(isModelClass(model)){

   return model ;
}

return Model ;

    }

                return function(model){

                    
        if(!var_init_locked_1568695724037){

            Model = include('data.model')();
isModelClass = include('is.data.model.class');
isString = include('is.string');
isFunction = include('is.function');

            var_init_locked_1568695724037 = true ;
        }
        

                    

                    return main.call(this , model) ;
                } ;

            })();

exports['src::class.define'] = (() =>{

                

                

                

                

                function main(BaseClass){

        
/**
 * 
 * 类定义
 * 
 * @param {mixed} BaseClass 基准类
 * 
 * @return {mixed} 类
 * 
 */

 return class extends BaseClass{

    get ZBEE_CURRENT_CLASS(){

        return BaseClass ;
    }

 } ;

    }

                return function(BaseClass){

                    

                    

                    return main.call(this , BaseClass) ;
                } ;

            })();

exports['src::data.model.create'] = (() =>{

                let Model,get,define;

                let var_init_locked_1568695724038;

                

                

                
/**
 * 
 * 根据字段创建一个数据模型类
 * 
 * @import Model from data.model value
 * 
 * @import get from data.model.get
 * 
 * @import define from class.define
 *
 * @param {object} [config = {}] 配置
 * 
 * @param {mixed} [config.fields = []] 字段定义
 * 
 * @param {string} [config.idProperty = 'id'] 编号字段名称
 * 
 * @return {data.Model} 数据模型类 
 * 
 */

 function main({
     fields,
     idProperty
 }){


    return define(class extends Model{

        static get fieldConfigurations(){

            return fields;
        }

        get idProperty(){

            return idProperty;
        }
    }) ;
 }

                return function({fields = [] , idProperty = 'id'} = {}){

                    
        if(!var_init_locked_1568695724038){

            Model = include('data.model')();
get = include('data.model.get');
define = include('class.define');

            var_init_locked_1568695724038 = true ;
        }
        

                    

                    return main.call(this , {fields , idProperty}) ;
                } ;

            })();

exports['src::object.assign'] = (() =>{

                let getKeys,set,get;

                let var_init_locked_1568695724039;

                

                

                
/**
 * 
 * 深度合并
 * 
 * @import getKeys from object.keys
 * 
 * @import set from object.value.set
 * 
 * @import get from object.value.get
 * 
 * @param {object} dest 目标数据
 * 
 * @param {object} [...sources] 来源数据
 * 
 * @return {object} 合并后数据
 * 
 * @scoped
 * 
 */

function assign(dest , source){

    let keys = getKeys(source) ;

    for(let key of keys){

        set(dest , key , get(source , key)) ;
    }

}

function main(dest , ...sources){

    for(let source of sources){

        assign(dest , source) ;
    }

    return dest ;

}

                return function(dest , ...sources){

                    
        if(!var_init_locked_1568695724039){

            getKeys = include('object.keys');
set = include('object.value.set');
get = include('object.value.get');

            var_init_locked_1568695724039 = true ;
        }
        

                    

                    return main.call(this , dest , ...sources) ;
                } ;

            })();

exports['src::array.remove.index'] = (() =>{

                

                

                

                

                function main(data , index){

        
/**
 * 
 * 根据数组下标删除对应项
 * 
 * @param {array} data 作用数组
 * 
 * @param {number} index 数组项的下标
 * 
 * @return {boolean} 如果删除成功则返回 true , 否则返回　false 
 * 
 */

if(index >= 0 && index < data.length){

    data.splice(index , 1) ;

    return true ;
}

return false ;

    }

                return function(data , index){

                    

                    

                    return main.call(this , data , index) ;
                } ;

            })();

exports['src::is.number'] = (() =>{

                let isType;

                let var_init_locked_1568695724040;

                

                

                function main(data){

        /**
 * 
 * 判定数据是否为数值类型
 * 
 * @import is.type
 * 
 * @param {mixed} data 检验数据
 * 
 * @return {boolean} 如果给定值为数值类型则返回 true , 否则返回 false 
 * 
 */

return isType(data , 'number') && isFinite(data);

    }

                return function(data){

                    
        if(!var_init_locked_1568695724040){

            isType = include('is.type');

            var_init_locked_1568695724040 = true ;
        }
        

                    

                    return main.call(this , data) ;
                } ;

            })();

exports['src::is.boolean'] = (() =>{

                let isType;

                let var_init_locked_1568695724040;

                

                

                function main(data){

        /**
 * 
 * 判定数据是否为布尔类型
 * 
 * @import is.type
 * 
 * @param {mixed} data 检验数据
 * 
 * @return {boolean} 如果给定值为布尔类型则返回 true , 否则返回 false 
 * 
 */

return isType(data , 'boolean') ;

    }

                return function(data){

                    
        if(!var_init_locked_1568695724040){

            isType = include('is.type');

            var_init_locked_1568695724040 = true ;
        }
        

                    

                    return main.call(this , data) ;
                } ;

            })();

exports['src::is.date'] = (() =>{

                

                

                

                

                function main(data){

        /**
 * 
 * 判定数据是否为日期类型
 * 
 * @param {mixed} data 检验数据
 * 
 * @return {boolean} 如果给定值为日期类型则返回 true , 否则返回 false 
 * 
 */


 return Object.prototype.toString.call(data) === '[object Date]' ;

    }

                return function(data){

                    

                    

                    return main.call(this , data) ;
                } ;

            })();

exports['src::data.type'] = (() =>{

                let isObject,isArray,isString,isNumber,isBoolean,isDate;

                let var_init_locked_1568695724045;

                

                

                function main(data){

        /**
 * 
 * 返回数据类型描述
 * 
 * @import isObject from is.object.simple
 * 
 * @import is.array
 * 
 * @import is.string
 * 
 * @import is.number
 * 
 * @import is.boolean
 * 
 * @import is.date
 * 
 * @param {mixed} data 数据
 * 
 * @return {string} 数据类型描述 
 * 
 */

 if(isObject(data)){

    return 'object' ;
 }

 if(isArray(data)){

    return 'array' ;
 }

 if(isNumber(data)){

   return 'number' ;
 }

 if(isBoolean(data)){

   return 'boolean' ;
 }

 if(isDate(data)){

  return 'date' ;
  
 }

 return 'other' ;

    }

                return function(data){

                    
        if(!var_init_locked_1568695724045){

            isObject = include('is.object.simple');
isArray = include('is.array');
isString = include('is.string');
isNumber = include('is.number');
isBoolean = include('is.boolean');
isDate = include('is.date');

            var_init_locked_1568695724045 = true ;
        }
        

                    

                    return main.call(this , data) ;
                } ;

            })();

exports['src::data.equals'] = (() =>{

                let getType;

                let var_init_locked_1568695724049;

                

                

                /**
 * 
 * 匹配两个对象数据是否匹配
 * 
 * @import getType from data.type
 * 
 * @param {mixed} value1 第一个对象数据
 * 
 * @param {mixeds} value2 第二个对象数据
 * 
 * @return {boolean} 如果对象数据匹配则返回 true ， 否则返回 false
 * 
 */

 function main(value1 , value2){

    if(value1 === value2){

        return true ;
    }

    let type1 = getType(value1),
        type2 = getType(value2) ;

    if(type1 === type2){

        switch(type1){

            case 'object':

                return object_equals(value1 , value2) ;

            case 'array':

                return array_equals(value1 , value2) ;

            case 'date':

                return date_equals(value1 , value2) ;

            default:

                return base_equals(value1 , value2) ;
        }
    }

    return false ;
 }

 const {
    keys
 } = Object ;

 function object_equals(value1 , value2){

    let names1 = keys(value1),
        names2 = keys(value2);

    if(names1.length !== names2.length){

        return false ;
    }

    for(let name of names1){

        if(!names2.includes(name)){

            return false ;
        }

        if(!main(value1[name] , value2[name])){

            return false ;
        }
    }

    return true ;
 }

 function array_equals(value1 , value2){

    if(value1.length !== value2.length){

        return false ;

    }

    let len = value1.length ;

    for(let i = 0 ; i < len ; i ++){

        if(!main(value1[i] , value2[i])){

            return false ;
        }
    }

    return true ;
 }

 function date_equals(value1 , value2){

    return value1.getTime() === value2.getTime() ;
 }

 function base_equals(value1 , value2){

    return value1 === value2 ;
 }

                return function(value1 , value2){

                    
        if(!var_init_locked_1568695724049){

            getType = include('data.type');

            var_init_locked_1568695724049 = true ;
        }
        

                    

                    return main.call(this , value1 , value2) ;
                } ;

            })();

exports['src::array.indexOf'] = (() =>{

                let equals;

                let var_init_locked_1568695724050;

                

                

                function main(data , checkItem){

        
/**
 * 
 * 返回指定项目对应的下标
 * 
 * @import equals from data.equals
 * 
 * @param {mixed} data 数组
 * 
 * @param {mixed} checkItem 检测项
 * 
 * @return {Number} 数组下标
 * 
 */

 let {
     length
 } = data ;

for(let i = 0 ; i < length ; i ++){

    if(equals(data[i] , checkItem)){

        return i ;
    }
 }

 return -1 ;

    }

                return function(data , checkItem){

                    
        if(!var_init_locked_1568695724050){

            equals = include('data.equals');

            var_init_locked_1568695724050 = true ;
        }
        

                    

                    return main.call(this , data , checkItem) ;
                } ;

            })();

exports['src::array.remove'] = (() =>{

                let remove,indexOf;

                let var_init_locked_1568695724051;

                

                

                function main(data , ...items){

        
/**
 * 
 * 在数组中去除项目
 * 
 * @import remove from array.remove.index
 * 
 * @import indexOf from array.indexOf
 * 
 * @param {array} data 数组
 * 
 * @param {mixed} [...items] 项目
 * 
 */

 for(let item of items){

    remove(data , indexOf(data , item)) ;
 }

    }

                return function(data , ...items){

                    
        if(!var_init_locked_1568695724051){

            remove = include('array.remove.index');
indexOf = include('array.indexOf');

            var_init_locked_1568695724051 = true ;
        }
        

                    

                    return main.call(this , data , ...items) ;
                } ;

            })();

exports['src::array.insert'] = (() =>{

                

                

                

                

                function main(data , index , ...items){

        
/**
 * 
 * 在指定下标处插入项
 * 
 * @param {array} data 数组
 * 
 * @param {number} index 数组下标
 * 
 * @param {mixed} [...items] 项
 * 
 */

 data.splice(index , 0 , ...items) ;

    }

                return function(data , index , ...items){

                    

                    

                    return main.call(this , data , index , ...items) ;
                } ;

            })();

exports['src::is.data.model'] = (() =>{

                let Model;

                let var_init_locked_1568695724052;

                

                

                function main(data){

        
/**
 * 
 * 判定数据是否为数据模型对象
 * 
 * @import Model from data.model value
 * 
 * @param {mixed} data 检测数据
 * 
 * @return {boolean} 如果检测为数据模型则返回 true , 否则返回 false 
 * 
 */

 return data instanceof Model ;

    }

                return function(data){

                    
        if(!var_init_locked_1568695724052){

            Model = include('data.model')();

            var_init_locked_1568695724052 = true ;
        }
        

                    

                    return main.call(this , data) ;
                } ;

            })();

exports['src::array.clone'] = (() =>{

                

                

                

                

                function main(data){

        
/**
 * 
 * 对于数组进行拷贝
 * 
 * @param {array} data 数组
 * 
 * 
 */

 return data.slice(0) ;

    }

                return function(data){

                    

                    

                    return main.call(this , data) ;
                } ;

            })();

exports['src::data.recordset'] = (() =>{

                let remove,removeIndex,insert,from,isModel,isObject,isDefined,isString,isFunction,clone;

                let var_init_locked_1568695724057;

                let var_class_1568695724057;

                

                return function(store){

                    
        if(!var_init_locked_1568695724057){

            remove = include('array.remove');
removeIndex = include('array.remove.index');
insert = include('array.insert');
from = include('array.from');
isModel = include('is.data.model');
isObject = include('is.object.simple');
isDefined = include('is.defined');
isString = include('is.string');
isFunction = include('is.function');
clone = include('array.clone');

            var_init_locked_1568695724057 = true ;
        }
        

                    
        if(!var_class_1568695724057){

            /**
 * 
 * 数据记录集合
 * 
 * @import remove from array.remove
 * 
 * @import removeIndex from array.remove.index
 * 
 * @import insert from array.insert
 * 
 * @import from from array.from
 * 
 * @import isModel from is.data.model
 * 
 * @import isObject from is.object.simple
 * 
 * @import is.defined
 * 
 * @import is.string
 * 
 * @import is.function
 * 
 * @import clone from array.clone
 * 
 * @param {data.Store} store 存储器
 * 
 */

 class main{

    constructor(store){

        let me = this ;

        me.recordMap = new Map() ;

        me.recordData = [] ;

        me.store = store ;
    }

    /**
     * 
     * 转换成数组输出
     * 
     * @return {array}
     * 
     */
    toArray(){

        return clone(this.recordData) ;
    }

    /**
     * 
     * 根据编号获得数据记录
     * 
     * @param {mixed} id 数据记录编号
     * 
     * @return {data.Model} 
     * 
     */
    getById(id){

        let {
            recordMap
        } = this ;

        return recordMap.get(id) ;
    }

    /**
     * 
     * 根据数据记录获得在存储器中的位置
     * 
     * @param {data.Model} record 数据记录
     * 
     * @return {number} 数据记录位置
     * 
     */
    indexOf(record){

        let {
            recordData
        } = this ;

        return recordData.indexOf(record) ;
    }

    /**
     * 
     * 查寻数据记录
     * 
     * @param {mixed} property 属性名称
     *  
     * @param {mixed} [value] 属性值
     * 
     * @return {array} 数据记录集合
     *  
     */
    findRecords(property , value){

        let {
            recordData:records
        } = this ;

        if(isString(property)){

            let result = [] ;

            for(let record of records){

                if(record.get(property) === value){

                    result.push(record) ;
                }
            }

            return result ;

        }else if(isFunction(property)){

            let result = [] ;

            for(let record of records){

                if(property.call(value , record) === true){

                    result.push(record) ;
                }
            }

            return result ;

        }
    }

    /**
     * 
     * 清理
     * 
     */
    clear(){

        let {
            recordMap,
            recordData
        } = this ;

        recordMap.clear() ;

        recordData.length = 0 ;
    }

    /**
     * 
     * @param {function} fn 循环执行的函数
     *  
     * @param {mixed} scope 
     */
    each(fn , scope){

        let {
            recordData
        } = this ;

        for(let record of recordData){

            fn.call(scope , record) ;
        }
    }

    /**
     * 
     * 添加数据记录
     * 
     * @param {mixed} records 数据记录
     * 
     * 
     */
    add(records){

        let me = this,
        {
            recordData
        } = me ;

        records = getRecords.call(me , records) ;

        recordData.push(...records) ;

        resetRecordData(recordData) ;

        return records ;
    }
     /**
     * 
     * 插入数据记录
     * 
     * @param {mixed} records 数据记录
     * 
     * 
     */
    insert(index , records){

        let me = this,
        {
            recordData
        } = me ;

        records = getRecords.call(me , records) ;

        insert(recordData , index , ...records) ;

        resetRecordData(recordData) ;

        return records ;
    }
     /**
     * 
     * 删除数据记录
     * 
     * @param {mixed} records 数据记录
     * 
     * 
     */
    remove(records){

        records = from(records) ;

        let {
            recordMap,
            recordData
        } = this,
        removeRecords = [];

        for(let record of records){

            let {
                id
            } = record ;

            if(recordMap.has(id)){

                recordMap.delete(id) ;

                remove(recordData , record) ;

                record.unbindStore() ;

                removeRecords.push(record) ;
            }
        }

        return removeRecords ;
    }
 }

 /**
  * 
  * 待处理的数据记录
  * 
  * @param {mixed} records 数据记录
  * 
  */
 function getRecords(records){

    records = from(records) ;

    let {
        recordMap,
        recordData,
        store
    } = this,
    result = [];

    for(let record of records){

        if(isObject(record)){

            record = store.createRecord(record) ;
        }

        if(isModel(record)){

            let {
                id
            } = record ;

            if(recordMap.has(id)){

                record = recordMap.get(id) ;
    
                removeRecord(recordData , record) ;

                record.set(record.data) ;
            
            }else{

                recordMap.set(id , record) ;

                if(record.isBindStore && record.store !== store){

                    continue ;
                }

                record.bindStore(store) ;
            }

            result.push(record) ;
        }
    }

    return result ;
 }

 function removeRecord(recordData , record){

    let index = recordData.indexOf(record) ;

    if(index !== -1){

        recordData[index] = undefined ;
    }
 }

 function resetRecordData(recordData){

    let index ;

    while((index = recordData.indexOf(undefined)) !== -1){

        removeIndex(recordData , index) ;
    }
 }


            var_class_1568695724057 = class extends main{

                static get ZBEE_CLASS(){

                    return true ;
                }

                get ZBEE_CURRENT_CLASS(){

                    return var_class_1568695724057 ;
                }

            } ;
        }
        

                    return new var_class_1568695724057(store);
                } ;

            })();

exports['src::data.store.base'] = (() =>{

                let get,create,assign,createProxy,isMemoryProxy,createReader,createRecordset;

                let var_init_locked_1568695724058;

                let var_class_1568695724058;

                

                return function(){

                    
        if(!var_init_locked_1568695724058){

            get = include('data.model.get');
create = include('data.model.create');
assign = include('object.assign');
createProxy = include('data.proxy.create');
isMemoryProxy = include('is.proxy.memory');
createReader = include('data.reader.json');
createRecordset = include('data.recordset');

            var_init_locked_1568695724058 = true ;
        }
        

                    
        if(!var_class_1568695724058){

            
/**
 * 
 * 数据存储器
 * 
 * @import get from data.model.get
 * 
 * @import create from data.model.create
 * 
 * @import assign from object.assign
 * 
 * @import createProxy from data.proxy.create
 * 
 * @import isMemoryProxy from is.proxy.memory
 * 
 * @import createReader from data.reader.json
 * 
 * @import createRecordset from data.recordset
 * 
 * @class
 * 
 */

class main{

    createRecord(data){

        let records = this.reader(data) ;

        if(records.length){

            return records[0] ;
        }
    }

    onProxyRead(proxy , records){

        let me = this,
        {
            recordset
        } = me;

        recordset.add(records) ;

        me.fireEvent('load' , records) ;
    }
}

 

            var_class_1568695724058 = class extends main{

                static get ZBEE_CLASS(){

                    return true ;
                }

                get ZBEE_CURRENT_CLASS(){

                    return var_class_1568695724058 ;
                }

            } ;
        }
        

                    return var_class_1568695724058;
                } ;

            })();

exports['src::object.link'] = (() =>{

                let isFunction;

                let var_init_locked_1568695724059;

                

                

                function main(dest , source , names){

        /**
 * 
 * 将对象的方法或者属性进行链接
 * 
 * @import is.function
 * 
 * @param {mixed} dest 目标对象
 * 
 * @param {mixed} source 来源对象
 * 
 * @param {array} names 字段名称集合
 * 
 */

 for(let name of names){

    let value = source[name] ;

    if(isFunction(value)){

        dest[name] = (...args) => source[name](...args) ;
    
    }else{

        Object.defineProperty(dest , name , {

            set:value => source[name] = value,

            get:() => source[name]

        }) ;
    }
 }

    }

                return function(dest , source , names){

                    
        if(!var_init_locked_1568695724059){

            isFunction = include('is.function');

            var_init_locked_1568695724059 = true ;
        }
        

                    

                    return main.call(this , dest , source , names) ;
                } ;

            })();

exports['src::data.store.constructor'] = (() =>{

                let create,get,assign,createProxy,isMemoryProxy,createReader,createRecordset,link;

                let var_init_locked_1568695724062;

                

                

                function main({proxy , data , autoLoad , fields , model}){

        
/**
 * 
 * 初始化数据存储器
 * 
 * @import create from data.model.create
 * 
 * @import get from data.model.get
 * 
 * @import assign from object.assign
 * 
 * @import createProxy from data.proxy.create
 * 
 * @import isMemoryProxy from is.proxy.memory
 * 
 * @import createReader from data.reader.json
 * 
 * @import createRecordset from data.recordset
 * 
 * @import link from object.link
 * 
 * @param {object} config 配置
 * 
 * @param {object} [config.proxy = {}] 数据代理
 * 
 * @param {mixed} [config.data] 初始数据
 * 
 * @param {boolean} [config.autoLoad = false] 自动加载
 * 
 * @param {array} [config.fields] 数据字段定义
 * 
 * @param {data.Model} [config.model] 数据模型
 * 
 * 
 */

if(fields){

    model = create({
        fields
    }) ;

}

if(model){

    model = get(model) ;

}

let me = this ;

me.proxy = createProxy(assign({
    type:'memory',
    model,
    reader:{
        type:'json'
    },
    listeners:{
        read:'onProxyRead',
        scope:me
    }
} , proxy)) ;

let recordset = me.recordset = createRecordset(me) ;

if(data){

    let {
        proxy
    } = me ;

    if(isMemoryProxy(proxy)){

        proxy.read(data)
    }

}else if(autoLoad){

    me.load() ;
}

me.reader = createReader({
    model
}) ;

link(me , recordset , [
    'indexOf',
    'findRecords',
    'getById'
]) ;

    }

                return function({proxy = {} , data , autoLoad = false , fields , model}){

                    
        if(!var_init_locked_1568695724062){

            create = include('data.model.create');
get = include('data.model.get');
assign = include('object.assign');
createProxy = include('data.proxy.create');
isMemoryProxy = include('is.proxy.memory');
createReader = include('data.reader.json');
createRecordset = include('data.recordset');
link = include('object.link');

            var_init_locked_1568695724062 = true ;
        }
        

                    

                    return main.call(this , {proxy , data , autoLoad , fields , model}) ;
                } ;

            })();

exports['src::data.store.add'] = (() =>{

                

                

                

                

                function main(records , isFireEvent){

        /**
 * 
 * 插入记录
 * 
 * @param {mixed} records 数据记录
 * 
 * @param {boolean} [isFireEvent = true] 是否触发插入事件
 * 
 */

let me = this,
 {
   recordset
 } = me ;

 records = recordset.add(records) ;

 if(records.length){

    if(isFireEvent){

      me.fireEvent('add' , records) ;
    }
 }

 return records ;

    }

                return function(records , isFireEvent = true){

                    

                    

                    return main.call(this , records , isFireEvent) ;
                } ;

            })();

exports['src::data.store.insert'] = (() =>{

                

                

                

                

                function main(index , records , isFireEvent){

        
/**
 * 
 * 插入记录
 * 
 * @param {number} index 插入位置
 * 
 * @param {mixed} records 数据记录
 * 
 * @param {boolean} [isFireEvent = true] 是否触发插入事件
 * 
 */

 let me = this,
 {
   recordset
 } = me ;

 records = recordset.insert(index , records) ;

 if(records.length){

    if(isFireEvent){

      me.fireEvent('insert' , index , records) ;
    }
 }

 return records ;

    }

                return function(index , records , isFireEvent = true){

                    

                    

                    return main.call(this , index , records , isFireEvent) ;
                } ;

            })();

exports['src::data.store.remove'] = (() =>{

                let remove,from;

                let var_init_locked_1568695724068;

                

                

                function main(records , isFireEvent){

        
/**
 * 
 * 删除记录
 * 
 * @import remove from array.remove
 * 
 * @import from from array.from
 * 
 * @param {mixed} records 数据记录
 * 
 * @param {boolean} [isFireEvent = true] 是否触发删除事件
 * 
 */

 let me = this,
 {
    recordset
 } = me;

 records = recordset.remove(records) ;

 if(records.length && isFireEvent){

   me.fireEvent('remove' , records) ;
 }

 return records ;






    }

                return function(records , isFireEvent = true){

                    
        if(!var_init_locked_1568695724068){

            remove = include('array.remove');
from = include('array.from');

            var_init_locked_1568695724068 = true ;
        }
        

                    

                    return main.call(this , records , isFireEvent) ;
                } ;

            })();

exports['src::data.store.load'] = (() =>{

                

                

                

                

                function main(options , isClear){

        
/**
 * 
 * 加载数据
 * 
 * @param {mixed} options 数据或者配置
 * 
 * @param {boolean} [isClear = true] 是否在加载前清除
 * 
 */

let me = this,
{
    proxy
} = me;

if(isClear){

    me.clear() ;
}

proxy.read(options) ;

    }

                return function(options , isClear = true){

                    

                    

                    return main.call(this , options , isClear) ;
                } ;

            })();

exports['src::data.store.clear'] = (() =>{

                

                

                

                

                function main(){

        
/**
 * 
 * 清理
 * 
 * 
 */

let me = this,
    {
        recordset
    } = me ;

recordset.clear() ;

me.fireEvent('clear') ;

    }

                return function(){

                    

                    

                    return main.call(this ) ;
                } ;

            })();

exports['src::data.store.get.id'] = (() =>{

                

                

                

                

                function main(id){

        
/**
 * 
 * 根据编号获取记录
 * 
 * @param {mixed} id 记录编号
 * 
 * @return {data.Model} 数据记录 
 * 
 */

 let {
    recordset
 } = this ;

 return recordset.getById(id) ;

    }

                return function(id){

                    

                    

                    return main.call(this , id) ;
                } ;

            })();

exports['src::data.store'] = (() =>{

                let mixin_1568695723634__1,extend,constructor,method_add,method_insert,method_remove,method_load,method_clear,method_getById,isObject;

                let var_init_locked_1568695724071;

                let var_class_1568695724071;

                

                return function(){

                    
        if(!var_init_locked_1568695724071){

            mixin_1568695723634__1 = include('mixin.observable');
extend = include('src::data.store.base')();
constructor = include('src::data.store.constructor');
method_add = include('src::data.store.add');
method_insert = include('src::data.store.insert');
method_remove = include('src::data.store.remove');
method_load = include('src::data.store.load');
method_clear = include('src::data.store.clear');
method_getById = include('src::data.store.get.id');
isObject = include('is.object.simple');

            var_init_locked_1568695724071 = true ;
        }
        

                    
        if(!var_class_1568695724071){

            class main extends mixins({extend , mixins:[include('mixin.observable')]}){

            

            

            constructor(...args){

            super(...args) ;

            constructor.apply(this , args) ;

        }

            add(...args){

            return method_add.apply(this , args) ;

        }
insert(...args){

            return method_insert.apply(this , args) ;

        }
remove(...args){

            return method_remove.apply(this , args) ;

        }
load(...args){

            return method_load.apply(this , args) ;

        }
clear(...args){

            return method_clear.apply(this , args) ;

        }
getById(...args){

            return method_getById.apply(this , args) ;

        }

            

        }

            var_class_1568695724071 = class extends main{

                static get ZBEE_CLASS(){

                    return true ;
                }

                get ZBEE_CURRENT_CLASS(){

                    return var_class_1568695724071 ;
                }

            } ;
        }
        

                    return var_class_1568695724071;
                } ;

            })();

exports['src::data.store.create'] = (() =>{

                let create,srcDataStore;

                let var_init_locked_1568695724072;

                

                

                function main(store){

        
/**
 * 
 * 创建新的数据存储器
 * 
 * @import create from class.create.option
 * 
 * @import ....store
 * 
 * @param {mixed} [store] 数据代理
 * 
 * @return {mixed} 数据代理 
 * 
 */

return create('data.store' , store) ;



    }

                return function(store){

                    
        if(!var_init_locked_1568695724072){

            create = include('class.create.option');
srcDataStore = include('src::data.store');

            var_init_locked_1568695724072 = true ;
        }
        

                    

                    return main.call(this , store) ;
                } ;

            })();

exports['src::mixin.region.xy.anchor.get'] = (() =>{

                

                

                

                

                function main(anchor){

        
/**
 * 
 * 计算当前区域锚点坐标
 * 
 * @param {string} [anchor = 'tl'] 锚点信息
 * 
 * @return {object} 坐标值 
 * 
 */

let {
    x,
    y,
    width,
    height
} = this ;

switch(anchor){

   case 'c':

        return {
            x:x + width / 2,
            y:y + height / 2
        } ;

   case 'tl':

       return {
           x,
           y
       } ;

   case 'tr':

       return {
           x:x + width,
           y
       } ;

   case 'br':

       return {
           x:x + width,
           y:y + height
       } ;

   case 'bl':

       return {
           x,
           y:y + height
       } ;

   case 'r':

       return {
           x:x + width,
           y:y + height / 2
       } ;

   case 'l':

       return {
           x,
           y:y + height / 2
       } ;

   case 't':

       return {
           x:x + width / 2,
           y 
       } ;

   case 'b':

       return {
           x:x + width / 2,
           y:y + height
       }
}

    }

                return function(anchor = 'tl'){

                    

                    

                    return main.call(this , anchor) ;
                } ;

            })();

exports['src::mixin.region.xy.anchor.set'] = (() =>{

                let isDefined;

                let var_init_locked_1568695724077;

                

                

                function main(xy , anchor){

        
/**
 * 
 * 计算当前区域锚点坐标
 * 
 * @import is.defined
 * 
 * @param {object} xy 设置坐标
 * 
 * @param {string} [anchor = 'tl'] 锚点信息
 * 
 * @return {object} 坐标值 
 * 
 */

let {
    x:originX,
    y:originY,
    width,
    height
} = this,
{
    x,
    y
} = xy,
defaultXY = {};

if(!isDefined(x)){

    defaultXY.x = originX ;
}

if(!isDefined(y)){

    defaultXY.y = originY ;
}

const {
    assign
} = Object ;

switch(anchor){

   case 'c':

        return assign({
            x:x - width / 2,
            y:y - height / 2
        } , defaultXY) ;

   case 'tl':

       return assign({
           x,
           y
       } , defaultXY) ;

    case 'tr':

        return assign({
            x:x - width,
            y
        } , defaultXY) ;
    
    case 'br':
    
        return assign({
            x:x - width,
            y:y - height
        } , defaultXY) ;
    
    case 'bl':
    
        return assign({
            x,
            y:y - height
        } , defaultXY) ;

   case 'r':

       return assign({
           x:x - width,
           y:y - height / 2
       } , defaultXY) ;

   case 'l':

       return assign({
           x,
           y:y - height / 2
       } , defaultXY) ;

   case 't':

       return assign({
           x:x - width / 2,
           y 
       } , defaultXY) ;

   case 'b':

       return assign({
           x:x - width / 2,
           y:y - height
       } , defaultXY) ;
}

    }

                return function(xy , anchor = 'tl'){

                    
        if(!var_init_locked_1568695724077){

            isDefined = include('is.defined');

            var_init_locked_1568695724077 = true ;
        }
        

                    

                    return main.call(this , xy , anchor) ;
                } ;

            })();

exports['src::mixin.region'] = (() =>{

                let method_getAnchorXY,method_setAnchorXY,isObject;

                let var_init_locked_1568695724078;

                

                

                function main(extend){

                        return class extends extend{

                            
                
                            
                
                            
                
                            getAnchorXY(...args){

            return method_getAnchorXY.apply(this , args) ;

        }
setAnchorXY(...args){

            return method_setAnchorXY.apply(this , args) ;

        }
                
                            
                
                        }

                }

                return function(extend){

                    
        if(!var_init_locked_1568695724078){

            method_getAnchorXY = include('src::mixin.region.xy.anchor.get');
method_setAnchorXY = include('src::mixin.region.xy.anchor.set');
isObject = include('is.object.simple');

            var_init_locked_1568695724078 = true ;
        }
        

                    

                    return main.call(this , extend) ;
                } ;

            })();

exports['src::is.object.empty'] = (() =>{

                

                

                

                

                function main(data){

        
/**
 * 
 * 判断对象是否没有字段
 * 
 * @param {mixed} data 检测数据
 * 
 * @return {boolean} 如果没有字段则返回 true , 否则返回 false
 * 
 */

 return Object.keys(data).length === 0 ;

    }

                return function(data){

                    

                    

                    return main.call(this , data) ;
                } ;

            })();

exports['src::string.capitalize'] = (() =>{

                

                

                

                

                function main(data){

        
/**
 * 
 * 实现首字母大写
 * 
 * @param {string} data 字符串
 * 
 * @return {string} 首字母大写的字符串 
 * 
 */

 return `${data.charAt(0).toUpperCase()}${data.substr(1)}` ;


    }

                return function(data){

                    

                    

                    return main.call(this , data) ;
                } ;

            })();

exports['src::object.property.prefix'] = (() =>{

                

                

                

                let var_once_value_1568695724081;

                function main(){

        /**
 * 
 * 生成缓存私有的字段前缀
 * 
 * @once
 * 
 */

return `$private-${Date.now()}-`;

    }

                return function(){

                    

                    

                    
        if(var_once_value_1568695724081){

            return var_once_value_1568695724081 ;

        }
        return var_once_value_1568695724081 = main.call(this ) ;
        
                } ;

            })();

exports['src::object.property.define'] = (() =>{

                let capitalize,getPrefix,isDefined,isFunction;

                let var_init_locked_1568695724084;

                

                

                function main(target , name , {value , writeOnce}){

        /**
 * 
 * 定义一个缓存属性
 * 
 * @import capitalize from string.capitalize
 * 
 * @import getPrefix from object.property.prefix
 * 
 * @import is.defined
 * 
 * @import is.function
 * 
 * @param {object} target 目标对象
 * 
 * @param {string} name 属性名称
 * 
 * @param {object} [options = {}] 属性配置
 * 
 * @param {string} [options.value = false] 属性是否是值类型
 * 
 * @param {string} [options.writeOnce = false] 属性只能被写一次
 * 
 */

 let prefix = getPrefix(),
     optionValue = value;


 Object.defineProperty(target , name , {
    configurable:true,
    enumerable:true,
    set(value){

        let me = this,
        innerName = `${prefix}${name}` ;

        if(writeOnce){

            let oldValue = me[innerName] ;

            if(isDefined(oldValue)){

                return ;
            }
        }

        if(optionValue){

            me[innerName] = value ;
        
        }else{

            let methodName = `set${capitalize(name)}`;
    
            if(methodName in me){
    
                me[propertyName] = me[methodName](value) ;
            }
        }
    },
    get(){
    
        let me = this,
            innerName = `${prefix}${name}`,
            method = me[`get${capitalize(name)}`];

        if(optionValue){

            return me[innerName] ;
        }

        if(!me.hasOwnProperty(innerName) && method){

            if(isFunction(method) && method.length === 0){

                return me[innerName] = method.call(me) ;
            }
        }

        return me[innerName] ;
    }
 }) ;

    }

                return function(target , name , {value = false , writeOnce = false} = {}){

                    
        if(!var_init_locked_1568695724084){

            capitalize = include('string.capitalize');
getPrefix = include('object.property.prefix');
isDefined = include('is.defined');
isFunction = include('is.function');

            var_init_locked_1568695724084 = true ;
        }
        

                    

                    return main.call(this , target , name , {value , writeOnce}) ;
                } ;

            })();

exports['src::object.properties.define'] = (() =>{

                let defineProperty,isArray;

                let var_init_locked_1568695724085;

                

                

                function main(target , config){

        /**
 * 
 * 定义一组缓存属性
 * 
 * @import defineProperty from object.property.define
 *
 * @import is.array
 * 
 * @param {object} target 目标对象
 * 
 * @param {string[]|object} config 属性名称
 * 
 */

 if(isArray(config)){

   for(let name of config){

      defineProperty(target , name) ;
   }

 }else{

   let names = Object.keys(config) ;

   for(let name of names){

      defineProperty(target , name , config[name]) ;
   }
 }

    }

                return function(target , config){

                    
        if(!var_init_locked_1568695724085){

            defineProperty = include('object.property.define');
isArray = include('is.array');

            var_init_locked_1568695724085 = true ;
        }
        

                    

                    return main.call(this , target , config) ;
                } ;

            })();

exports['src::data.model.node.tree.base'] = (() =>{

                let Model,insert,remove,region,isEmpty,defineProperties;

                let var_init_locked_1568695724086;

                let var_class_1568695724086;

                

                return function(){

                    
        if(!var_init_locked_1568695724086){

            Model = include('data.model')();
insert = include('array.insert');
remove = include('array.remove');
region = include('mixin.region');
isEmpty = include('is.object.empty');
defineProperties = include('object.properties.define');

            var_init_locked_1568695724086 = true ;
        }
        

                    
        if(!var_class_1568695724086){

            
/**
 * 
 * 树型数据模型
 * 
 * @import Model from data.model value
 * 
 * @import insert from array.insert
 * 
 * @import remove from array.remove
 * 
 * @import region from mixin.region
 * 
 * @import isEmpty from is.object.empty
 * 
 * @import defineProperties from object.properties.define
 * 
 * @param {mixed} data 数据
 * 
 * @class
 * 
 */

 class main extends Model{

    constructor(config){

        super(config) ;

        defineProperties(this , [
            'parentNode',
            'children'
        ]) ;
    }

    /**
     * 
     * 返回父节点
     * 
     * @return {data.model.node.Tree} 父节点
     * 
     */
    getParentNode(){

        let me = this,
        {
            store
        } = me ;

        return store.getById(me.get('parentId')) ;
    }
    /**
     * 
     * 返回子节点
     * 
     * @return {array} 父节点
     * 
     */
    getChildren(){

        let {
            store,
            id
        } = this ;
        
        return store.findRecords('parentId' , id) ;
    }
 }

            var_class_1568695724086 = class extends main{

                static get ZBEE_CLASS(){

                    return true ;
                }

                get ZBEE_CURRENT_CLASS(){

                    return var_class_1568695724086 ;
                }

            } ;
        }
        

                    return var_class_1568695724086;
                } ;

            })();

exports['src::data.model.node.tree.configurations'] = (() =>{

                

                

                

                

                function main(){

        
/**
 * 
 * 字段配置
 * 
 * @return {array} 
 * 
 */

return [
    'id',
    'parentId',
    {
        name:'expanded',
        persistent:true,
        defaultValue:false
    },{
        name:'selected',
        persistent:true,
        defaultValue:false
    },{
        name:'hidden',
        persistent:true,
        defaultValue:true
    },
    {
        name:'leaf',
        defaultValue:false
    }
];

    }

                return function(){

                    

                    

                    return main.call(this ) ;
                } ;

            })();

exports['src::data.model.node.tree.node.selected'] = (() =>{

                

                

                

                

                function main(){

        
/**
 * 
 * 节点选定状态
 * 
 * @return {boolean} 如果节点选定，则返回 true , 否则返回 false 
 * 
 */

return this.get('selected') ;

    }

                return function(){

                    

                    

                    return main.call(this ) ;
                } ;

            })();

exports['src::data.model.node.tree.node.sibling'] = (() =>{

                

                

                

                

                function main(node , offset){

        
/**
 * 
 * 返回兄弟节点
 * 
 * @param {data.model.node.Tree} node 节点
 * 
 * @param {number} offset 偏移量
 * 
 * @return {data.model.node.Tree} 节点 
 * 
 */

let me = this,
{
    parentNode
} = me ;

if(parentNode){

    let {
        children
    } = parentNode;

    return children[children.indexOf(me) + offset] ;
}

    }

                return function(node , offset){

                    

                    

                    return main.call(this , node , offset) ;
                } ;

            })();

exports['src::data.model.node.tree.node.sibling.previous'] = (() =>{

                let getSiblingNode;

                let var_init_locked_1568695724089;

                

                

                function main(){

        
/**
 * 
 * 上同级节点
 * 
 * @import getSiblingNode from ....sibling
 * 
 * @return {data.model.node.Tree} 节点
 * 
 */

 return getSiblingNode(this , -1) ;

    }

                return function(){

                    
        if(!var_init_locked_1568695724089){

            getSiblingNode = include('src::data.model.node.tree.node.sibling');

            var_init_locked_1568695724089 = true ;
        }
        

                    

                    return main.call(this ) ;
                } ;

            })();

exports['src::data.model.node.tree.node.sibling.next'] = (() =>{

                let getSiblingNode;

                let var_init_locked_1568695724090;

                

                

                function main(){

        
/**
 * 
 * 下同级节点
 * 
 * @import getSiblingNode from ....sibling
 * 
 * @return {data.model.node.Tree} 节点
 * 
 */

return getSiblingNode(this , 1) ;

    }

                return function(){

                    
        if(!var_init_locked_1568695724090){

            getSiblingNode = include('src::data.model.node.tree.node.sibling');

            var_init_locked_1568695724090 = true ;
        }
        

                    

                    return main.call(this ) ;
                } ;

            })();

exports['src::data.model.node.tree.node.first'] = (() =>{

                

                

                

                

                function main(){

        
/**
 * 
 * 首个子节点
 * 
 * @return {data.model.node.Tree} 节点引用 
 * 
 */

let {
    children
} = this;

if(children.length){

    return children[0] ;
}

    }

                return function(){

                    

                    

                    return main.call(this ) ;
                } ;

            })();

exports['src::data.model.node.tree.node.last'] = (() =>{

                

                

                

                

                function main(){

        
/**
 * 
 * 返回最后一个子节点
 * 
 * @return {data.model.node.Tree} 节点引用 
 * 
 */

let {
    children
} = this;

if(children.length){

    return children[children.length - 1] ;
}

    }

                return function(){

                    

                    

                    return main.call(this ) ;
                } ;

            })();

exports['src::data.model.node.tree.expanded'] = (() =>{

                

                

                

                

                function main(){

        
/**
 * 
 * 节点展开状态
 * 
 * @return {boolean} 如果节点展开则返回 true , 否则返回 false 
 * 
 */

return this.get('expanded') ;

    }

                return function(){

                    

                    

                    return main.call(this ) ;
                } ;

            })();

exports['src::data.model.node.tree.nodes.synchronized'] = (() =>{

                

                

                

                

                function main(){

        
/**
 * 
 * 当前节点是否同步
 * 
 * @return {boolean} 如果返回 true , 则表示已同步，否则表示未同步 
 * 
 */

let {
    isLeaf,
    children
} = this ;

return !isLeaf && children.length !== 0 ;

    }

                return function(){

                    

                    

                    return main.call(this ) ;
                } ;

            })();

exports['src::data.model.node.tree.is.root'] = (() =>{

                

                

                

                

                function main(){

        
/**
 * 
 * 是否是根节点
 * 
 * @return {boolean} 如果为根节点则返回 true , 如果不是则返回 false 
 * 
 */

return !this.parentNode ;

    }

                return function(){

                    

                    

                    return main.call(this ) ;
                } ;

            })();

exports['src::data.model.node.tree.is.leaf'] = (() =>{

                

                

                

                

                function main(){

        
/**
 * 
 * 是否为叶子节点
 * 
 * @return {boolean} 如果是叶子节点则返回 true , 否则返回 false 
 * 
 */

return this.get('leaf') ;

    }

                return function(){

                    

                    

                    return main.call(this ) ;
                } ;

            })();

exports['src::data.model.node.tree.hidden'] = (() =>{

                

                

                

                

                function main(){

        
/**
 * 
 * 隐藏状态
 * 
 * @return {boolean} 如果返回 true ，则表示隐藏，如果返回 false , 则表示显示 
 * 
 */

return this.get('hidden') ;

    }

                return function(){

                    

                    

                    return main.call(this ) ;
                } ;

            })();

exports['src::math.region'] = (() =>{

                let region;

                let var_init_locked_1568695724100;

                let var_class_1568695724100;

                

                return function({x , y , width , height}){

                    
        if(!var_init_locked_1568695724100){

            region = include('mixin.region');

            var_init_locked_1568695724100 = true ;
        }
        

                    
        if(!var_class_1568695724100){

            
/**
 * 
 * 区域
 * 
 * @import region from mixin.region
 * 
 * @param {object} config 配置
 * 
 * @param {number} [config.x] 横坐标
 * 
 * @param {number} [config.y] 纵坐标
 * 
 * @param {number} [config.width] 宽度
 * 
 * @param {number} [config.height] 高度
 * 
 */

 class main extends mixins({
    mixins:[
      region
    ]
 }){

    constructor({
       x,
       y,
       width,
       height
    }){

      super() ;
       
      let me = this ;

      me.x = x ;

      me.y = y ;

      me.width = width ;

      me.height = height ;

    }

    get right(){

       return this.getAnchorXY('r').x ;
    }

    get bottom(){

      return this.getAnchorXY('b').y ;
    }

    contains(region){

      let me = this;
 
      return (region.x >= me.x && (region.right || region.x) <= me.right && region.y >= me.y && (region.bottom || region.y) <= me.bottom);
   }

   containTo(region){

      let me = this ;

      if(me.contains(region)){

         return {
            x:0,
            y:0
         };
      }

      let {
         x:currentX,
         y:currentY,
         right:currentRight,
         bottom:currentBottom
      } = me,
      offsetX = 0,
      offsetY = 0;

      let {
         x:regionX,
         y:regionY,
         right:regionRight,
         bottom:regionBottom
      } = region;

      if(regionX < currentX){

         offsetX = regionX - currentX ;
      }

      if(regionRight > currentRight){

         offsetX = regionRight - currentRight ;
      }

      if(regionY < currentY){

         offsetY = regionY - currentY ;
      }

      if(regionBottom > currentBottom){

         offsetY = regionBottom - currentBottom ;
      }

      return {
         x:offsetX,
         y:offsetY
      } ;
   }
 }

 

            var_class_1568695724100 = class extends main{

                static get ZBEE_CLASS(){

                    return true ;
                }

                get ZBEE_CURRENT_CLASS(){

                    return var_class_1568695724100 ;
                }

            } ;
        }
        

                    return new var_class_1568695724100({x , y , width , height});
                } ;

            })();

exports['src::data.model.node.tree.region'] = (() =>{

                let createRegion;

                let var_init_locked_1568695724101;

                

                

                function main(){

        
/**
 * 
 * 获得当前节点区域对象
 * 
 * @import createRegion from math.region
 * 
 * @return {math.Region} 节点区域 
 * 
 */

 let {
    x,
    y,
    width,
    height
 } = this ;

 return createRegion({
     x,
     y,
     width,
     height
 }) ;

    }

                return function(){

                    
        if(!var_init_locked_1568695724101){

            createRegion = include('math.region');

            var_init_locked_1568695724101 = true ;
        }
        

                    

                    return main.call(this ) ;
                } ;

            })();

exports['src::data.model.node.tree.depth'] = (() =>{

                

                

                

                

                function main(){

        
/**
 * 
 * 当前节点深度
 * 
 * @return {number} 深度
 * 
 */

let node = this,
parentNode,
depth = 0;

while(parentNode = node.parentNode){

    node = parentNode ;

    depth ++ ;
}

return depth ;

    }

                return function(){

                    

                    

                    return main.call(this ) ;
                } ;

            })();

exports['src::data.model.node.tree.height.scope.child'] = (() =>{

                

                

                

                

                function main(){

        
/**
 * 
 * 所有子节点的总范围高度
 * 
 * @return {number} 总高度 
 * 
 */

let me = this,
    {
        expanded
    } = me ;

if(!expanded){

    return 0 ;
}

let countHeight = 0,
    {
        children,
        store
    } = this ;

for(let {
    scopeHeight
} of children){

    countHeight += scopeHeight ;
}

countHeight += store.marginBottom * (children.length - 1);

return countHeight ;

    }

                return function(){

                    

                    

                    return main.call(this ) ;
                } ;

            })();

exports['src::data.model.node.tree.height.scope'] = (() =>{

                

                

                

                

                function main(){

        
/**
 * 
 * 获取当前节点的范围高度
 * 
 * @return {number} 高度 
 * 
 */

let me = this,
    {
        height,
        expanded
    } = me ;

if(!expanded){

    return height;
}

let {
    childCountScopeHeight,
} = me ;

return Math.max(height , childCountScopeHeight) ;

    }

                return function(){

                    

                    

                    return main.call(this ) ;
                } ;

            })();

exports['src::data.model.node.tree.nodes.descendant'] = (() =>{

                

                

                

                

                function main(){

        
/**
 * 
 * 获得所有子孙节点
 * 
 * @return {array} 节点集合 
 * 
 */
 
let me = this,
    {
        expanded
    } = me;

if(!expanded){

    return [] ;
}

let {
        children
    } = me,
    result = [];

for(let childNode of children){

    result.push(childNode , ...childNode.descendantNodes) ;

}

return result ;

    }

                return function(){

                    

                    

                    return main.call(this ) ;
                } ;

            })();

exports['src::data.model.node.tree.nodes.descendant.first'] = (() =>{

                

                

                

                

                function main(){

        
/**
 * 
 * 上边缘子孙节点
 * 
 * @return {array} 节点集合 
 * 
 */

let node = this,
    {
        expanded,
        hidden
    } = node;

if(hidden){

    return [] ;
}

if(!expanded){

    return [
        node
    ] ;
}

let nodes = [] ;

while(true){

    let {
        firstChildNode
    } = node ;

    if(firstChildNode){

        if(firstChildNode.hidden){

            break ;
        }
    
    }else{

        break ;
    }

    nodes.push(firstChildNode) ;

    node = firstChildNode ;

}

return nodes ;

    }

                return function(){

                    

                    

                    return main.call(this ) ;
                } ;

            })();

exports['src::data.model.node.tree.nodes.descendant.last'] = (() =>{

                

                

                

                

                function main(){

        
/**
 * 
 * 下边缘子孙节点
 * 
 * @return {array} 节点集合 
 * 
 */

let node = this,
    {
        expanded,
        hidden
    } = node;

if(hidden){

    return [] ;
}

if(!expanded){

    return [
        node
    ] ;
}

let nodes = [] ;

while(true){

    let {
        lastChildNode
    } = node ;

    if(lastChildNode){

        if(lastChildNode.hidden){

            break ;
        }
    
    }else{

        break ;
    }

    nodes.push(lastChildNode) ;

    node = lastChildNode ;

}

return nodes ;

    }

                return function(){

                    

                    

                    return main.call(this ) ;
                } ;

            })();

exports['src::data.model.node.tree.node.leaf.last'] = (() =>{

                

                

                

                

                function main(){

        
/**
 * 
 * 最后一个叶子节点
 * 
 * @return {data.model.node.Tree} 树型节点 
 * 
 */

let me = this,
{
    isLeaf
} = me ;

if(isLeaf){

    return me ;
}

let node = me.lastChildNode;

while(node && !node.isLeaf && node.synchronized){

    node = node.lastChildNode ;
}

return node ;

    }

                return function(){

                    

                    

                    return main.call(this ) ;
                } ;

            })();

exports['src::data.model.node.tree.nodes.leaf'] = (() =>{

                

                

                

                

                function main(){

        
/**
 * 
 * 当前节点下的所有叶子节点
 * 
 * @return {array} 节点集合 
 * 
 */

 let me = this,
 {
    expanded,
    hidden
 } = me;

 if(hidden){

   return [] ;
 }

 if(!expanded){

   return [
      me
   ] ;
 
 }

let leafNodes = [],
   {
      children
   } = me;

if(children.length === 0){

   return [
      me
   ] ;
}

for(let childNode of children){

   leafNodes.push(...childNode.leafNodes) ;
}

return leafNodes ;

    }

                return function(){

                    

                    

                    return main.call(this ) ;
                } ;

            })();

exports['src::data.model.node.tree.show'] = (() =>{

                

                

                

                

                function main(){

        
/**
 * 
 * 显示节点
 * 
 */

let me = this,
{
    children,
    store,
    expanded
} = me,
{
    selectedNode
} = store;


me.set('hidden' , false) ;

if(expanded){

    for(let childNode of children){

        childNode.show() ;
    }
}

    }

                return function(){

                    

                    

                    return main.call(this ) ;
                } ;

            })();

exports['src::data.model.node.tree.hide'] = (() =>{

                

                

                

                

                function main(){

        
/**
 * 
 * 隐藏节点
 * 
 */

let me = this,
{
    children,
    store
} = me,
{
    selectedNode
} = store;

if(selectedNode === me){

    let {
        parentNode
    } = me ;

    while(parentNode){

        if(parentNode.hidden === false){

            parentNode.select() ;

            break ;
        
        }else{

            parentNode = parentNode.parentNode ;
        }
    }
}

me.set({
    hidden:true,
    x:0,
    y:0
}) ;


for(let childNode of children){

    childNode.hide() ;
}

    }

                return function(){

                    

                    

                    return main.call(this ) ;
                } ;

            })();

exports['src::data.model.node.tree.layout'] = (() =>{

                

                

                

                

                function main(){

        
/**
 * 
 * 布局
 * 
 * 
 */

let me = this,
    {
        expanded
    } = me;

if(!expanded){

    return ;
}

let {
    childCountScopeHeight,
    store
} = me,
{
    marginBottom,
    marginRight
} = store,
{
    y:centerY
} = me.getAnchorXY('c'),
{
    x
} = me.getAnchorXY('r');

let startY = centerY - childCountScopeHeight / 2,
    {
        children
    } = me;

x += marginRight;

for(let childNode of children){

    let {
        scopeHeight
    } = childNode ;

    childNode.set('x' , x) ;

    childNode.set(childNode.setAnchorXY({
        y:startY + scopeHeight / 2
    } , 'c')) ;

    startY += scopeHeight + marginBottom;

    childNode.layout() ;
}

    }

                return function(){

                    

                    

                    return main.call(this ) ;
                } ;

            })();

exports['src::data.model.node.tree.expand'] = (() =>{

                

                

                

                

                async function main(){

        
/**
 * 
 * 展开节点 
 * 
 */

let me = this,
{
    expanded
} = me ;

if(!expanded){

    let {
        store,
        synchronized
    } = this ;

    if(!synchronized){

        me.synchronize(await store.synchronize(me)) ;
    }

    me.set('expanded' , true) ;

    let {
        children
    } = me ;

    for(let childNode of children){

        childNode.show() ;
    }

    me.fireEvent('expand' , synchronized) ;
}

    }

                return async function(){

                    

                    

                    return await main.call(this ) ;
                } ;

            })();

exports['src::data.model.node.tree.collapse'] = (() =>{

                

                

                

                

                function main(deep){

        
/**
 * 
 * 收起
 * 
 * @param {boolean} [deep = false] 是否级联收起节点，默认为 false
 * 
 */

let me = this,
{
    expanded,
    children
} = me ;

if(expanded){

    for(let childNode of children){

        if(deep){

            childNode.suspendEvents() ;

            childNode.collapse(deep) ;

            childNode.resumeEvents() ;
        }

        childNode.hide() ;
    }

    me.set('expanded' , false) ;

    me.fireEvent('collapse') ;
}

    }

                return function(deep = false){

                    

                    

                    return main.call(this , deep) ;
                } ;

            })();

exports['src::data.model.node.tree.select'] = (() =>{

                

                

                

                

                function main(){

        
/**
 * 
 * 选定
 * 
 * 
 */

let me = this,
    {
        selected,
        store,
        hidden
    } = me;

if(!selected && !hidden){

    let {
        selectedNode
    } = store ;

    if(selectedNode){

        selectedNode.deselect() ;
    }

    me.set('selected' , true) ;

    store.selectedNode = me ;

    me.fireEvent('select') ;
}

    }

                return function(){

                    

                    

                    return main.call(this ) ;
                } ;

            })();

exports['src::data.model.node.tree.deselect'] = (() =>{

                

                

                

                

                function main(){

        
/**
 * 
 * 取消选定
 * 
 * 
 */

let me = this,
    {
        selected,
        hidden,
        store
    } = me;

if(selected && !hidden){

    me.set('selected' , false) ;

    me.fireEvent('deselect') ;
}

    }

                return function(){

                    

                    

                    return main.call(this ) ;
                } ;

            })();

exports['src::data.model.node.tree.nodes.synchronize'] = (() =>{

                

                

                

                

                function main(nodes){

        
/**
 * 
 * 同步
 * 
 * @param {array} [nodes = []] 同步的子节点
 * 
 */

let me = this ;

if(!me.synchronized){

    if(nodes.length === 0){

        me.set('leaf' , true) ;
    
    }else{

        me.suspendEvents() ;

        nodes = me.appendChild(nodes) ;

        me.resumeEvents() ;
    }

    me.fireEvent('synchronize' , nodes) ;
}

    }

                return function(nodes = []){

                    

                    

                    return main.call(this , nodes) ;
                } ;

            })();

exports['src::data.model.node.tree.select.vertical'] = (() =>{

                

                

                

                

                function main(direction){

        
/**
 * 
 * 垂直方向选择
 * 
 * @param {string} direction 方向 
 * 
 */

 let methodName,
     increment;

 switch(direction){

    case 'up':

        methodName = 'previousSiblingNode' ;

        increment = -1 ;

        break ;

    case 'down':

        methodName = 'nextSiblingNode' ;

        increment = 1 ;
 }

 let me = this,
    node = me[methodName] ;

if(node){

    node.select() ;

    return node ;

}else{

    let {
        depth,
        store
    } = me,
    nodes = store.rootNode.getDepthNodes(depth),
    node = nodes[nodes.indexOf(me) + increment] ;

    if(node){

        node.select() ;

        return node ;
    }

}


    }

                return function(direction){

                    

                    

                    return main.call(this , direction) ;
                } ;

            })();

exports['src::data.model.node.tree.select.up'] = (() =>{

                let select;

                let var_init_locked_1568695724134;

                let var_current_scope_1568695724134;

                

                function main(){

        /**
 * 
 * 向上选择一个节点
 * 
 * @import select from ..vertical scoped
 * 
 */

return select('up') ;

    }

                return function(){

                    

                    
        if(!var_current_scope_1568695724134 !== this){

            select = include('src::data.model.node.tree.select.vertical').bind(this);

            var_current_scope_1568695724134 = this ;
        }
        

                    return main.call(this ) ;
                } ;

            })();

exports['src::data.model.node.tree.select.down'] = (() =>{

                let select;

                let var_init_locked_1568695724134;

                let var_current_scope_1568695724134;

                

                function main(){

        /**
 * 
 * 向下选择一个节点
 * 
 * @import select from ..vertical scoped
 * 
 */

 return select('down') ;

 

    }

                return function(){

                    

                    
        if(!var_current_scope_1568695724134 !== this){

            select = include('src::data.model.node.tree.select.vertical').bind(this);

            var_current_scope_1568695724134 = this ;
        }
        

                    return main.call(this ) ;
                } ;

            })();

exports['src::data.model.node.tree.select.left'] = (() =>{

                

                

                

                

                function main(){

        
/**
 * 
 * 向左选择一个节点
 * 
 */

let {
    parentNode
} = this ;

if(parentNode){

    parentNode.select() ;

    return parentNode ;
}

    }

                return function(){

                    

                    

                    return main.call(this ) ;
                } ;

            })();

exports['src::math.point.distance'] = (() =>{

                

                

                

                

                function main(point1 , point2){

        /**
 * 
 * 计算两点之间的距离
 * 
 * @param {object} point1 第一个点的位置
 * 
 * @param {object} point2 第二个点的位置
 * 
 * @return {number} 两点之间的距离
 * 
 */

const {
    pow,
    sqrt
} = Math ;

return sqrt(pow(point1.x - point2.x , 2) + pow(point1.y - point2.y , 2) , 2);

    }

                return function(point1 , point2){

                    

                    

                    return main.call(this , point1 , point2) ;
                } ;

            })();

exports['src::data.model.node.tree.select.right'] = (() =>{

                let getDistance;

                let var_init_locked_1568695724141;

                

                

                function main(){

        
/**
 * 
 * 向右移动一格
 * 
 * @import getDistance from math.point.distance
 * 
 */

let me = this,
{
    firstChildNode
} = me ;

if(firstChildNode){

    firstChildNode.select() ;

    return firstChildNode ;

}else{

    let {
        depth,
        store
    } = me,
    nodes = store.rootNode.getDepthNodes(depth + 1),
    minDistance,
    nearestNode;

    for(let node of nodes){

        let distance = getDistance(me , node) ;

        if(!minDistance){

            minDistance = distance ;

            nearestNode = node ;

            continue ;
        }

        if(minDistance > distance){

            minDistance = distance ;

            nearestNode = node ;
        }
    }

    if(nearestNode){

        nearestNode.select() ;

        return nearestNode ;
    }
}

    }

                return function(){

                    
        if(!var_init_locked_1568695724141){

            getDistance = include('math.point.distance');

            var_init_locked_1568695724141 = true ;
        }
        

                    

                    return main.call(this ) ;
                } ;

            })();

exports['src::data.model.node.tree.nodes.depth'] = (() =>{

                

                

                

                

                function main(depth){

        
/**
 * 
 * 获得指定深度的节点集合
 * 
 * @param {number} depth 深度
 * 
 * @return {array} 节点集合 
 * 
 */

let nodes = [],
{
    children
} = this;

if(depth === 1){

    return children ;
}

depth -- ;

for(let childNode of children){

    nodes.push(childNode , ...childNode.getDepthNodes(depth)) ;
}

return nodes ;

    }

                return function(depth){

                    

                    

                    return main.call(this , depth) ;
                } ;

            })();

exports['src::object.property.reset'] = (() =>{

                let getPrefix;

                let var_init_locked_1568695724143;

                

                

                function main(target , name){

        /**
 * 
 * 重置属性值
 * 
 * @import getPrefix from object.property.prefix
 * 
 * @param {object} target 目标对象
 * 
 * @param {string} name 属性名称
 * 
 */

delete target[`${getPrefix()}${name}`] ;

    }

                return function(target , name){

                    
        if(!var_init_locked_1568695724143){

            getPrefix = include('object.property.prefix');

            var_init_locked_1568695724143 = true ;
        }
        

                    

                    return main.call(this , target , name) ;
                } ;

            })();

exports['src::data.model.node.tree.append'] = (() =>{

                let resetProperty;

                let var_init_locked_1568695724144;

                

                

                function main(node){

        
/**
 * 
 * 添加节点
 * 
 * @import resetProperty from object.property.reset
 * 
 * @param {mixed} node 节点信息
 * 
 */

let me = this,
{
    store,
    expanded,
    hidden
} = me,
nodes = store.insert(store.indexOf(me.lastLeafNode || me) + 1 , node) ;

me.set('leaf' , false) ;

if(expanded && !hidden){

    for(let node of nodes){

        node.show() ;
    }
}

resetProperty(me , 'children') ;

me.fireEvent('append' , nodes) ;

return nodes ;


    }

                return function(node){

                    
        if(!var_init_locked_1568695724144){

            resetProperty = include('object.property.reset');

            var_init_locked_1568695724144 = true ;
        }
        

                    

                    return main.call(this , node) ;
                } ;

            })();

exports['src::data.model.node.tree.insert.after'] = (() =>{

                

                

                

                

                function main(node , existNode){

        
/**
 * 
 * 在指定节点之前插入
 * 
 * @param {mixed} node 插入节点
 * 
 * @param {data.model.tree.Node} existNode 节点
 * 
 */

 let me = this,
 {
    store,
    children,
    expanded,
    hidden
  } = me;

  if(children.includes(existNode)){

    let nodes = store.insert(store.indexOf(existNode) + 1 , node) ;

    me.set('leaf' , false) ;

    if(expanded && !hidden){

        for(let node of nodes){
    
            node.show() ;
        }
    }

    me.fireEvent('insertafter' , nodes , existNode) ;
  }

    }

                return function(node , existNode){

                    

                    

                    return main.call(this , node , existNode) ;
                } ;

            })();

exports['src::data.model.node.tree.remove'] = (() =>{

                let remove;

                let var_init_locked_1568695724147;

                

                

                function main(node){

        
/**
 * 
 * 删除子节点
 * 
 * @import remove from array.remove
 * 
 * @param {data.model.node.Tree} node 树型节点
 * 
 */

let me = this,
{
    store,
    cache
} = me ;

if(cache.get('children').includes(node)){

    store.remove(node) ;

    remove(children , node) ;

    if(children.length === 0){

        me.set('leaf' , true) ;
    }
}

    }

                return function(node){

                    
        if(!var_init_locked_1568695724147){

            remove = include('array.remove');

            var_init_locked_1568695724147 = true ;
        }
        

                    

                    return main.call(this , node) ;
                } ;

            })();

exports['src::data.model.node.tree.contains'] = (() =>{

                

                

                

                

                function main(node){

        
/**
 * 
 * 判断指定节点是否被当前节点所包含
 * 
 * @param {data.model.node.Tree} node  节点
 * 
 * @return {boolean} 如果指定节点为当前节点所包含则返回 true , 否则返回 false  
 * 
 */

 return this.descendantNodes.includes(node) ;

    }

                return function(node){

                    

                    

                    return main.call(this , node) ;
                } ;

            })();

exports['src::data.model.node.tree'] = (() =>{

                let mixin_1568695723738__1,extend,static_get_fieldConfigurations,get_selected,get_previousSiblingNode,get_nextSiblingNode,get_firstChildNode,get_lastChildNode,get_expanded,get_synchronized,get_isRoot,get_isLeaf,get_hidden,get_region,get_depth,get_childCountScopeHeight,get_scopeHeight,get_descendantNodes,get_firstDescendantNodes,get_lastDescendantNodes,get_lastLeafNode,get_leafNodes,method_show,method_hide,method_layout,method_expand,method_collapse,method_select,method_deselect,method_synchronize,method_selectUp,method_selectDown,method_selectLeft,method_selectRight,method_getDepthNodes,method_appendChild,method_insertAfter,method_removeChild,method_contains,isObject;

                let var_init_locked_1568695724150;

                let var_class_1568695724150;

                

                return function(){

                    
        if(!var_init_locked_1568695724150){

            mixin_1568695723738__1 = include('mixin.region');
extend = include('src::data.model.node.tree.base')();
static_get_fieldConfigurations = include('src::data.model.node.tree.configurations');
get_selected = include('src::data.model.node.tree.node.selected');
get_previousSiblingNode = include('src::data.model.node.tree.node.sibling.previous');
get_nextSiblingNode = include('src::data.model.node.tree.node.sibling.next');
get_firstChildNode = include('src::data.model.node.tree.node.first');
get_lastChildNode = include('src::data.model.node.tree.node.last');
get_expanded = include('src::data.model.node.tree.expanded');
get_synchronized = include('src::data.model.node.tree.nodes.synchronized');
get_isRoot = include('src::data.model.node.tree.is.root');
get_isLeaf = include('src::data.model.node.tree.is.leaf');
get_hidden = include('src::data.model.node.tree.hidden');
get_region = include('src::data.model.node.tree.region');
get_depth = include('src::data.model.node.tree.depth');
get_childCountScopeHeight = include('src::data.model.node.tree.height.scope.child');
get_scopeHeight = include('src::data.model.node.tree.height.scope');
get_descendantNodes = include('src::data.model.node.tree.nodes.descendant');
get_firstDescendantNodes = include('src::data.model.node.tree.nodes.descendant.first');
get_lastDescendantNodes = include('src::data.model.node.tree.nodes.descendant.last');
get_lastLeafNode = include('src::data.model.node.tree.node.leaf.last');
get_leafNodes = include('src::data.model.node.tree.nodes.leaf');
method_show = include('src::data.model.node.tree.show');
method_hide = include('src::data.model.node.tree.hide');
method_layout = include('src::data.model.node.tree.layout');
method_expand = include('src::data.model.node.tree.expand');
method_collapse = include('src::data.model.node.tree.collapse');
method_select = include('src::data.model.node.tree.select');
method_deselect = include('src::data.model.node.tree.deselect');
method_synchronize = include('src::data.model.node.tree.nodes.synchronize');
method_selectUp = include('src::data.model.node.tree.select.up');
method_selectDown = include('src::data.model.node.tree.select.down');
method_selectLeft = include('src::data.model.node.tree.select.left');
method_selectRight = include('src::data.model.node.tree.select.right');
method_getDepthNodes = include('src::data.model.node.tree.nodes.depth');
method_appendChild = include('src::data.model.node.tree.append');
method_insertAfter = include('src::data.model.node.tree.insert.after');
method_removeChild = include('src::data.model.node.tree.remove');
method_contains = include('src::data.model.node.tree.contains');
isObject = include('is.object.simple');

            var_init_locked_1568695724150 = true ;
        }
        

                    
        if(!var_class_1568695724150){

            class main extends mixins({extend , mixins:[include('mixin.region')]}){

            

            static get fieldConfigurations(){

                return static_get_fieldConfigurations.call(this) ;
    
            }

            

            show(...args){

            return method_show.apply(this , args) ;

        }
hide(...args){

            return method_hide.apply(this , args) ;

        }
layout(...args){

            return method_layout.apply(this , args) ;

        }
expand(...args){

            return method_expand.apply(this , args) ;

        }
collapse(...args){

            return method_collapse.apply(this , args) ;

        }
select(...args){

            return method_select.apply(this , args) ;

        }
deselect(...args){

            return method_deselect.apply(this , args) ;

        }
synchronize(...args){

            return method_synchronize.apply(this , args) ;

        }
selectUp(...args){

            return method_selectUp.apply(this , args) ;

        }
selectDown(...args){

            return method_selectDown.apply(this , args) ;

        }
selectLeft(...args){

            return method_selectLeft.apply(this , args) ;

        }
selectRight(...args){

            return method_selectRight.apply(this , args) ;

        }
getDepthNodes(...args){

            return method_getDepthNodes.apply(this , args) ;

        }
appendChild(...args){

            return method_appendChild.apply(this , args) ;

        }
insertAfter(...args){

            return method_insertAfter.apply(this , args) ;

        }
removeChild(...args){

            return method_removeChild.apply(this , args) ;

        }
contains(...args){

            return method_contains.apply(this , args) ;

        }

            get selected(){

                return get_selected.call(this) ;
    
            }
get previousSiblingNode(){

                return get_previousSiblingNode.call(this) ;
    
            }
get nextSiblingNode(){

                return get_nextSiblingNode.call(this) ;
    
            }
get firstChildNode(){

                return get_firstChildNode.call(this) ;
    
            }
get lastChildNode(){

                return get_lastChildNode.call(this) ;
    
            }
get expanded(){

                return get_expanded.call(this) ;
    
            }
get synchronized(){

                return get_synchronized.call(this) ;
    
            }
get isRoot(){

                return get_isRoot.call(this) ;
    
            }
get isLeaf(){

                return get_isLeaf.call(this) ;
    
            }
get hidden(){

                return get_hidden.call(this) ;
    
            }
get region(){

                return get_region.call(this) ;
    
            }
get depth(){

                return get_depth.call(this) ;
    
            }
get childCountScopeHeight(){

                return get_childCountScopeHeight.call(this) ;
    
            }
get scopeHeight(){

                return get_scopeHeight.call(this) ;
    
            }
get descendantNodes(){

                return get_descendantNodes.call(this) ;
    
            }
get firstDescendantNodes(){

                return get_firstDescendantNodes.call(this) ;
    
            }
get lastDescendantNodes(){

                return get_lastDescendantNodes.call(this) ;
    
            }
get lastLeafNode(){

                return get_lastLeafNode.call(this) ;
    
            }
get leafNodes(){

                return get_leafNodes.call(this) ;
    
            }

        }

            var_class_1568695724150 = class extends main{

                static get ZBEE_CLASS(){

                    return true ;
                }

                get ZBEE_CURRENT_CLASS(){

                    return var_class_1568695724150 ;
                }

            } ;
        }
        

                    return var_class_1568695724150;
                } ;

            })();

exports['src::data.model.node.tree.mind'] = (() =>{

                let Model,isEmpty;

                let var_init_locked_1568695724151;

                let var_class_1568695724151;

                

                return function(){

                    
        if(!var_init_locked_1568695724151){

            Model = include('src::data.model.node.tree')();
isEmpty = include('is.object.empty');

            var_init_locked_1568695724151 = true ;
        }
        

                    
        if(!var_class_1568695724151){

            
/**
 * 
 * 脑图节点
 * 
 * @import Model from ....tree value
 * 
 * @import isEmpty from is.object.empty
 * 
 * @class
 * 
 */

 class main extends Model{

    syncSize({
        width,
        height
    }){

        return !isEmpty(this.set({
            width,
            height
        })) ;
    }

    static get fieldConfigurations(){

        return [
            ...super.fieldConfigurations,
            {
                name:'width',
                persistent:true,
                defaultValue:0
            },{
                name:'height',
                persistent:true,
                defaultValue:0
            },{
                name:'x',
                persistent:true,
                defaultValue:0
            },{
                name:'y',
                persistent:true,
                defaultValue:0
            }
        ] ;
    }

    /**
     * 
     * 获得横坐标
     * 
     * @return {number}
     * 
     */
    get x(){

        return this.get('x') ;
    }

    /**
     * 
     * 获得纵坐标
     * 
     * @return {number}
     * 
     */
    get y(){

        return this.get('y');
    }

    /**
     * 
     * 获取宽度
     * 
     * @return {Number}
     * 
     */
    get width(){

        return this.get('width') ;
     }
 
     /**
      * 
      * 获得高度
      * 
      * @return {Number}
      * 
      */
     get height(){
 
         return this.get('height') ;
     }
 }

            var_class_1568695724151 = class extends main{

                static get ZBEE_CLASS(){

                    return true ;
                }

                get ZBEE_CURRENT_CLASS(){

                    return var_class_1568695724151 ;
                }

            } ;
        }
        

                    return var_class_1568695724151;
                } ;

            })();

exports['src::data.store.tree.base'] = (() =>{

                let Store,Model,define,from;

                let var_init_locked_1568695724155;

                let var_class_1568695724155;

                

                return function(){

                    
        if(!var_init_locked_1568695724155){

            Store = include('data.store')();
Model = include('data.model.node.tree.mind')();
define = include('class.define');
from = include('array.from');

            var_init_locked_1568695724155 = true ;
        }
        

                    
        if(!var_class_1568695724155){

            
/**
 * 
 * 树型数据存储器
 * 
 * @import Store from data.store value
 * 
 * @import Model from data.model.node.tree.mind value
 * 
 * @import define from class.define
 * 
 * @import from from array.from
 * 
 * @class
 * 
 * 
 */

 class main extends Store{

    constructor({
        fields,
        margin = {},
        padding = 0,
        lineOffsetX = 0, 
        rootConfig,
        synchronize,
        listeners = {},
        ...options
    }){

        let currentModel ;

        if(fields){

            currentModel = define(class extends Model{

                static get fieldConfigurations(){

                    return [
                        ...super.fieldConfigurations,
                        ...fields
                    ];
                }
            }) ;

        }

        super({
            ...options,
            model:currentModel,
            listeners:[{
                load:'onLoad',
                expand:'onExpand',
                collapse:'onCollapse'
            } , listeners]
        }) ;

        let me = this ;

        me.rootConfig = rootConfig || {} ;

        me.synchronize = synchronize || (() => []) ;

        let {
            bottom:marginBottom = 0,
            right:marginRight = 0
        } = margin ;

        me.marginBottom = marginBottom ;

        me.marginRight = marginRight ;

        me.padding = padding ;

        me.lineOffsetX = lineOffsetX ;
    }

    onExpand(){

        this.layout() ;

    }

    onCollapse(){

        this.layout() ;
    }

    onLoad(store , nodes){

        for(let node of nodes){

            if(!node.isBindStore){

                continue ;
            }

            let {
                parentNode
            } = node ;

            if(!parentNode){
                
                let me = this,
                {
                    rootConfig
                } = me ;

                me.rootNode = node ;

                node.set(rootConfig) ;

                doReorder(node) ;

                node.suspendEvents() ;

                me.fireEvent('root' , node) ;

                node.resumeEvents() ;

                break ;
            }
        }
    }
 }


 function doReorder(node){

    let {
        store,
        childNodes
    } = node ;

    store.insert(store.indexOf(node) + 1 , childNodes) ;

 }

            var_class_1568695724155 = class extends main{

                static get ZBEE_CLASS(){

                    return true ;
                }

                get ZBEE_CURRENT_CLASS(){

                    return var_class_1568695724155 ;
                }

            } ;
        }
        

                    return var_class_1568695724155;
                } ;

            })();

exports['src::data.store.tree.region'] = (() =>{

                

                

                

                

                function main(){

        
/**
 * 
 * 返回当前脑图区域信息
 * 
 * @return {mixed} 返回说明 
 * 
 */

let {
    rootNode,
    padding
} = this,
{
    x,
    y,
    firstDescendantNodes,
    lastDescendantNodes,
    leafNodes
} = rootNode;

for(let node of firstDescendantNodes){

    let {
        y:nodeY
    } = node.getAnchorXY('tr') ;

    if(y > nodeY){

        y = nodeY ;
    }
}

let bottom = y ;

for(let node of lastDescendantNodes){

    let {
        y:nodeY
    } = node.getAnchorXY('br') ;

    if(bottom < nodeY){

        bottom = nodeY ;
    }
}

let {
    x:right
} = rootNode.getAnchorXY('r') ;

for(let leafNode of leafNodes){

    let {
        x
    } = leafNode.getAnchorXY('r') ;

    if(right < x){

        right = x ;
    }
}

const {
    min,
    abs
} = Math ;

x = min(x , 0),
y = min(y , 0) ;

return {
    x:abs(x),
    y:abs(y),
    width:right,
    height:bottom
} ;

    }

                return function(){

                    

                    

                    return main.call(this ) ;
                } ;

            })();

exports['src::data.store.tree.insert'] = (() =>{

                

                

                

                

                function main(index , nodes){

        
/**
 * 
 * 插入节点
 * 
 * @param {number} index 插入位置
 * 
 * @param {mixed} nodes 节点数据
 * 
 * 
 */

let me = this,
{
    recordset
} = me,
insertNodes = [];

nodes = recordset.add(nodes) ;

for(let node of nodes){

    insertNodes.push(node) ;

    insertNodes.push(...node.descendantNodes) ;
}

recordset.insert(index , insertNodes) ;

me.fireEvent('insert' , insertNodes) ;

return nodes ;

    }

                return function(index , nodes){

                    

                    

                    return main.call(this , index , nodes) ;
                } ;

            })();

exports['src::data.store.tree.remove'] = (() =>{

                let from;

                let var_init_locked_1568695724166;

                

                

                function main(nodes){

        
/**
 * 
 * 去除节点
 * 
 * @import from from array.from
 * 
 * @param {mixed} nodes 节点数据
 * 
 */

nodes = from(nodes) ;

let me = this,
    {
        recordset
    } = me,
    removeNodes = [] ;

for(let node of nodes){

    let {
        descendantNodes
    } = node ;

    removeNodes.push(...recordset.remove([
        node,
        ...descendantNodes
    ])) ;
}

me.fireEvent('remove' , removeNodes) ;

    }

                return function(nodes){

                    
        if(!var_init_locked_1568695724166){

            from = include('array.from');

            var_init_locked_1568695724166 = true ;
        }
        

                    

                    return main.call(this , nodes) ;
                } ;

            })();

exports['src::data.store.tree.layout'] = (() =>{

                

                

                

                

                
/**
 * 
 * 布局
 * 
 */

 function main(){

    let me = this,
        {
            rootNode,
            recordset
        } = me,
        records = recordset.findRecords('hidden' , false);

    if(rootNode){

        rootNode.layout() ;

        let {
            region,
            marginRight,
            lineOffsetX
        } = me ;

        me.fireEvent('layout' , records , lines(records , region , marginRight , lineOffsetX)) ;
    }
 }

 function lines(nodes , {
    x,
    y
} , marginRight , lineOffsetX){

   let lines = [],
       halfMargin = marginRight / 2 ;

   for(let node of nodes){

        if(node.hidden){

            continue ;
        }

       let {
           x:startX,
           y:startY
       } = node.getAnchorXY('r'),
       {
           children
       } = node;

       startX += lineOffsetX ;

       for(let childNode of children){

            if(!nodes.includes(childNode)){

                continue ;
            }

           let {
               x:endX,
               y:endY
           } = childNode.getAnchorXY('l'),
           points = [
            startX + x,
            startY + y,
            startX + x,
            endY + y,
            startX + x,
            endY + y,
            endX + x,
            endY + y
           ];

           lines.push({
               start:node,
               end:childNode,
               points
           }) ;
       }
   }

   return lines ;
}

                return function(){

                    

                    

                    return main.call(this ) ;
                } ;

            })();

exports['src::data.store.tree'] = (() =>{

                let extend,get_region,method_insert,method_remove,method_layout,isObject;

                let var_init_locked_1568695724169;

                let var_class_1568695724169;

                

                return function(options){

                    
        if(!var_init_locked_1568695724169){

            extend = include('src::data.store.tree.base')();
get_region = include('src::data.store.tree.region');
method_insert = include('src::data.store.tree.insert');
method_remove = include('src::data.store.tree.remove');
method_layout = include('src::data.store.tree.layout');
isObject = include('is.object.simple');

            var_init_locked_1568695724169 = true ;
        }
        

                    
        if(!var_class_1568695724169){

            class main extends mixins({extend , mixins:[]}){

            

            

            

            insert(...args){

            return method_insert.apply(this , args) ;

        }
remove(...args){

            return method_remove.apply(this , args) ;

        }
layout(...args){

            return method_layout.apply(this , args) ;

        }

            get region(){

                return get_region.call(this) ;
    
            }

        }

            var_class_1568695724169 = class extends main{

                static get ZBEE_CLASS(){

                    return true ;
                }

                get ZBEE_CURRENT_CLASS(){

                    return var_class_1568695724169 ;
                }

            } ;
        }
        

                    return new var_class_1568695724169(options);
                } ;

            })();

exports['src::data.proxy.memory'] = (() =>{

                let Proxy;

                let var_init_locked_1568695724169;

                let var_class_1568695724169;

                

                return function(options){

                    
        if(!var_init_locked_1568695724169){

            Proxy = include('data.proxy')();

            var_init_locked_1568695724169 = true ;
        }
        

                    
        if(!var_class_1568695724169){

            
/**
 * 
 * 内存数据代理
 * 
 * @param {object} options 配置
 * 
 * @import Proxy from data.proxy value
 * 
 */

 class main extends Proxy{

    get proxyType(){

        return 'memory' ;
    }

    doRead(data){

        return data; 
    }
 }

            var_class_1568695724169 = class extends main{

                static get ZBEE_CLASS(){

                    return true ;
                }

                get ZBEE_CURRENT_CLASS(){

                    return var_class_1568695724169 ;
                }

            } ;
        }
        

                    return new var_class_1568695724169(options);
                } ;

            })();

exports['src::canvas.draw.line.bezierCurve'] = (() =>{

                let assign;

                let var_init_locked_1568695724170;

                

                

                function main(context , {points , ...styles}){

        
/**
 * 
 * 绘制贝赛尔曲线
 * 
 * @import assign from object.assign
 * 
 * @param {canvas.Context} context 画板的上下文对象
 * 
 * @param {object} [config = {}] 画线配置
 * 
 * @param {array} [config.points = []] 画线点集合
 * 
 * @param {object} [...config.styles] 画线样式
 * 
 */

 if(points.length === 8){

    context.beginPath();

    assign(context , styles) ;

    context.moveTo(...points.slice(0 , 2));
    
    context.bezierCurveTo(...points.slice(2));
    
    context.stroke();
 }

    }

                return function(context , {points = [] , ...styles} = {}){

                    
        if(!var_init_locked_1568695724170){

            assign = include('object.assign');

            var_init_locked_1568695724170 = true ;
        }
        

                    

                    return main.call(this , context , {points , ...styles}) ;
                } ;

            })();

exports['src::browser.event.listeners'] = (() =>{

                let map;

                let var_init_locked_1568695724171;

                

                let var_once_value_1568695724171;

                function main(){

        
/**
 * 
 * 维护全局事件监听对象
 * 
 * @import map value
 * 
 * @return {Map} 集合对象 
 * 
 * @once
 * 
 */

return map ;

    }

                return function(){

                    
        if(!var_init_locked_1568695724171){

            map = include('map')();

            var_init_locked_1568695724171 = true ;
        }
        

                    

                    
        if(var_once_value_1568695724171){

            return var_once_value_1568695724171 ;

        }
        return var_once_value_1568695724171 = main.call(this ) ;
        
                } ;

            })();

exports['src::browser.selector.is'] = (() =>{

                

                

                

                

                function main(el , selector){

        
/**
 * 
 * 判断元素是否匹配选择器
 * 
 * @param {HTMLElement} el 元素
 * 
 * @param {string} selector 选择器字符串
 * 
 * @return {boolean} 如果元素匹配选择器则返回 true , 否则返回 false 
 * 
 */

 let {
    ownerDocument
 } = el ;

 let els = Array.from(ownerDocument.querySelectorAll(selector)) ;

 return els.includes(el) ;

    }

                return function(el , selector){

                    

                    

                    return main.call(this , el , selector) ;
                } ;

            })();

exports['src::browser.selector.parent'] = (() =>{

                let is;

                let var_init_locked_1568695724173;

                

                

                function main(el , selector){

        
/**
 * 
 * 判断元素及其元素父祖级元素是否匹配选择器
 * 
 * @import is from ..is
 * 
 * @param {HTMLElement} el 元素
 * 
 * @param {string} selector 选择器
 * 
 * @return {boolean} 如果匹配则返回 true , 否则返回 false 
 * 
 */

 while(el){

    if(is(el , selector)){

        return el ;
    }

    el = el.parentElement ;
 }

    }

                return function(el , selector){

                    
        if(!var_init_locked_1568695724173){

            is = include('src::browser.selector.is');

            var_init_locked_1568695724173 = true ;
        }
        

                    

                    return main.call(this , el , selector) ;
                } ;

            })();

exports['src::browser.event.stop'] = (() =>{

                let isObject;

                let var_init_locked_1568695724177;

                

                

                function main(e){

        
/**
 * 
 * 停止事件
 * 
 * @import isObject from is.object.simple
 * 
 * @param {Event} e 事件对象
 * 
 */

e.stopPropagation() ;

    }

                return function(e){

                    
        if(!var_init_locked_1568695724177){

            isObject = include('is.object.simple');

            var_init_locked_1568695724177 = true ;
        }
        

                    

                    return main.call(this , e) ;
                } ;

            })();

exports['src::browser.event.prevent'] = (() =>{

                

                

                

                

                function main(e){

        
/**
 * 
 * 禁用默认事件
 * 
 * @param {Event} e 事件对象
 * 
 */

 e.preventDefault() ;

    }

                return function(e){

                    

                    

                    return main.call(this , e) ;
                } ;

            })();

exports['src::browser.event.listener.add'] = (() =>{

                let listeners,is,stopEvent,preventEvent,add;

                let var_init_locked_1568695724178;

                

                

                function main(target , event , fn , {selector , stop , prevent , once}){

        
/**
 * 
 * 监听事件
 * 
 * @import listeners from ....listeners value
 * 
 * @import is from browser.selector.parent
 * 
 * @import stopEvent from ....stop
 * 
 * @import preventEvent from ....prevent
 * 
 * @import add from event.listener.add
 * 
 * @param {mixed} target 目标
 * 
 * @param {string} event 目标监听事件
 * 
 * @param {mixed} fn 目标监听回调
 * 
 * @param {object} [config = {}] 配置
 * 
 * @param {string} [config.selector] 选择器
 * 
 * @param {boolean} [config.stop = false] 停止冒泡
 * 
 * @param {boolean} [config.prevent = false] 禁用默认浏览器行为
 * 
 * @param {boolean} [config.once = false] 是否只监听一次
 * 
 * @return {mixed} 返回说明 
 * 
 */

if(listeners.has(target , event , fn)){

    return ;
}

let listener = e =>{

        let {
            target
        } = e ;

        if(stop){
            
            stopEvent(e) ;
        }

        if(prevent){

            preventEvent(e) ;
        }

        if(selector){

            if(is(target , selector)){

                fn(e) ;
            }
            
        }else{

            fn(e) ;
        }
    };

listeners.set(target , event , fn , listener) ;

add(target , event , listener , {
    once
}) ;

    }

                return function(target , event , fn , {selector , stop = false , prevent = false , once = false} = {}){

                    
        if(!var_init_locked_1568695724178){

            listeners = include('src::browser.event.listeners')();
is = include('browser.selector.parent');
stopEvent = include('src::browser.event.stop');
preventEvent = include('src::browser.event.prevent');
add = include('event.listener.add');

            var_init_locked_1568695724178 = true ;
        }
        

                    

                    return main.call(this , target , event , fn , {selector , stop , prevent , once}) ;
                } ;

            })();

exports['src::browser.event.listener.global.add'] = (() =>{

                let add;

                let var_init_locked_1568695724179;

                

                

                function main(event , fn , config){

        
/**
 * 
 * 监听全局事件
 * 
 * @import add from ....add
 * 
 * @param {string} event 目标监听事件
 * 
 * @param {function} fn 目标监听回调
 * 
 * @param {object} [config] 配置
 * 
 * 
 */

 add(window , event , fn , config) ;

    }

                return function(event , fn , config){

                    
        if(!var_init_locked_1568695724179){

            add = include('src::browser.event.listener.add');

            var_init_locked_1568695724179 = true ;
        }
        

                    

                    return main.call(this , event , fn , config) ;
                } ;

            })();

exports['src::browser.event.listener.remove'] = (() =>{

                let listeners,remove;

                let var_init_locked_1568695724180;

                

                

                function main(target , event , fn){

        
/**
 * 
 * 去除监听事件
 * 
 * @import listeners from ....listeners value
 * 
 * @import remove from event.listener.remove
 * 
 * @param {mixed} target
 * 
 * @param {string} event 目标监听事件
 * 
 * @param {mixed} fn 目标监听回调
 * 
 * @return {mixed} 返回说明 
 * 
 */

let listener = listeners.get(target , event , fn);

if(listener){

    remove(target , event , listener) ;

    listeners.delete(target , event , fn) ;
}

    }

                return function(target , event , fn){

                    
        if(!var_init_locked_1568695724180){

            listeners = include('src::browser.event.listeners')();
remove = include('event.listener.remove');

            var_init_locked_1568695724180 = true ;
        }
        

                    

                    return main.call(this , target , event , fn) ;
                } ;

            })();

exports['src::browser.event.listener.global.remove'] = (() =>{

                let remove;

                let var_init_locked_1568695724181;

                

                

                function main(event , fn){

        
/**
 * 
 * 去除监听全局事件
 * 
 * @import remove from ....remove
 * 
 * @param {string} event 目标监听事件
 * 
 * @param {function} fn 目标监听回调
 * 
 * 
 */

remove(window , event , fn) ;

    }

                return function(event , fn){

                    
        if(!var_init_locked_1568695724181){

            remove = include('src::browser.event.listener.remove');

            var_init_locked_1568695724181 = true ;
        }
        

                    

                    return main.call(this , event , fn) ;
                } ;

            })();

exports['src::browser.event.key'] = (() =>{

                

                

                

                

                
/**
 * 
 * 得到对应代码的值键值 
 * 
 * @param {Event} event 键事件对象
 * 
 * @return {mixed} 键值 
 * 
 */

 const KEY_CODES = {
    39:'DIRECTION::RIGHT',
    37:'DIRECTION::LEFT',
    38:'DIRECTION::UP',
    40:'DIRECTION::DOWN',
    13:'ENTER',
    46:'DELETE',
    9:'TAB',
    107:'+',
    187:'=',
    27:'ESC'
 };

 function main({
    shiftKey,
    keyCode
 }){

    return {
       shift:shiftKey,
       key:KEY_CODES[keyCode],
       code:keyCode
    } ;
 }

                return function(event){

                    

                    

                    return main.call(this , event) ;
                } ;

            })();
