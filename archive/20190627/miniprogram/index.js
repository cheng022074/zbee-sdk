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

exports['src::is.function'] = (() =>{

                let isType;

                let var_init_locked_1561607615846;

                

                

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

                    
        if(!var_init_locked_1561607615846){

            isType = include('is.type');

            var_init_locked_1561607615846 = true ;
        }
        

                    

                    return main.call(this , data) ;
                } ;

            })();

exports['src::is.array'] = (() =>{

                let isType;

                let var_init_locked_1561607615847;

                

                

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

                    
        if(!var_init_locked_1561607615847){

            isType = include('is.type');

            var_init_locked_1561607615847 = true ;
        }
        

                    

                    return main.call(this , data) ;
                } ;

            })();

exports['src::is.object'] = (() =>{

                let isType;

                let var_init_locked_1561607615847;

                

                

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

                    
        if(!var_init_locked_1561607615847){

            isType = include('is.type');

            var_init_locked_1561607615847 = true ;
        }
        

                    

                    return main.call(this , data) ;
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

                let var_init_locked_1561607615854;

                

                

                
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

                    
        if(!var_init_locked_1561607615854){

            isArray = include('is.array');
isObject = include('is.object');
isDefined = include('is.defined');
join = include('object.key.join');

            var_init_locked_1561607615854 = true ;
        }
        

                    

                    return main.call(this , data , key) ;
                } ;

            })();

exports['src::miniprogram.page'] = (() =>{

                let empty,isFunction,get;

                let var_init_locked_1561607615858;

                

                

                
/**
 * 
 * 针对小程序的页面进行封装
 * 
 * @import empty from function.empty value
 * 
 * @import is.function
 * 
 * @import get from object.value.get
 * 
 * @param {object} config 页面设置
 * 
 * @return {object} 封装后的页面配置 
 * 
 */

 function main({

    onLoad = empty,

    computed = {},

    ...options

 }){

    return {

        onLoad(query){
    
            let me = this,
            {
                setData:nativeSetData,
                data
            } = me ;

            data = new Data(me , {
                computed,
                setData:nativeSetData
            }) ;

            me.setData = values => nativeSetData.call(me , values , () => refresh.call(data)) ;

            onLoad.call(me , query) ;
        },

        ...options
     } ;
 }

 class Data{

    constructor(program , {
        computed,
        setData
    }){

        let me = this ;

        me.program = program ;

        me.computed = computed ;

        me.setData = setData ;
    }

    get(name){

        let me = this,{
            computed,
            program
        } = me,
        {
            data
        } = program ;

        if(computed.hasOwnProperty(name)){
    
            return computed[name](me) ;
        }
    
        return get(data , name) ;
        
    }
 }

 function refresh(){

    let me = this,
    {
        program,
        setData,
        computed
    } = me,
    {
        data
    } = program,
    names = Object.keys(computed);

    for(let name of names){

        data[name] = computed[name](me) ;
    }

    setData.call(program , data) ;
 }
 

                return function(config){

                    
        if(!var_init_locked_1561607615858){

            empty = include('function.empty')();
isFunction = include('is.function');
get = include('object.value.get');

            var_init_locked_1561607615858 = true ;
        }
        

                    

                    return main.call(this , config) ;
                } ;

            })();

exports['src::json.stringify'] = (() =>{

                

                

                

                

                function main(data){

        
/**
 * 
 * JSON 序列化
 * 
 * @param {mixed} data 数据
 * 
 * @return {string} JSON 序列化后的字符串 
 * 
 */

  try{
  
    return JSON.stringify(data);
  
  }catch(e){
  
  }

  return false;

    }

                return function(data){

                    

                    

                    return main.call(this , data) ;
                } ;

            })();
