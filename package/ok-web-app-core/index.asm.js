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




innerExports['src::object.value.get'] = (() =>{

                    let split,isObject,isArray;
    
                    let var_init_locked_1620353142771;
    
                    

                    function main(data , key){

        
/**
 * 
 * 获得一个对象的键值
 * 
 * @import split from string.split
 * 
 * @import is.object
 * 
 * @import is.array
 * 
 * @param {object} data 对象数据
 * 
 * @param {string} [key = '.'] 对象键值
 * 
 * @return {mixed} 对应对象数据的键值的数据 
 * 
 */

if(key === '.'){

    return data ;
}

const arrayItemRe1 = /^(\w+)\[(\d+)\]$/,
      arrayItemRe2 = /^\[(\d+)\]$/;

if(isObject(data) || isArray(data)){

    let keys = split(key , /\./),
        result;

    for(let key of keys){

        if(arrayItemRe1.test(key) || arrayItemRe2.test(key)){

            {
                let keyMatch = key.match(arrayItemRe1) ;
    
                if(keyMatch){
    
                    result = data[keyMatch[1]][Number(keyMatch[2])] ;
                
                }
            }
    
            {
                let keyMatch = key.match(arrayItemRe2) ;
    
                if(keyMatch){
    
                    result = data[Number(keyMatch[1])] ;
                
                }
            }
        
        }else{

            result = data[key] ;
        }

        if(isObject(result) || isArray(result)){

            data = result ;
        
        }else{

            break ;
        }
    }

    return result ;
}

    }
    
                    return function(data , key = '.'){
    
                        
        if(!var_init_locked_1620353142771){

            split = include('src::string.split');
isObject = include('src::is.object');
isArray = include('src::is.array');

            var_init_locked_1620353142771 = true ;
        }
        
    
                        return main.call(this , data , key) ;
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

innerExports['src::is.array'] = (() =>{

                    let isType;
    
                    let var_init_locked_1620353142813;
    
                    

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
    
                        
        if(!var_init_locked_1620353142813){

            isType = include('src::is.type');

            var_init_locked_1620353142813 = true ;
        }
        
    
                        return main.call(this , data) ;
                    } ;
    
                })();

innerExports['src::is.empty'] = (() =>{

                    let isArray;
    
                    let var_init_locked_1620353142802;
    
                    

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
    
                        
        if(!var_init_locked_1620353142802){

            isArray = include('src::is.array');

            var_init_locked_1620353142802 = true ;
        }
        
    
                        return main.call(this , data , allowEmptyString) ;
                    } ;
    
                })();

innerExports['src::string.split'] = (() =>{

                    let isEmpty;
    
                    let var_init_locked_1620353142788;
    
                    

                    
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
    
                        
        if(!var_init_locked_1620353142788){

            isEmpty = include('src::is.empty');

            var_init_locked_1620353142788 = true ;
        }
        
    
                        return main.call(this , target , splitRe) ;
                    } ;
    
                })();

innerExports['src::is.object'] = (() =>{

                    let isType;
    
                    let var_init_locked_1620353142828;
    
                    

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

return typeof data === 'object' ;

    }
    
                    return function(data){
    
                        
        if(!var_init_locked_1620353142828){

            isType = include('src::is.type');

            var_init_locked_1620353142828 = true ;
        }
        
    
                        return main.call(this , data) ;
                    } ;
    
                })();

innerExports['src::object.value.set'] = (() =>{

                    let isObject,split;
    
                    let var_init_locked_1620353142839;
    
                    

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
    
                        
        if(!var_init_locked_1620353142839){

            isObject = include('src::is.object');
split = include('src::string.split');

            var_init_locked_1620353142839 = true ;
        }
        
    
                        return main.call(this , target , key , value) ;
                    } ;
    
                })();

innerExports['src::is.string'] = (() =>{

                    let isType;
    
                    let var_init_locked_1620353142850;
    
                    

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
    
                        
        if(!var_init_locked_1620353142850){

            isType = include('src::is.type');

            var_init_locked_1620353142850 = true ;
        }
        
    
                        return main.call(this , data) ;
                    } ;
    
                })();

innerExports['src::is.number'] = (() =>{

                    let isType;
    
                    let var_init_locked_1620353142857;
    
                    

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
    
                        
        if(!var_init_locked_1620353142857){

            isType = include('src::is.type');

            var_init_locked_1620353142857 = true ;
        }
        
    
                        return main.call(this , data) ;
                    } ;
    
                })();

innerExports['src::is.function'] = (() =>{

                    let isType;
    
                    let var_init_locked_1620353142954;
    
                    

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
    
                        
        if(!var_init_locked_1620353142954){

            isType = include('src::is.type');

            var_init_locked_1620353142954 = true ;
        }
        
    
                        return main.call(this , data) ;
                    } ;
    
                })();

innerExports['src::is.defined'] = (() =>{

                    
    
                    
    
                    

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

innerExports['src::array.from'] = (() =>{

                    let isEmpty,isString;
    
                    let var_init_locked_1620353142965;
    
                    

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
    
                        
        if(!var_init_locked_1620353142965){

            isEmpty = include('src::is.empty');
isString = include('src::is.string');

            var_init_locked_1620353142965 = true ;
        }
        
    
                        return main.call(this , data) ;
                    } ;
    
                })();

innerExports['src::array.remove'] = (() =>{

                    let remove,indexOf;
    
                    let var_init_locked_1620353142865;
    
                    

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
    
                        
        if(!var_init_locked_1620353142865){

            remove = include('src::array.remove.index');
indexOf = include('src::array.indexOf');

            var_init_locked_1620353142865 = true ;
        }
        
    
                        return main.call(this , data , ...items) ;
                    } ;
    
                })();

innerExports['src::array.remove.index'] = (() =>{

                    
    
                    
    
                    

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

innerExports['src::is.boolean'] = (() =>{

                    let isType;
    
                    let var_init_locked_1620353142938;
    
                    

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
    
                        
        if(!var_init_locked_1620353142938){

            isType = include('src::is.type');

            var_init_locked_1620353142938 = true ;
        }
        
    
                        return main.call(this , data) ;
                    } ;
    
                })();

innerExports['src::is.date'] = (() =>{

                    
    
                    
    
                    

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

innerExports['src::data.type'] = (() =>{

                    let isObject,isArray,isString,isNumber,isBoolean,isDate,isFunction;
    
                    let var_init_locked_1620353142913;
    
                    

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
 * @import is.string
 * 
 * @import is.function
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

 if(isString(data)){

    return 'string' ;
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

 if(isFunction(data)){

   return 'function' ;
 }

 return 'other' ;

    }
    
                    return function(data){
    
                        
        if(!var_init_locked_1620353142913){

            isObject = include('src::is.object.simple');
isArray = include('src::is.array');
isString = include('src::is.string');
isNumber = include('src::is.number');
isBoolean = include('src::is.boolean');
isDate = include('src::is.date');
isString = include('src::is.string');
isFunction = include('src::is.function');

            var_init_locked_1620353142913 = true ;
        }
        
    
                        return main.call(this , data) ;
                    } ;
    
                })();

innerExports['src::data.equals'] = (() =>{

                    let getType;
    
                    let var_init_locked_1620353142898;
    
                    

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

        if(value1 === value2){

            return true ;
        }

        switch(type1){

            case 'object':

                return object_equals(value1 , value2) ;

            case 'array':

                return array_equals(value1 , value2) ;

            case 'date':

                return date_equals(value1 , value2) ;
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
    
                    return function(value1 , value2){
    
                        
        if(!var_init_locked_1620353142898){

            getType = include('src::data.type');

            var_init_locked_1620353142898 = true ;
        }
        
    
                        return main.call(this , value1 , value2) ;
                    } ;
    
                })();

innerExports['src::array.indexOf'] = (() =>{

                    let equals;
    
                    let var_init_locked_1620353142886;
    
                    

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
    
                        
        if(!var_init_locked_1620353142886){

            equals = include('src::data.equals');

            var_init_locked_1620353142886 = true ;
        }
        
    
                        return main.call(this , data , checkItem) ;
                    } ;
    
                })();

innerExports['src::string.capitalize'] = (() =>{

                    
    
                    
    
                    

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

innerExports['src::os.name'] = (() =>{

                    
    
                    
    
                    let var_once_value_1621936464050;

                    function main(){

        /**
 * 
 * 返回当前操作系统的名称
 * 
 * @once
 * 
 * @return {string} 操作系统的名称
 * 
 */

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
    
                        
    
                        
        if(var_once_value_1621936464050){

            return var_once_value_1621936464050 ;

        }
        return var_once_value_1621936464050 = main.call(this ) ;
        
                    } ;
    
                })();

innerExports['src::environment.name'] = (() =>{

                    
    
                    
    
                    let var_once_value_1621936460102;

                    function main(){

        
/**
 * 
 * 检测当前环境，返回值有 browser、zbee、node
 * 
 * @return {string} 环境名称 
 * 
 * @once
 * 
 */

const {
    toString
} = Object.prototype,
BROWSER_NAMES = {
    micromessenger: 'weixin-browser',
    ue4:'ue4-browser',
    unity: 'unity-browser',
    electron:'electron-browser',
    browser:'browser'
};

if(typeof window === 'object' && toString.call(window) === '[object Window]' && typeof document === 'object' && toString.call(document) === '[object HTMLDocument]'){
    
    return BROWSER_NAMES[(navigator.userAgent.toLowerCase().match(/micromessenger|ue4|unity|electron/) || ['browser'])[0]];

}else if(typeof process === 'object' && typeof global === 'object' && typeof require === 'function'){

    try{

        let [
            path
        ] = process.argv ;

        return /electron\.exe$/.test(path) ;

    }catch(err){

    }

    return 'node' ;
}

return 'other' ;

    }
    
                    return function(){
    
                        
    
                        
        if(var_once_value_1621936460102){

            return var_once_value_1621936460102 ;

        }
        return var_once_value_1621936460102 = main.call(this ) ;
        
                    } ;
    
                })();

innerExports['src::function.get'] = (() =>{

                    let isString,isFunction,empty;
    
                    let var_init_locked_1620353142986;
    
                    

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
    
                        
        if(!var_init_locked_1620353142986){

            isString = include('src::is.string');
isFunction = include('src::is.function');
empty = include('src::function.empty');

            var_init_locked_1620353142986 = true ;
        }
        
    
                        return main.call(this , fn , scope) ;
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

innerExports['src::browser.selector.parent'] = (() =>{

                    let is;
    
                    let var_init_locked_1621936465140;
    
                    

                    function main(el , selector){

        
/**
 * 
 * 判断元素及其元素父祖级元素是否匹配选择器
 * 
 * @import is from .is
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
    
                        
        if(!var_init_locked_1621936465140){

            is = include('src::browser.selector.is');

            var_init_locked_1621936465140 = true ;
        }
        
    
                        return main.call(this , el , selector) ;
                    } ;
    
                })();

innerExports['src::browser.selector.is'] = (() =>{

                    
    
                    
    
                    

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

innerExports['src::browser.event.gesture.tap'] = (() =>{

                    let getEvent,getTouchEvents,browserEventGestureTapEvent,stop,maxDuration;
    
                    let var_init_locked_1625796182606;
 
                    

                    const var_current_scope_1625796182606 = new Map();
    
                    return function(e){
    
                        
        if(!var_init_locked_1625796182606){

            getEvent = include('src::browser.event.single');
getTouchEvents = include('src::browser.event.touches');
browserEventGestureTapEvent = include('src::browser.event.gesture.tap.event');
stop = include('src::browser.event.stop');
maxDuration = config('event.tap' , 'maxDuration');

            var_init_locked_1625796182606 = true ;
        }
        
    
                        
        
        if(!var_current_scope_1625796182606.has(this)){

            var_current_scope_1625796182606.set(this , (() => {
                const enabled = include('src::browser.event.gesture.tap.enabled').bind(this);
const disabled = include('src::browser.event.gesture.tap.disabled').bind(this);

                function main(e){

        
/**
 * 
 * 开始事件监听
 * 
 * @import getEvent from browser.event.single
 * 
 * @import getTouchEvents from browser.event.touches
 * 
 * @import enabled from .tap.enabled scoped
 * 
 * @import disabled from .tap.disabled scoped
 * 
 * @config maxDuration from event.tap...maxDuration
 * 
 * @import .tap.event
 * 
 * @import stop from ..stop
 *
 * @param {Event} e 事件对象
 * 
 */

if(getTouchEvents(e , 'start')){

   disabled(e) ;

   return ;

}

let me = this,
   nativeEvent = getEvent(e , 'start'),
   {
      pageX:x,
      pageY:y,
      pointerType,
      button
   } = nativeEvent;

if(pointerType === 'mouse'){

   if(button !== 0){

      return ;
   }
}

me.startPoint = {
   x,
   y
} ;

me.nativeEvent = nativeEvent ;

enabled(e) ;

me.timer = setTimeout(() => disabled(e) , maxDuration) ;


    }

                return main ;

            })());
        }

        const main = var_current_scope_1625796182606.get(this) ;

        
    
                        return main.call(this , e) ;
                    } ;
    
                })();

innerExports['src::browser.event.single'] = (() =>{

                    
    
                    
    
                    

                    function main(e , name){

        
/**
 * 
 * 获得单一的事件对象
 * 
 * @param {Event} e 事件对象
 * 
 * @param {string} name 事件名称
 *  
 * @return {mixed} 事件对象 
 * 
 */

 let touches ;

 switch(name){

    case 'start':
    case 'move':

        touches = e.touches ;

        break ;

    case 'end':

        touches = e.changedTouches ;
 }

 if(touches){

    return touches[0] ;
 }

 return e ;

    }
    
                    return function(e , name){
    
                        
    
                        return main.call(this , e , name) ;
                    } ;
    
                })();

innerExports['src::browser.event.touches'] = (() =>{

                    
    
                    
    
                    

                    function main(e , name){

        
/**
 * 
 * 如果当前设备处于多点触控时返回，其它时候返回空
 * 
 * @param {Event} e 事件对象
 * 
 * @param {string} name 事件名称
 * 
 * @return {mixed} 触摸事件集合
 * 
 */

let touches ;

switch(name){

   case 'start':
   case 'move':

       touches = e.touches ;

       break ;

   case 'end':

       touches = e.changedTouches ;
}

if(touches && touches.length > 1){

    return touches ;
}

    }
    
                    return function(e , name){
    
                        
    
                        return main.call(this , e , name) ;
                    } ;
    
                })();

innerExports['src::is.browser.support.pointer'] = (() =>{

                    
    
                    
    
                    let var_once_value_1621936463708;

                    function main(){

        
/**
 * 
 * 判断当前浏览器是否支持点触
 * 
 * @return {boolean} 如果是支持点触则返回 true ，否则返回 false 
 * 
 * @once
 * 
 */

return global.hasOwnProperty('onpointerdown');

    }
    
                    return function(){
    
                        
    
                        
        if(var_once_value_1621936463708){

            return var_once_value_1621936463708 ;

        }
        return var_once_value_1621936463708 = main.call(this ) ;
        
                    } ;
    
                })();

innerExports['src::is.browser.support.touch'] = (() =>{

                    
    
                    
    
                    let var_once_value_1621936463727;

                    function main(){

        
/**
 * 
 * 判断当前浏览器是否支持触摸
 * 
 * @return {boolean} 如果是支持触摸则返回 true ，否则返回 false 
 * 
 * @once
 * 
 */

return global.hasOwnProperty('ontouchstart');

    }
    
                    return function(){
    
                        
    
                        
        if(var_once_value_1621936463727){

            return var_once_value_1621936463727 ;

        }
        return var_once_value_1621936463727 = main.call(this ) ;
        
                    } ;
    
                })();

innerExports['src::browser.event.name.single'] = (() =>{

                    let isSupportPointer,isSupportTouch;
    
                    let var_init_locked_1621936465191;
    
                    

                    function main(name , e){

        
/**
 * 
 * 获取事件名称
 * 
 * @import isSupportPointer from is.browser.support.pointer
 * 
 * @import isSupportTouch from is.browser.support.touch
 * 
 * @param {string} name 事件名称
 * 
 * @param {PointerEvent} [e] 事件对象
 * 
 * @return {mixed} 返回说明 
 * 
 */

 let isTouch = isSupportTouch() ;

 if(e){

    let {
        pointerType,
        touches
    } = e;
    
    if(pointerType === 'touch' || touches){

        isTouch = true ;
    }
 }

if(isTouch){

    return `touch${name}` ;

}else{

    switch(name){

        case 'start':
    
            name = 'down' ;
    
            break ;
    
        case 'end':
    
            name = 'up' ;
    }
    
    if(isSupportPointer()){

        return `pointer${name}` ;
    }
    
    return `mouse${name}` ;
}



    }
    
                    return function(name , e){
    
                        
        if(!var_init_locked_1621936465191){

            isSupportPointer = include('src::is.browser.support.pointer');
isSupportTouch = include('src::is.browser.support.touch');

            var_init_locked_1621936465191 = true ;
        }
        
    
                        return main.call(this , name , e) ;
                    } ;
    
                })();

innerExports['src::math.point.line.distance'] = (() =>{

                    
    
                    
    
                    

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

innerExports['src::browser.scale'] = (() =>{

                    
    
                    
    
                    let var_once_value_1621936464709;

                    function main(){

        /**
 * 
 * 获得当前浏览器的缩放比率
 * 
 * @return {number} 缩放比率
 * 
 * @once
 * 
 */

return window.devicePixelRatio ;


    }
    
                    return function(){
    
                        
    
                        
        if(var_once_value_1621936464709){

            return var_once_value_1621936464709 ;

        }
        return var_once_value_1621936464709 = main.call(this ) ;
        
                    } ;
    
                })();

innerExports['src::class.empty'] = (() =>{

                    
    
                    
    
                    let var_once_value_1621936459423;

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
    
                        
    
                        
        if(var_once_value_1621936459423){

            return var_once_value_1621936459423 ;

        }
        return var_once_value_1621936459423 = main.call(this ) ;
        
                    } ;
    
                })();

innerExports['src::map.constructor'] = (() =>{

                    
    
                    
    
                    

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

innerExports['src::map.size'] = (() =>{

                    
    
                    
    
                    

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

innerExports['src::map.find'] = (() =>{

                    let equals;
    
                    let var_init_locked_1621936459506;
    
                    

                    function main(keys){

        
/**
 * 
 * 判断指定组合键是否存在
 * 
 * @import equals from data.equals
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

           if(!equals(groupKeys[i] ,  keys[i])){

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
    
                        
        if(!var_init_locked_1621936459506){

            equals = include('src::data.equals');

            var_init_locked_1621936459506 = true ;
        }
        
    
                        return main.call(this , keys) ;
                    } ;
    
                })();

innerExports['src::map.set'] = (() =>{

                    
    
                    
 
                    

                    const var_current_scope_1621936459480 = new Map();
    
                    return function(...values){
    
                        
    
                        
        
        if(!var_current_scope_1621936459480.has(this)){

            var_current_scope_1621936459480.set(this , (() => {
                const find = include('src::map.find').bind(this);

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

                return main ;

            })());
        }

        const main = var_current_scope_1621936459480.get(this) ;

        
    
                        return main.call(this , ...values) ;
                    } ;
    
                })();

innerExports['src::map.get'] = (() =>{

                    
    
                    
 
                    

                    const var_current_scope_1621936459527 = new Map();
    
                    return function(...keys){
    
                        
    
                        
        
        if(!var_current_scope_1621936459527.has(this)){

            var_current_scope_1621936459527.set(this , (() => {
                const find = include('src::map.find').bind(this);

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

                return main ;

            })());
        }

        const main = var_current_scope_1621936459527.get(this) ;

        
    
                        return main.call(this , ...keys) ;
                    } ;
    
                })();

innerExports['src::map.has'] = (() =>{

                    
    
                    
 
                    

                    const var_current_scope_1621936459545 = new Map();
    
                    return function(...keys){
    
                        
    
                        
        
        if(!var_current_scope_1621936459545.has(this)){

            var_current_scope_1621936459545.set(this , (() => {
                const find = include('src::map.find').bind(this);

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

                return main ;

            })());
        }

        const main = var_current_scope_1621936459545.get(this) ;

        
    
                        return main.call(this , ...keys) ;
                    } ;
    
                })();

innerExports['src::map.delete'] = (() =>{

                    
    
                    
 
                    

                    const var_current_scope_1621936459566 = new Map();
    
                    return function(...keys){
    
                        
    
                        
        
        if(!var_current_scope_1621936459566.has(this)){

            var_current_scope_1621936459566.set(this , (() => {
                const find = include('src::map.find').bind(this);

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

                return main ;

            })());
        }

        const main = var_current_scope_1621936459566.get(this) ;

        
    
                        return main.call(this , ...keys) ;
                    } ;
    
                })();

innerExports['src::map.for'] = (() =>{

                    
    
                    
    
                    

                    function main(fn){

        
/**
 * 
 * 循环
 * 
 * @param {function} fn 
 * 
 */

 let {
    map
 } = this ;

 map.forEach(fn) ;

    }
    
                    return function(fn){
    
                        
    
                        return main.call(this , fn) ;
                    } ;
    
                })();

innerExports['src::map.clear'] = (() =>{

                    
    
                    
    
                    

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

innerExports['src::map.find.fuzzy'] = (() =>{

                    let isDefined;
    
                    let var_init_locked_1621936459618;
    
                    

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
    
                        
        if(!var_init_locked_1621936459618){

            isDefined = include('src::is.defined');

            var_init_locked_1621936459618 = true ;
        }
        
    
                        return main.call(this , ...keys) ;
                    } ;
    
                })();

innerExports['src::map'] = (() =>{

                    let extend,constructor,get_size,method_set,method_get,method_has,method_delete,method_forEach,method_clear,method_find,isObject;
    
                    let var_init_locked_1621936459406;
    
                    let var_class_1621936459406;
    
                    

                    let var_global_main_1621936459406 ;
    
                    return function(){
    
                        
        if(!var_init_locked_1621936459406){

            extend = include('src::class.empty')();
constructor = include('src::map.constructor');
get_size = include('src::map.size');
method_set = include('src::map.set');
method_get = include('src::map.get');
method_has = include('src::map.has');
method_delete = include('src::map.delete');
method_forEach = include('src::map.for');
method_clear = include('src::map.clear');
method_find = include('src::map.find.fuzzy');
isObject = include('src::is.object.simple');

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

            var_class_1621936459406 = class extends main{

                static get __ZBEE_IS_CLASS__(){

                    return true ;
                }


                get __ZBEE_CLASS__(){

                    return true ;
                }

                get __ZBEE_CURRENT_CLASS__(){

                    return var_class_1621936459406 ;
                }

                get __ZBEE_CLASS_NAME__(){

                    return 'src::map' ;
                }

            } ;

            main = var_class_1621936459406 ;
        
var_global_main_1621936459406 = main;

            var_init_locked_1621936459406 = true ;
        }
        
    
                        return new var_global_main_1621936459406() ;
                    } ;
    
                })();

innerExports['src::browser.event.listeners'] = (() =>{

                    let map;
    
                    let var_init_locked_1621936465124;
    
                    let var_once_value_1621936465124;

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
    
                        
        if(!var_init_locked_1621936465124){

            map = include('src::map')();

            var_init_locked_1621936465124 = true ;
        }
        
    
                        
        if(var_once_value_1621936465124){

            return var_once_value_1621936465124 ;

        }
        return var_once_value_1621936465124 = main.call(this ) ;
        
                    } ;
    
                })();

innerExports['src::event.listeners'] = (() =>{

                    let map;
    
                    let var_init_locked_1621936459362;
    
                    let var_once_value_1621936459362;

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
    
                        
        if(!var_init_locked_1621936459362){

            map = include('src::map')();

            var_init_locked_1621936459362 = true ;
        }
        
    
                        
        if(var_once_value_1621936459362){

            return var_once_value_1621936459362 ;

        }
        return var_once_value_1621936459362 = main.call(this ) ;
        
                    } ;
    
                })();

innerExports['src::event.listener.native.remove'] = (() =>{

                    
    
                    
    
                    

                    function main(target , name , fn , options){

        
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
 * @param {object} [options] 事件监听函数配置
 * 
 */

 if(target.removeEventListener){

    target.removeEventListener(name , fn , options) ;
 
 }else{

    const remove = target.off || target.un;

    remove.call(target , name , fn) ;
 }



    }
    
                    return function(target , name , fn , options){
    
                        
    
                        return main.call(this , target , name , fn , options) ;
                    } ;
    
                })();

innerExports['src::event.listener.remove'] = (() =>{

                    let isString,isObject,isArray,remove,listeners,native;
    
                    let var_init_locked_1621936459342;
    
                    

                    function main(target , name , fn , scope){

        /**
 * 
 * 移除事件监听
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
 * 
 * @import is.array
 * 
 * @import remove from .remove
 * 
 * @import listeners from ..listeners value
 * 
 * @import native from .native.remove
 * 
 * @param {mixed} target 事件主体
 * 
 * @param {string|object|array} name 事件名称
 * 
 * @param {mixed} fn 事件回调
 * 
 * @param {mixed} [scope] 事件作用域
 * 
 */

 if(isString(name)){

    scope = scope || target ;

    if(fn){

        let listener = listeners.get(target , name , fn , scope) ;

        if(listener){

            let {
                fn:listenersFn,
                options
            } = listener ;

            native(target , name , listenersFn , options) ;

            listeners.delete(target , name , fn , scope) ;
        }
    
    }else{

        let result = listeners.find(target , name) ;

        for(let {
            key
        } of result){

            remove(target , name , key[2] , key[3]) ;
        }
    }
 
 }else if(isObject(name)){

    let {
        scope,
        ...listeners
    } = name,
    names = Object.keys(listeners);

    scope = scope || target ;

    for(let name of names){

        remove(target , name , listeners[name] , scope) ;
    }

 }else if(isArray(name)){

    let names = name ;

    for(let name of names){

        remove(target , name) ;
    }
 }

    }
    
                    return function(target , name , fn , scope){
    
                        
        if(!var_init_locked_1621936459342){

            isString = include('src::is.string');
isObject = include('src::is.object.simple');
isArray = include('src::is.array');
remove = include('src::event.listener.remove');
listeners = include('src::event.listeners')();
native = include('src::event.listener.native.remove');

            var_init_locked_1621936459342 = true ;
        }
        
    
                        return main.call(this , target , name , fn , scope) ;
                    } ;
    
                })();

innerExports['src::browser.event.listener.remove'] = (() =>{

                    let listeners,doRemove,isObject;
    
                    let var_init_locked_1621936465266;
    
                    

                    
/**
 * 
 * 去除监听事件
 * 
 * @import listeners from ..listeners value
 * 
 * @import doRemove from event.listener.remove
 * 
 * @import isObject from is.object.simple
 * 
 * @param {mixed} target
 * 
 * @param {mixed} event 目标监听事件
 * 
 * @param {mixed} fn 目标监听回调
 * 
 * @param {object} [scope] 作用域
 * 
 * @return {mixed} 返回说明 
 * 
 */

 function main(target , event , fn , scope){

    if(isObject(event)){

        let names = Object.keys(event) ;

        for(let name of names){

            if(name !== 'scope'){

                let fn,
                    listener = event[name];

                if(isObject(listener)){

                    fn = listener.fn ;

                    scope = scope || listener.scope ;
                
                }else{

                    fn = listener ;
                }

                remove(target , name , fn , scope) ;
            }
        }
    
    }else{

        remove(target , event , fn , scope) ;
    }
 }

 function remove(target , event , fn , scope){

    let listener = listeners.get(target , event , fn , scope);

    if(listener){

        doRemove(target , event , listener) ;

        listeners.delete(target , event , fn , scope) ;
    }
 }
    
                    return function(target , event , fn , scope){
    
                        
        if(!var_init_locked_1621936465266){

            listeners = include('src::browser.event.listeners')();
doRemove = include('src::event.listener.remove');
isObject = include('src::is.object.simple');

            var_init_locked_1621936465266 = true ;
        }
        
    
                        return main.call(this , target , event , fn , scope) ;
                    } ;
    
                })();

innerExports['src::browser.event.listener.global.remove'] = (() =>{

                    let remove;
    
                    let var_init_locked_1621936465252;
    
                    

                    function main(event , fn){

        
/**
 * 
 * 去除监听全局事件
 * 
 * @import remove from ..remove
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
    
                        
        if(!var_init_locked_1621936465252){

            remove = include('src::browser.event.listener.remove');

            var_init_locked_1621936465252 = true ;
        }
        
    
                        return main.call(this , event , fn) ;
                    } ;
    
                })();

innerExports['src::browser.event.gesture.tap.disabled'] = (() =>{

                    let getName,un;
    
                    let var_init_locked_1625795782113;
    
                    

                    function main(e){

        
/**
 * 
 * 取消监听全局事件
 * 
 * @import getName from browser.event.name.single
 * 
 * @import un from browser.event.listener.global.remove
 * 
 * @param {Event} e 事件对象
 * 
 */

 let me = this,
 {
    onMove,
    onEnd,
    timer
 } = me;

 if(timer){

   clearTimeout(timer) ;
 }

 un(getName('move' , e) ,  onMove) ;

 un(getName('end' , e) ,  onEnd) ;

 delete me.timer ;

 delete me.onMove ;

 delete me.onEnd ;

 

    }
    
                    return function(e){
    
                        
        if(!var_init_locked_1625795782113){

            getName = include('src::browser.event.name.single');
un = include('src::browser.event.listener.global.remove');

            var_init_locked_1625795782113 = true ;
        }
        
    
                        return main.call(this , e) ;
                    } ;
    
                })();

innerExports['config::event.tap'] = (() =>{

                    let get;
    
                    let var_init_locked_1621936466053;
    
                    

                    const config = {
    "maxDuration": 600,
    "moveDistance":100
};
                function main(key){

                    return get(config , key) ;

                }
                
    
                    return function(key){
    
                        
        if(!var_init_locked_1621936466053){

            get = include('src::object.value.get');

            var_init_locked_1621936466053 = true ;
        }
        
    
                        return main.call(this , key) ;
                    } ;
    
                })();

innerExports['src::browser.event.gesture.tap.move'] = (() =>{

                    let getEvent,getDistance,getScale,moveDistance;
    
                    let var_init_locked_1625795782155;
 
                    

                    const var_current_scope_1625795782155 = new Map();
    
                    return function(e){
    
                        
        if(!var_init_locked_1625795782155){

            getEvent = include('src::browser.event.single');
getDistance = include('src::math.point.line.distance');
getScale = include('src::browser.scale');
moveDistance = config('event.tap' , 'moveDistance');

            var_init_locked_1625795782155 = true ;
        }
        
    
                        
        
        if(!var_current_scope_1625795782155.has(this)){

            var_current_scope_1625795782155.set(this , (() => {
                const disabled = include('src::browser.event.gesture.tap.disabled').bind(this);

                function main(e){

        
/**
 * 
 * 移动事件监听
 * 
 * @import getEvent from browser.event.single
 * 
 * @import getDistance from math.point.line.distance
 * 
 * @import getScale from browser.scale
 * 
 * @import disabled from .disabled scoped
 * 
 * @config moveDistance from event.tap...moveDistance
 * 
 * @param {Event} e 事件对象
 * 
 */

let me = this,
    {
        pageX,
        pageY
    } = getEvent(e , 'move'),
    {
        startPoint,
        dispatch
    } = this;

if(Math.round(getDistance({
    x:pageX,
    y:pageY
} , startPoint)) * getScale() >= moveDistance){

    dispatch('tapcancel') ;

    disabled(e) ;
}

    }

                return main ;

            })());
        }

        const main = var_current_scope_1625795782155.get(this) ;

        
    
                        return main.call(this , e) ;
                    } ;
    
                })();

innerExports['src::browser.event.stop'] = (() =>{

                    let isObject;
    
                    let var_init_locked_1621936465170;
    
                    

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
    
                        
        if(!var_init_locked_1621936465170){

            isObject = include('src::is.object.simple');

            var_init_locked_1621936465170 = true ;
        }
        
    
                        return main.call(this , e) ;
                    } ;
    
                })();

innerExports['src::browser.event.gesture.tap.end'] = (() =>{

                    let getEvent,stop;
    
                    let var_init_locked_1625795782165;
 
                    

                    const var_current_scope_1625795782165 = new Map();
    
                    return function(e){
    
                        
        if(!var_init_locked_1625795782165){

            getEvent = include('src::browser.event.single');
stop = include('src::browser.event.stop');

            var_init_locked_1625795782165 = true ;
        }
        
    
                        
        
        if(!var_current_scope_1625795782165.has(this)){

            var_current_scope_1625795782165.set(this , (() => {
                const disabled = include('src::browser.event.gesture.tap.disabled').bind(this);

                function main(e){

        
/**
 * 
 * 结束事件监听
 * 
 * @import getEvent from browser.event.single
 * 
 * @import disabled from .disabled scoped
 * 
 * @import stop from browser.event.stop
 * 
 * @param {Event} e 事件对象
 * 
 */

 let me = this,
 {
    nativeEvent
 } = me ;

 me.dispatch('tap' , {
    nativeEvent
 }) ;

 disabled(e) ;

 

    }

                return main ;

            })());
        }

        const main = var_current_scope_1625795782165.get(this) ;

        
    
                        return main.call(this , e) ;
                    } ;
    
                })();

innerExports['src::browser.event.prevent'] = (() =>{

                    
    
                    
    
                    

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

innerExports['src::event.listener.native.add'] = (() =>{

                    
    
                    
    
                    

                    function main(target , name , fn , options){

        
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
 * @param {object} [options] 事件参数
 * 
 */

 if(target.addEventListener){

    target.addEventListener(name , fn , options) ;
 
 }else{

    target.on(name , fn) ;
 }

    }
    
                    return function(target , name , fn , options){
    
                        
    
                        return main.call(this , target , name , fn , options) ;
                    } ;
    
                })();

innerExports['src::event.listener.add'] = (() =>{

                    let isString,isObject,add,remove,get,listeners,native,isArray;
    
                    let var_init_locked_1621936459318;
    
                    

                    function main(target , name , fn , {once , options , scope}){

        /**
 * 
 * 添加事件监听
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
 * 
 * @import add from .add
 * 
 * @import remove from .remove
 * 
 * @import get from function.get
 * 
 * @import listeners from ..listeners value
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
 * @param {object} [options.options] 浏览器事件监听所需要参数
 * 
 * @param {mixed} [options.scope] 事件作用域
 * 
 */

 if(isString(name)){

    scope = scope || target ;

    if(listeners.has(target , name , fn , scope)){

        return ;
    }

    let listener,
        listenerFn = get(fn , scope) ;

    if(listenerFn){

        if(once){

            listener = function(...args){

                listenerFn(...args) ;

                remove(target , name , fn , scope) ;
            } ;
        
        }else{

            listener = listenerFn ;
        }

        native(target , name , listener , options) ;

        listeners.set(target , name , fn , scope , {
            fn:listener,
            options
        }) ;
    }

 }else if(isObject(name)){

    let {
        scope,
        ...listeners
    } = name,
    names = Object.keys(listeners) ;

    scope = scope || target ;

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
    
                    return function(target , name , fn , {once = false , options , scope} = {}){
    
                        
        if(!var_init_locked_1621936459318){

            isString = include('src::is.string');
isObject = include('src::is.object.simple');
add = include('src::event.listener.add');
remove = include('src::event.listener.remove');
get = include('src::function.get');
listeners = include('src::event.listeners')();
native = include('src::event.listener.native.add');
isArray = include('src::is.array');

            var_init_locked_1621936459318 = true ;
        }
        
    
                        return main.call(this , target , name , fn , {once , options , scope}) ;
                    } ;
    
                })();

innerExports['src::browser.event.listener.add'] = (() =>{

                    let listeners,is,stopEvent,preventEvent,doAdd,isObject,get;
    
                    let var_init_locked_1621936465103;
    
                    

                    
/**
 * 
 * 监听事件
 * 
 * @import listeners from ..listeners value
 * 
 * @import is from browser.selector.parent
 * 
 * @import stopEvent from ..stop
 * 
 * @import preventEvent from ..prevent
 * 
 * @import doAdd from event.listener.add
 * 
 * @import isObject from is.object.simple
 * 
 * @import get from function.get
 * 
 * @param {mixed} target 目标
 * 
 * @param {mixed} event 目标监听事件
 * 
 * @param {mixed} [fn] 目标监听回调
 * 
 * @param {object} [config = {}] 配置
 * 
 */

 function main(target , event , fn , config){

    if(isObject(event)){

        let {
            scope,
            ...listeners
        } = event ;

        let names = Object.keys(listeners) ;

        for(let name of names){

            let listener = listeners[name] ;

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
        
    }else{

        add(target , event , fn , config) ;
    }

 }

 function add(target , event , fn , {
     selector,
     stop = false,
     prevent = false,
     scope,
     ...config
 }){

    if(listeners.has(target , event , fn , scope)){

        return ;
    }

    let useFn = get(fn , scope),
        listener = e =>{
    
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
    
                    useFn(e) ;
                }
                
            }else{
    
                useFn(e) ;
            }
        };
    
    listeners.set(target , event , fn , scope , listener) ;
    
    doAdd(target , event , listener , {
        options:{
            passive:false
        },
        ...config
    }) ;
 }


    
                    return function(target , event , fn , config = {}){
    
                        
        if(!var_init_locked_1621936465103){

            listeners = include('src::browser.event.listeners')();
is = include('src::browser.selector.parent');
stopEvent = include('src::browser.event.stop');
preventEvent = include('src::browser.event.prevent');
doAdd = include('src::event.listener.add');
isObject = include('src::is.object.simple');
get = include('src::function.get');

            var_init_locked_1621936465103 = true ;
        }
        
    
                        return main.call(this , target , event , fn , config) ;
                    } ;
    
                })();

innerExports['src::browser.event.listener.global.add'] = (() =>{

                    let add;
    
                    let var_init_locked_1621936465079;
    
                    

                    function main(event , fn , config){

        
/**
 * 
 * 监听全局事件
 * 
 * @import add from ..add
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
    
                        
        if(!var_init_locked_1621936465079){

            add = include('src::browser.event.listener.add');

            var_init_locked_1621936465079 = true ;
        }
        
    
                        return main.call(this , event , fn , config) ;
                    } ;
    
                })();

innerExports['src::browser.event.gesture.tap.enabled'] = (() =>{

                    let getName,on;
    
                    let var_init_locked_1625795782140;
 
                    

                    const var_current_scope_1625795782140 = new Map();
    
                    return function(e){
    
                        
        if(!var_init_locked_1625795782140){

            getName = include('src::browser.event.name.single');
on = include('src::browser.event.listener.global.add');

            var_init_locked_1625795782140 = true ;
        }
        
    
                        
        
        if(!var_current_scope_1625795782140.has(this)){

            var_current_scope_1625795782140.set(this , (() => {
                const onMove = include('src::browser.event.gesture.tap.move').bind(this);
const onEnd = include('src::browser.event.gesture.tap.end').bind(this);

                function main(e){

        
/**
 * 
 * 监听全局事件
 * 
 * @import getName from browser.event.name.single
 * 
 * @import onMove from .move scoped
 * 
 * @import onEnd from .end scoped
 * 
 * @import on from browser.event.listener.global.add
 * 
 * @param {Event} e 事件对象
 * 
 */

 let me = this ;

 on(getName('move' , e) ,  me.onMove = onMove) ;

 on(getName('end' , e) , me.onEnd = onEnd) ;

 

    }

                return main ;

            })());
        }

        const main = var_current_scope_1625795782140.get(this) ;

        
    
                        return main.call(this , e) ;
                    } ;
    
                })();

innerExports['src::browser.event.gesture.tap.event'] = (() =>{

                    let getName;
    
                    let var_init_locked_1621936466164;
    
                    

                    function main(){

        /**
 * 
 * 获得启动监听事件名称
 * 
 * @import getName from browser.event.name.single
 * 
 * @return {string}
 * 
 */

 return getName('start') ;


    }
    
                    return function(){
    
                        
        if(!var_init_locked_1621936466164){

            getName = include('src::browser.event.name.single');

            var_init_locked_1621936466164 = true ;
        }
        
    
                        return main.call(this ) ;
                    } ;
    
                })();

innerExports['src::browser.event.gesture.vue'] = (() =>{

                    let generate,EventDom,isObject,isFunction,on,un;
    
                    let var_init_locked_1621936466205;
    
                    

                    
/**
 * 
 * 初始化 VUE 触摸指令
 * 
 * @import generate from id.generate
 * 
 * @import EventDom from browser.event.gesture.manager.dom value
 * 
 * @import isObject from is.object.simple
 * 
 * @import is.function
 * 
 * @import on from browser.event.listener.element.add
 * 
 * @import un from browser.event.listener.element.remove
 * 
 * @param {mixed} [Vue] VUE 实例
 * 
 * 
 */

 const gesture = Object.freeze({

    bind(el, {
        arg:name,
        value:fn
    }){

      addEventListener(el , name , fn) ;

    },
  
    update(el, {
        arg:name,
        value:fn,
        oldValue:oldFn
    }) {

        if(fn !== oldFn){

            removeEventListener(el , name , oldFn) ;
  
            addEventListener(el , name , fn) ;
        }
    },
  
    unbind(el, {
        arg:name,
        value:fn
    }){

        removeEventListener(el , name , fn) ;
      
    }
}) ;

function main(Vue){

    if(Vue){

        Vue.directive('gesture' , gesture) ;
        
    }else{

        return {
            gesture
        } ;
    }
}

function addEventListener(el , name , fn){

    let event = `gesture:${name}` ;

    if(isObject(fn)){

        let {
            fn:listenerFn,
            scope,
            ...options
        } = fn ;

        EventDom.install(el, name , options);
        
        on(el , event , listenerFn , {
            scope
        });

    }else{

        EventDom.install(el, name);

        on(el , event , fn) ;
    }
}

function removeEventListener(el , name , fn){

    let event = `gesture:${name}` ;

    if(isObject(fn)){

        let {
            fn:listenerFn,
            scope
        } = fn ;
        
        un(el , event , listenerFn , scope);

    }else if(isFunction(fn)){

        un(el , event , fn) ;
    }

    EventDom.uninstall(el, name);
}
    
                    return function(Vue){
    
                        
        if(!var_init_locked_1621936466205){

            generate = include('src::id.generate');
EventDom = include('src::browser.event.gesture.manager.dom')();
isObject = include('src::is.object.simple');
isFunction = include('src::is.function');
on = include('src::browser.event.listener.element.add');
un = include('src::browser.event.listener.element.remove');

            var_init_locked_1621936466205 = true ;
        }
        
    
                        return main.call(this , Vue) ;
                    } ;
    
                })();

innerExports['src::id.generate'] = (() =>{

                    let getName;
    
                    let var_init_locked_1621936460078;
    
                    

                    
/**
 * 
 * 生成唯一的编号
 * 
 * @import getName from environment.name
 * 
 * @param {string} prefix 编号前缀
 * 
 * @return {string} 生成后的唯一编号
 * 
 * @require uuid
 * 
 */

 let count = 1 ; 

 function main(prefix = 'zb-'){

    return `${prefix}${count ++}` ;

 }
    
                    return function(prefix){
    
                        
        if(!var_init_locked_1621936460078){

            getName = include('src::environment.name');

            var_init_locked_1621936460078 = true ;
        }
        
    
                        return main.call(this , prefix) ;
                    } ;
    
                })();

innerExports['src::browser.event.dispatch'] = (() =>{

                    
    
                    
    
                    

                    function main(el , name , detail){

        
/**
 * 
 * 触发一个自定义事件
 * 
 * @param {HTMLElement} el 元素
 * 
 * @param {string} name 自定义事件名称
 * 
 * @param {mixed} detail 基于自定义事件传递的数据
 * 
 */

el.dispatchEvent(new CustomEvent(name , {
   detail,
   bubbles:false,
   cancelable:false
})) ;


    }
    
                    return function(el , name , detail){
    
                        
    
                        return main.call(this , el , name , detail) ;
                    } ;
    
                })();

innerExports['src::browser.event.listener.element.add'] = (() =>{

                    let add;
    
                    let var_init_locked_1621936465564;
    
                    

                    function main(el , event , fn , config){

        
/**
 * 
 * 监听元素事件
 * 
 * @import add from ..add
 * 
 * @param {HTMLElement} el 元素
 * 
 * @param {string} event 目标监听事件
 * 
 * @param {function} fn 目标监听回调
 * 
 * @param {object} [config] 配置
 * 
 */

 add(el , event , fn , config) ;

    }
    
                    return function(el , event , fn , config){
    
                        
        if(!var_init_locked_1621936465564){

            add = include('src::browser.event.listener.add');

            var_init_locked_1621936465564 = true ;
        }
        
    
                        return main.call(this , el , event , fn , config) ;
                    } ;
    
                })();

innerExports['src::browser.event.listener.element.remove'] = (() =>{

                    let remove;
    
                    let var_init_locked_1621936465575;
    
                    

                    function main(el , event , fn , scope){

        
/**
 * 
 * 去除监听元素事件
 * 
 * @import remove from ..remove
 * 
 * @param {HTMLElement} el 元素
 * 
 * @param {string} event 目标监听事件
 * 
 * @param {function} fn 目标监听回调
 * 
 * @param {mixed} scope 作用域
 * 
 * 
 */

remove(el , event , fn , scope) ;

    }
    
                    return function(el , event , fn , scope){
    
                        
        if(!var_init_locked_1621936465575){

            remove = include('src::browser.event.listener.remove');

            var_init_locked_1621936465575 = true ;
        }
        
    
                        return main.call(this , el , event , fn , scope) ;
                    } ;
    
                })();

innerExports['config::event'] = (() =>{

                    let get;
    
                    let var_init_locked_1621936465587;
    
                    

                    const config = {
    "tap":"tap",
    "dragstart":"drag",
    "drag":"drag",
    "dragend":"drag",
    "singletap":"tap.double",
    "doubletap":"tap.double",
    "longpress":"longpress",
    "longpresscancel":"longpress",
    "pinchstart":"pinch",
    "pinch":"pinch",
    "pinchend":"pinch"
};
                function main(key){

                    return get(config , key) ;

                }
                
    
                    return function(key){
    
                        
        if(!var_init_locked_1621936465587){

            get = include('src::object.value.get');

            var_init_locked_1621936465587 = true ;
        }
        
    
                        return main.call(this , key) ;
                    } ;
    
                })();

innerExports['src::browser.event.gesture.manager.dom'] = (() =>{

                    let createMap,doDispatch,isString,isObject,isArray,on,off,eventConfig;
    
                    let var_init_locked_1621936465550;
    
                    let var_class_1621936465550;
    
                    let var_once_value_1621936465550;

                    let var_global_main_1621936465550 ;
    
                    return function(){
    
                        
        if(!var_init_locked_1621936465550){

            createMap = include('src::map');
doDispatch = include('src::browser.event.dispatch');
isString = include('src::is.string');
isObject = include('src::is.object.simple');
isArray = include('src::is.array');
on = include('src::browser.event.listener.element.add');
off = include('src::browser.event.listener.element.remove');
eventConfig = config('event');

            
/**
 * 
 * 传统事件管理
 * 
 * @import createMap from map
 * 
 * @import doDispatch from browser.event.dispatch
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
 * 
 * @import is.array
 * 
 * @import on from ....listener.element.add
 * 
 * @import off from ....listener.element.remove
 * 
 * @config eventConfig from event
 * 
 * @once
 * 
 */

 function dispatch(event , params){

    doDispatch(this , `gesture:${event}`  , params) ;
 }

 function getEvents(name){

    let events = include(`browser.event.gesture.${name}.event`)() ;

    if(isString(events)){

        return [
            events
        ] ;
    }

    return events ;
 }

 function getName(name){

    return eventConfig[name] ;
 }

 class main {

    constructor(){

        let me = this ;

        me.events = createMap() ;

    }

    install(el , name , options = {}){

        let {
            events
        } = this ;

        name = getName(name);

        if(events.has(el , name)){

            return ;
        }

        let scope = {
            dispatch:dispatch.bind(el)
        },
        gestureEvents = getEvents(name),
        isAddMainListener = false,
        listeners = [];

        for(let event of gestureEvents){

            if(isString(event) && !isAddMainListener){

                let listener = include(`browser.event.gesture.${name}`).bind(scope) ;

                listeners.push(listener) ;

                on(el , event , listener , options) ;

                isAddMainListener = true ;
            
            }else if(isObject(event)){

                let {
                    event:name,
                    listener:fn
                } = event,
                listener = fn.bind(scope);

                listeners.push(listener) ;

                on(el , name , listener , options) ;
            }
        }

        events.set(el , name , listeners) ;
    }

    uninstall(el , name){

        name = getName(name);

        let {
            events
        } = this,
        listeners = events.get(el , name);

        if(isArray(listeners)){

            let gestureEvents = getEvents(name),
                {
                    length:len
                } = gestureEvents;

            for(let i = 0 ; i < len ; i ++){

                let event = gestureEvents[i],
                    listener = listeners[i];

                if(isString(event)){

                    off(el , event , listener) ;

                }else if(isObject(event)){

                    let {
                        event:name
                    } = event ;

                    off(el , name , listener) ;
                }
            }

            events.delete(el , name) ;
        }

        
    }
 }

            var_class_1621936465550 = class extends main{

                static get __ZBEE_IS_CLASS__(){

                    return true ;
                }


                get __ZBEE_CLASS__(){

                    return true ;
                }

                get __ZBEE_CURRENT_CLASS__(){

                    return var_class_1621936465550 ;
                }

                get __ZBEE_CLASS_NAME__(){

                    return 'src::browser.event.gesture.manager.dom' ;
                }

            } ;

            main = var_class_1621936465550 ;
        
var_global_main_1621936465550 = main;

            var_init_locked_1621936465550 = true ;
        }
        
    
                        
        if(var_once_value_1621936465550){

            return var_once_value_1621936465550 ;

        }
        return var_once_value_1621936465550 = new var_global_main_1621936465550() ;
        
                    } ;
    
                })();




