

const innerExports = {} ;

try{
    const {
        env
    } = process ;
    
    if(!env['ZBEE-APP-PATH']){
    
        env['ZBEE-APP-PATH'] = __dirname ;
    }
    
}catch(err){

}

const include = (() =>{

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


exports.include = include ;


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

        try{

            const {
                env
            } = process ;

            let data;

            try{

                data = require(`${env['ZBEE-APPLICATION-ROOT-PATH']}/config/${name.replace(/\./g , '/')}.json`) ;

            }catch(err){
            }

            if(data){

                return get_config(data , key) ;
            }
        
        }catch(err){

        }

        if(config.hasOwnProperty(name)){

            return get_config(config[name] , key) ;
        }

        return get_config(include(`config::${name}`)() , key) ;
    }

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

                let var_init_locked_1575965276593;

                

                

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

                    
        if(!var_init_locked_1575965276593){

            isType = include('is.type');

            var_init_locked_1575965276593 = true ;
        }
        

                    

                    return main.call(this , data) ;
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

innerExports['src::is.empty'] = (() =>{

                let isArray;

                let var_init_locked_1575965276597;

                

                

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

                    
        if(!var_init_locked_1575965276597){

            isArray = include('is.array');

            var_init_locked_1575965276597 = true ;
        }
        

                    

                    return main.call(this , data , allowEmptyString) ;
                } ;

            })();

innerExports['src::is.string'] = (() =>{

                let isType;

                let var_init_locked_1575965276597;

                

                

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

                    
        if(!var_init_locked_1575965276597){

            isType = include('is.type');

            var_init_locked_1575965276597 = true ;
        }
        

                    

                    return main.call(this , data) ;
                } ;

            })();

innerExports['src::array.from'] = (() =>{

                let isEmpty,isString;

                let var_init_locked_1575965276600;

                

                

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

                    
        if(!var_init_locked_1575965276600){

            isEmpty = include('is.empty');
isString = include('is.string');

            var_init_locked_1575965276600 = true ;
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

innerExports['src::is.function'] = (() =>{

                let isType;

                let var_init_locked_1575965276603;

                

                

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

                    
        if(!var_init_locked_1575965276603){

            isType = include('is.type');

            var_init_locked_1575965276603 = true ;
        }
        

                    

                    return main.call(this , data) ;
                } ;

            })();

innerExports['src::data.reader'] = (() =>{

                let isDefined,isArray,isObject,from,isString,empty,isFunction;

                let var_init_locked_1575965276612;

                let var_class_1575965276612;

                

                return function(){

                    
        if(!var_init_locked_1575965276612){

            isDefined = include('is.defined');
isArray = include('is.array');
isObject = include('is.object.simple');
from = include('array.from');
isString = include('is.string');
empty = include('function.empty')();
isFunction = include('is.function');

            var_init_locked_1575965276612 = true ;
        }
        

                    
        if(!var_class_1575965276612){

            /**
 * 
 * 数据读取器
 * 
 * @import is.defined
 * 
 * @import is.array
 * 
 * @import isObject from is.object.simple
 * 
 * @import from from array.from
 * 
 * @import is.string
 * 
 * @import empty from function.empty value
 * 
 * @import is.function
 * 
 * @class
 * 
 */

 class main {

    constructor({
        root = '.',
        fields = []
    }){

        let me = this ;

        me.rootProperty = root ;

        me.fields = getFields.call(me , fields) ;
    }

    read(data){

        let me = this,
            rows = getRows.call(me , data),
            records = [],
            count = 0;

        for(let row of rows){

            records.push(getRecord.call(me , row , rows , count ++ , data)) ;
        }

        return records ;
    }
 }

 function getRows(data){

    let {
        rootProperty,
        getData
    } = this ;

    return from(getData(data , rootProperty)) ;
 }

 function getRecord(row , rows , index , data){

    let {
        fields
    } = this,
    record = {};

    for(let {
        name,
        convert
    } of fields){

        record[name] = convert(row , rows , index , data) ;
    }

    return record ;
 }

 function getFields(fields) {

    let result = [],
        me = this;
     
    if(isObject(fields)){

        let names = Object.keys(fields) ;

        for(let name of names){

            let config = fields[name] ;

            if(isString(config)){

                config = {
                    name,
                    mapping:config
                }
            }

            if(isObject(config)){

                result.push(getField.call(me , {
                    ...config,
                    name
                })) ;
            }
        }

    }else if(isArray(fields)){

        for(let field of fields){

            if(isString(field)){

                field = {
                    name:field,
                    mapping:field
                } ;
            }

            if(isObject(field)){

                result.push(getField.call(me , field)) ;
            }
        }
    }

    return result ;
 }

 function getField({
     name,
     type,
     mapping,
     convert,
     defaultValue,
     ...options
 }) {

    let {
        getData
    } = this ;

    return {
        name,
        convert(data , ...args){

            if(isFunction(convert)){

                data = convert(data , ...args) ;
            
            }else{

                if(isString(mapping)){

                    data = getData(data , mapping) ;
                
                }else{
    
                    data = getData(data , name) ;
                }
    
                if(isString(type)){
    
                    data = include(`data.convert.${type}`)(data , options) ;
                }
    
            }

            return isDefined(data) ? data : defaultValue ;
        }
    } ;
 }

            var_class_1575965276612 = class extends main{

                static get __ZBEE_IS_CLASS__(){

                    return true ;
                }


                get __ZBEE_CLASS__(){

                    return var_class_1575965276612 ;
                }

                get __ZBEE_CLASS_NAME__(){

                    return 'src::data.reader' ;
                }

            } ;
        }
        

                    return var_class_1575965276612;
                } ;

            })();

innerExports['src::string.split'] = (() =>{

                let isEmpty;

                let var_init_locked_1575965276613;

                

                

                
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

                    
        if(!var_init_locked_1575965276613){

            isEmpty = include('is.empty');

            var_init_locked_1575965276613 = true ;
        }
        

                    

                    return main.call(this , target , splitRe) ;
                } ;

            })();

innerExports['src::is.object'] = (() =>{

                let isType;

                let var_init_locked_1575965276613;

                

                

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

return data instanceof Object ;

    }

                return function(data){

                    
        if(!var_init_locked_1575965276613){

            isType = include('is.type');

            var_init_locked_1575965276613 = true ;
        }
        

                    

                    return main.call(this , data) ;
                } ;

            })();

innerExports['src::object.value.get'] = (() =>{

                let split,isObject,isArray;

                let var_init_locked_1575965276623;

                

                

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

                    
        if(!var_init_locked_1575965276623){

            split = include('string.split');
isObject = include('is.object');
isArray = include('is.array');

            var_init_locked_1575965276623 = true ;
        }
        

                    

                    return main.call(this , data , key) ;
                } ;

            })();

innerExports['src::data.reader.json'] = (() =>{

                let Reader,get;

                let var_init_locked_1575965276624;

                let var_class_1575965276624;

                

                return function(model){

                    
        if(!var_init_locked_1575965276624){

            Reader = include('data.reader')();
get = include('object.value.get');

            var_init_locked_1575965276624 = true ;
        }
        

                    
        if(!var_class_1575965276624){

            /**
 * 
 * JSON 数据读取器
 * 
 * @import Reader from data.reader value
 * 
 * @import get from object.value.get
 * 
 * @param {object} model 模型配置
 * 
 */

 class main extends Reader{

   getData(data , path){

      return get(data , path) ;
   }
   
 }

            var_class_1575965276624 = class extends main{

                static get __ZBEE_IS_CLASS__(){

                    return true ;
                }


                get __ZBEE_CLASS__(){

                    return var_class_1575965276624 ;
                }

                get __ZBEE_CLASS_NAME__(){

                    return 'src::data.reader.json' ;
                }

            } ;
        }
        

                    return new var_class_1575965276624(model);
                } ;

            })();

innerExports['src::is.boolean'] = (() =>{

                let isType;

                let var_init_locked_1575965276624;

                

                

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

                    
        if(!var_init_locked_1575965276624){

            isType = include('is.type');

            var_init_locked_1575965276624 = true ;
        }
        

                    

                    return main.call(this , data) ;
                } ;

            })();

innerExports['src::is.number'] = (() =>{

                let isType;

                let var_init_locked_1575965276625;

                

                

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

                    
        if(!var_init_locked_1575965276625){

            isType = include('is.type');

            var_init_locked_1575965276625 = true ;
        }
        

                    

                    return main.call(this , data) ;
                } ;

            })();

innerExports['src::data.convert.boolean'] = (() =>{

                let isBoolean,isString,isNumber;

                let var_init_locked_1575965276627;

                

                

                function main(data){

        
/**
 * 
 * 将指定数据转换成布尔型
 * 
 * @import is.boolean
 * 
 * @import is.string
 * 
 * @import is.number
 *
 * @param {mixed} data 数据
 * 
 * @return {boolean} 转换后的布尔型 
 * 
 */

 if(isBoolean(data)){

    return data ;
 
 }else if(isString(data)){

    switch(data){

        case 'true':

            return true ;

        case 'false':

            return false ;
    }
    
 }else if(isNumber(data)){

    return Boolean(data) ;
 }

 return data !== undefined && data !== null ;

    }

                return function(data){

                    
        if(!var_init_locked_1575965276627){

            isBoolean = include('is.boolean');
isString = include('is.string');
isNumber = include('is.number');

            var_init_locked_1575965276627 = true ;
        }
        

                    

                    return main.call(this , data) ;
                } ;

            })();

innerExports['src::string.format'] = (() =>{

                

                

                

                

                
/**
 * 
 * 字符串格式化
 * 
 * @param {string} format 格式字符串
 * 
 * @param {mixed} [...args] 格式参数
 * 
 * @return {string} 格式化后的字符串 
 * 
 */

 let formatRe = /\{(\d+)\}/g ;

 function main(format , ...args){

    return format.replace(formatRe , (match , index) => args[index]) ;
 }

                return function(format , ...args){

                    

                    

                    return main.call(this , format , ...args) ;
                } ;

            })();

innerExports['src::date.parse'] = (() =>{

                let doFormat;

                let var_init_locked_1575965276628;

                

                

                /**
 * 
 * 将字符串转换成日期
 * 
 * @import doFormat from string.format
 * 
 * @param {string} data 字符串
 * 
 * @param {string} [format = 'YYYY-MM-DD'] 日期格式
 * 
 * @return {Date} 日期对象 
 * 
 * @require date-and-time
 * 
 */

const {
   parse
} = require('date-and-time') ;

function main(data , format){

   return parse(data , format) ;
}

 

                return function(data , format = 'YYYY-MM-DD'){

                    
        if(!var_init_locked_1575965276628){

            doFormat = include('string.format');

            var_init_locked_1575965276628 = true ;
        }
        

                    

                    return main.call(this , data , format) ;
                } ;

            })();

innerExports['src::data.convert.date'] = (() =>{

                let isNumber,isString,parse;

                let var_init_locked_1575965276631;

                

                

                function main(data , {format}){

        
/**
 * 
 * 将指定数据转换成日期对象
 * 
 * @import is.number
 * 
 * @import is.string
 * 
 * @import parse from date.parse
 * 
 * @param {mixed} data 数据
 * 
 * @param {object} [config = {}] 配置
 * 
 * @param {string} [config.format] 日期格式字符串
 * 
 * @return {Date} 转换后的日期对象
 * 
 */

 if(isNumber(data)){

    return new Date(data) ;
 }

 if(isString(data)){

    if(/^\d+$/.test(data)){

      return new Date(Number(data)) ;

    }else if(/^\d{4}\-\d{2}-\d{2}T\d{2}\:\d{2}\:[\d\.]+Z$/.test(data)){

      return new Date(data) ;
    }

    return parse(data , format) ;
 }

 return null ;

    }

                return function(data , {format} = {}){

                    
        if(!var_init_locked_1575965276631){

            isNumber = include('is.number');
isString = include('is.string');
parse = include('date.parse');

            var_init_locked_1575965276631 = true ;
        }
        

                    

                    return main.call(this , data , {format}) ;
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

innerExports['src::math.round'] = (() =>{

                

                

                

                

                function main(data , digit){

        
/**
 * 
 * 实现四舍五入
 * 
 * @param {number} data 数值
 * 
 * @param {number} [digit = 0] 保留小数点位数
 * 
 * @return {number} 四舍五入后的数值
 * 
 */

 if(digit === 0){

    return Math.round(data) ;
 }

 return Math.round(data * Math.pow(10 , digit)) / Math.pow(10 , digit);

    }

                return function(data , digit = 0){

                    

                    

                    return main.call(this , data , digit) ;
                } ;

            })();

innerExports['src::data.convert.number'] = (() =>{

                let isString,isDate,round,isNumber;

                let var_init_locked_1575965276636;

                

                

                function main(data , {digit , keepMode}){

        
/**
 * 
 * 将指定数据转换成数值
 * 
 * @import is.string
 * 
 * @import is.date
 * 
 * @import round from math.round
 * 
 * @import is.number
 * 
 * @param {mixed} data 数据
 * 
 * @param {object} [config = {}] 配置
 * 
 * @param {number} [config.digit = 0] 保留的小数点位数
 * 
 * @param {string} [config.keepMode = 'round'] 保留小数法
 * 
 * @return {number} 转换后的数值 
 * 
 */

 if(isString(data)){

    data = Number(data) ;
 }

 if(isDate(data)){

    data = data.getTime() ;
 }

 if(isNumber(data)){

    switch(keepMode){

        case 'round':

            data = round(data , digit) ;
    }

    return data ;

 }

 const {
    NEGATIVE_INFINITY,
    POSITIVE_INFINITY
 } = Number ;

 if(data === NEGATIVE_INFINITY || data === POSITIVE_INFINITY){

    return data ;
 }

 return NaN ;

 

 

    }

                return function(data , {digit = 0 , keepMode = 'round'} = {}){

                    
        if(!var_init_locked_1575965276636){

            isString = include('is.string');
isDate = include('is.date');
round = include('math.round');
isNumber = include('is.number');

            var_init_locked_1575965276636 = true ;
        }
        

                    

                    return main.call(this , data , {digit , keepMode}) ;
                } ;

            })();

innerExports['src::array.clear'] = (() =>{

                

                

                

                

                function main(data){

        
/**
 * 
 * 清除数组
 * 
 * @param {array} data 数组
 * 
 * 
 */

data.splice(0 , data.length) ;

    }

                return function(data){

                    

                    

                    return main.call(this , data) ;
                } ;

            })();

innerExports['src::function.get'] = (() =>{

                let isString,isFunction,empty;

                let var_init_locked_1575965276640;

                

                

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

                    
        if(!var_init_locked_1575965276640){

            isString = include('is.string');
isFunction = include('is.function');
empty = include('function.empty');

            var_init_locked_1575965276640 = true ;
        }
        

                    

                    return main.call(this , fn , scope) ;
                } ;

            })();

innerExports['src::function.defer'] = (() =>{

                let get;

                let var_init_locked_1575965276641;

                

                

                function main(fn , {scope , defer}){

        
/**
 * 
 * 延时执行函数
 * 
 * @import get from function.get
 * 
 * @param {mixed} fn 函数
 * 
 * @param {object} [config = {}] 函数配置
 * 
 * @param {mixed} [config.scope] 函数作用域
 * 
 * @param {mixed} [config.defer = 0] 延时时间
 * 
 */

 setTimeout(() => get(fn , scope)() , defer) ;

    }

                return function(fn , {scope , defer = 0} = {}){

                    
        if(!var_init_locked_1575965276641){

            get = include('function.get');

            var_init_locked_1575965276641 = true ;
        }
        

                    

                    return main.call(this , fn , {scope , defer}) ;
                } ;

            })();

innerExports['src::data.pusher'] = (() =>{

                let isDefined,clear,defer;

                let var_init_locked_1575965276643;

                let var_class_1575965276643;

                

                return function(onOpen , onClose){

                    
        if(!var_init_locked_1575965276643){

            isDefined = include('is.defined');
clear = include('array.clear');
defer = include('function.defer');

            var_init_locked_1575965276643 = true ;
        }
        

                    
        if(!var_class_1575965276643){

            
/**
 * 
 * 数据推送器
 * 
 * @import is.defined
 * 
 * @import clear from array.clear
 * 
 * @import defer from function.defer
 * 
 * @param {function} onOpen 当开始推送时回调函数
 * 
 * @param {function} onClose 当开始推送时回调函数
 * 
 */

 class main{

    constructor(onOpen , onClose){

        let me = this ;

        me.onOpen = onOpen ;

        me.onClose = onClose ;

        me.callbacks = [] ;

        defer(open , {
            scope:me
        }) ;
    }

    close(){

        let {
            callbacks,
            onClose
        } = this ;

        clear(callbacks) ;

        onClose() ;
    }

    push(callback){

        let me = this,
            {
                callbacks
            } = me;

        callbacks.push(callback) ;

        return me ;
    }
 }

 function open(){

    let me = this,
    {
        callbacks,
        onOpen
    } = me;

    onOpen(data => {

        for(let callback of callbacks){

            let result = callback(data) ;

            if(isDefined(result)){

                data = result ;
            }
        }

    }) ;
 }

            var_class_1575965276643 = class extends main{

                static get __ZBEE_IS_CLASS__(){

                    return true ;
                }


                get __ZBEE_CLASS__(){

                    return var_class_1575965276643 ;
                }

                get __ZBEE_CLASS_NAME__(){

                    return 'src::data.pusher' ;
                }

            } ;
        }
        

                    return new var_class_1575965276643(onOpen , onClose);
                } ;

            })();





