

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

                let var_init_locked_1576231190479;

                

                

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

                    
        if(!var_init_locked_1576231190479){

            isType = include('is.type');

            var_init_locked_1576231190479 = true ;
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

                let var_init_locked_1576231190482;

                

                

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

                    
        if(!var_init_locked_1576231190482){

            isArray = include('is.array');

            var_init_locked_1576231190482 = true ;
        }
        

                    

                    return main.call(this , data , allowEmptyString) ;
                } ;

            })();

innerExports['src::is.string'] = (() =>{

                let isType;

                let var_init_locked_1576231190483;

                

                

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

                    
        if(!var_init_locked_1576231190483){

            isType = include('is.type');

            var_init_locked_1576231190483 = true ;
        }
        

                    

                    return main.call(this , data) ;
                } ;

            })();

innerExports['src::array.from'] = (() =>{

                let isEmpty,isString;

                let var_init_locked_1576231190485;

                

                

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

                    
        if(!var_init_locked_1576231190485){

            isEmpty = include('is.empty');
isString = include('is.string');

            var_init_locked_1576231190485 = true ;
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

                let var_init_locked_1576231190489;

                

                

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

                    
        if(!var_init_locked_1576231190489){

            isType = include('is.type');

            var_init_locked_1576231190489 = true ;
        }
        

                    

                    return main.call(this , data) ;
                } ;

            })();

innerExports['src::data.reader'] = (() =>{

                let isDefined,isArray,isObject,from,isString,empty,isFunction;

                let var_init_locked_1576231190497;

                let var_class_1576231190497;

                

                return function(){

                    
        if(!var_init_locked_1576231190497){

            isDefined = include('is.defined');
isArray = include('is.array');
isObject = include('is.object.simple');
from = include('array.from');
isString = include('is.string');
empty = include('function.empty')();
isFunction = include('is.function');

            var_init_locked_1576231190497 = true ;
        }
        

                    
        if(!var_class_1576231190497){

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

            var_class_1576231190497 = class extends main{

                static get __ZBEE_IS_CLASS__(){

                    return true ;
                }


                get __ZBEE_CLASS__(){

                    return var_class_1576231190497 ;
                }

                get __ZBEE_CLASS_NAME__(){

                    return 'src::data.reader' ;
                }

            } ;
        }
        

                    return var_class_1576231190497;
                } ;

            })();

innerExports['src::string.split'] = (() =>{

                let isEmpty;

                let var_init_locked_1576231190498;

                

                

                
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

                    
        if(!var_init_locked_1576231190498){

            isEmpty = include('is.empty');

            var_init_locked_1576231190498 = true ;
        }
        

                    

                    return main.call(this , target , splitRe) ;
                } ;

            })();

innerExports['src::is.object'] = (() =>{

                let isType;

                let var_init_locked_1576231190498;

                

                

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

                    
        if(!var_init_locked_1576231190498){

            isType = include('is.type');

            var_init_locked_1576231190498 = true ;
        }
        

                    

                    return main.call(this , data) ;
                } ;

            })();

innerExports['src::object.value.get'] = (() =>{

                let split,isObject,isArray;

                let var_init_locked_1576231190508;

                

                

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

                    
        if(!var_init_locked_1576231190508){

            split = include('string.split');
isObject = include('is.object');
isArray = include('is.array');

            var_init_locked_1576231190508 = true ;
        }
        

                    

                    return main.call(this , data , key) ;
                } ;

            })();

innerExports['src::data.reader.json'] = (() =>{

                let Reader,get;

                let var_init_locked_1576231190509;

                let var_class_1576231190509;

                

                return function(model){

                    
        if(!var_init_locked_1576231190509){

            Reader = include('data.reader')();
get = include('object.value.get');

            var_init_locked_1576231190509 = true ;
        }
        

                    
        if(!var_class_1576231190509){

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

            var_class_1576231190509 = class extends main{

                static get __ZBEE_IS_CLASS__(){

                    return true ;
                }


                get __ZBEE_CLASS__(){

                    return var_class_1576231190509 ;
                }

                get __ZBEE_CLASS_NAME__(){

                    return 'src::data.reader.json' ;
                }

            } ;
        }
        

                    return new var_class_1576231190509(model);
                } ;

            })();

innerExports['src::is.boolean'] = (() =>{

                let isType;

                let var_init_locked_1576231190509;

                

                

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

                    
        if(!var_init_locked_1576231190509){

            isType = include('is.type');

            var_init_locked_1576231190509 = true ;
        }
        

                    

                    return main.call(this , data) ;
                } ;

            })();

innerExports['src::is.number'] = (() =>{

                let isType;

                let var_init_locked_1576231190510;

                

                

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

                    
        if(!var_init_locked_1576231190510){

            isType = include('is.type');

            var_init_locked_1576231190510 = true ;
        }
        

                    

                    return main.call(this , data) ;
                } ;

            })();

innerExports['src::data.convert.boolean'] = (() =>{

                let isBoolean,isString,isNumber;

                let var_init_locked_1576231190512;

                

                

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

                    
        if(!var_init_locked_1576231190512){

            isBoolean = include('is.boolean');
isString = include('is.string');
isNumber = include('is.number');

            var_init_locked_1576231190512 = true ;
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

                let var_init_locked_1576231190513;

                

                

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

                    
        if(!var_init_locked_1576231190513){

            doFormat = include('string.format');

            var_init_locked_1576231190513 = true ;
        }
        

                    

                    return main.call(this , data , format) ;
                } ;

            })();

innerExports['src::data.convert.date'] = (() =>{

                let isNumber,isString,parse;

                let var_init_locked_1576231190515;

                

                

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

                    
        if(!var_init_locked_1576231190515){

            isNumber = include('is.number');
isString = include('is.string');
parse = include('date.parse');

            var_init_locked_1576231190515 = true ;
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

                let var_init_locked_1576231190522;

                

                

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

                    
        if(!var_init_locked_1576231190522){

            isString = include('is.string');
isDate = include('is.date');
round = include('math.round');
isNumber = include('is.number');

            var_init_locked_1576231190522 = true ;
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

                let var_init_locked_1576231190525;

                

                

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

                    
        if(!var_init_locked_1576231190525){

            isString = include('is.string');
isFunction = include('is.function');
empty = include('function.empty');

            var_init_locked_1576231190525 = true ;
        }
        

                    

                    return main.call(this , fn , scope) ;
                } ;

            })();

innerExports['src::function.defer'] = (() =>{

                let get;

                let var_init_locked_1576231190526;

                

                

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

                    
        if(!var_init_locked_1576231190526){

            get = include('function.get');

            var_init_locked_1576231190526 = true ;
        }
        

                    

                    return main.call(this , fn , {scope , defer}) ;
                } ;

            })();

innerExports['src::data.pusher'] = (() =>{

                let isDefined,clear,defer;

                let var_init_locked_1576231190528;

                let var_class_1576231190528;

                

                return function(onOpen , onClose){

                    
        if(!var_init_locked_1576231190528){

            isDefined = include('is.defined');
clear = include('array.clear');
defer = include('function.defer');

            var_init_locked_1576231190528 = true ;
        }
        

                    
        if(!var_class_1576231190528){

            
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

            var_class_1576231190528 = class extends main{

                static get __ZBEE_IS_CLASS__(){

                    return true ;
                }


                get __ZBEE_CLASS__(){

                    return var_class_1576231190528 ;
                }

                get __ZBEE_CLASS_NAME__(){

                    return 'src::data.pusher' ;
                }

            } ;
        }
        

                    return new var_class_1576231190528(onOpen , onClose);
                } ;

            })();

innerExports['src::class.empty'] = (() =>{

                

                

                

                let var_once_value_1576231190529;

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

                    

                    

                    
        if(var_once_value_1576231190529){

            return var_once_value_1576231190529 ;

        }
        return var_once_value_1576231190529 = main.call(this ) ;
        
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

innerExports['src::data.type'] = (() =>{

                let isObject,isArray,isString,isNumber,isBoolean,isDate;

                let var_init_locked_1576231190532;

                

                

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

 return 'other' ;

    }

                return function(data){

                    
        if(!var_init_locked_1576231190532){

            isObject = include('is.object.simple');
isArray = include('is.array');
isString = include('is.string');
isNumber = include('is.number');
isBoolean = include('is.boolean');
isDate = include('is.date');
isString = include('is.string');

            var_init_locked_1576231190532 = true ;
        }
        

                    

                    return main.call(this , data) ;
                } ;

            })();

innerExports['src::data.equals'] = (() =>{

                let getType;

                let var_init_locked_1576231190535;

                

                

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

                    
        if(!var_init_locked_1576231190535){

            getType = include('data.type');

            var_init_locked_1576231190535 = true ;
        }
        

                    

                    return main.call(this , value1 , value2) ;
                } ;

            })();

innerExports['src::map.find'] = (() =>{

                let equals;

                let var_init_locked_1576231190537;

                

                

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

                    
        if(!var_init_locked_1576231190537){

            equals = include('data.equals');

            var_init_locked_1576231190537 = true ;
        }
        

                    

                    return main.call(this , keys) ;
                } ;

            })();

innerExports['src::map.set'] = (() =>{

                let find;

                let var_init_locked_1576231190540;

                let var_current_scope_1576231190540;

                

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

                    

                    
        if(!var_current_scope_1576231190540 !== this){

            find = include('src::map.find').bind(this);

            var_current_scope_1576231190540 = this ;
        }
        

                    return main.call(this , ...values) ;
                } ;

            })();

innerExports['src::map.get'] = (() =>{

                let find;

                let var_init_locked_1576231190541;

                let var_current_scope_1576231190541;

                

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

                    

                    
        if(!var_current_scope_1576231190541 !== this){

            find = include('src::map.find').bind(this);

            var_current_scope_1576231190541 = this ;
        }
        

                    return main.call(this , ...keys) ;
                } ;

            })();

innerExports['src::map.has'] = (() =>{

                let find;

                let var_init_locked_1576231190542;

                let var_current_scope_1576231190542;

                

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

                    

                    
        if(!var_current_scope_1576231190542 !== this){

            find = include('src::map.find').bind(this);

            var_current_scope_1576231190542 = this ;
        }
        

                    return main.call(this , ...keys) ;
                } ;

            })();

innerExports['src::map.delete'] = (() =>{

                let find;

                let var_init_locked_1576231190545;

                let var_current_scope_1576231190545;

                

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

                    

                    
        if(!var_current_scope_1576231190545 !== this){

            find = include('src::map.find').bind(this);

            var_current_scope_1576231190545 = this ;
        }
        

                    return main.call(this , ...keys) ;
                } ;

            })();

innerExports['src::map.forEach'] = (() =>{

                

                

                

                

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

                let var_init_locked_1576231190551;

                

                

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

                    
        if(!var_init_locked_1576231190551){

            isDefined = include('is.defined');

            var_init_locked_1576231190551 = true ;
        }
        

                    

                    return main.call(this , ...keys) ;
                } ;

            })();

innerExports['src::map'] = (() =>{

                let extend,constructor,get_size,method_set,method_get,method_has,method_delete,method_forEach,method_clear,method_find,isObject;

                let var_init_locked_1576231190555;

                let var_class_1576231190555;

                

                return function(){

                    
        if(!var_init_locked_1576231190555){

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

            var_init_locked_1576231190555 = true ;
        }
        

                    
        if(!var_class_1576231190555){

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

            var_class_1576231190555 = class extends main{

                static get __ZBEE_IS_CLASS__(){

                    return true ;
                }


                get __ZBEE_CLASS__(){

                    return var_class_1576231190555 ;
                }

                get __ZBEE_CLASS_NAME__(){

                    return 'src::map' ;
                }

            } ;
        }
        

                    return new var_class_1576231190555();
                } ;

            })();

innerExports['src::event.listeners'] = (() =>{

                let map;

                let var_init_locked_1576231190555;

                

                let var_once_value_1576231190555;

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

                    
        if(!var_init_locked_1576231190555){

            map = include('map')();

            var_init_locked_1576231190555 = true ;
        }
        

                    

                    
        if(var_once_value_1576231190555){

            return var_once_value_1576231190555 ;

        }
        return var_once_value_1576231190555 = main.call(this ) ;
        
                } ;

            })();

innerExports['src::event.listener.native.remove'] = (() =>{

                

                

                

                

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

innerExports['src::event.listener.remove'] = (() =>{

                let isString,isObject,remove,listeners,native;

                let var_init_locked_1576231190560;

                

                

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

                    
        if(!var_init_locked_1576231190560){

            isString = include('is.string');
isObject = include('is.object.simple');
remove = include('src::event.listener.remove');
listeners = include('src::event.listeners')();
native = include('src::event.listener.native.remove');

            var_init_locked_1576231190560 = true ;
        }
        

                    

                    return main.call(this , target , name , fn , {scope}) ;
                } ;

            })();

innerExports['src::event.listener.native.add'] = (() =>{

                

                

                

                

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

innerExports['src::event.listener.add'] = (() =>{

                let isString,isObject,add,remove,get,listeners,native,isArray;

                let var_init_locked_1576231190564;

                

                

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

                remove(target , name , fn , {
                    scope
                }) ;
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

                    
        if(!var_init_locked_1576231190564){

            isString = include('is.string');
isObject = include('is.object.simple');
add = include('src::event.listener.add');
remove = include('src::event.listener.remove');
get = include('function.get');
listeners = include('src::event.listeners')();
native = include('src::event.listener.native.add');
isArray = include('is.array');

            var_init_locked_1576231190564 = true ;
        }
        

                    

                    return main.call(this , target , name , fn , {once , scope}) ;
                } ;

            })();

innerExports['src::mixin.observable.constructor'] = (() =>{

                let add,isObject,isArray;

                let var_init_locked_1576231190565;

                

                

                
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

                    
        if(!var_init_locked_1576231190565){

            add = include('event.listener.add');
isObject = include('is.object.simple');
isArray = include('is.array');

            var_init_locked_1576231190565 = true ;
        }
        

                    

                    return main.call(this , options) ;
                } ;

            })();

innerExports['src::mixin.observable.listener.add'] = (() =>{

                

                

                

                

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

innerExports['src::mixin.observable.listener.remove'] = (() =>{

                

                

                

                

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

innerExports['src::mixin.observable.event.fire'] = (() =>{

                let isArray;

                let var_init_locked_1576231190568;

                

                

                
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
        $bubbleTarget,
        emitter
    } = me ;

    emitter.emit(event , target ,  ...args) ;

    if($bubbleTarget){

        doFireBubbleEvent.call($bubbleTarget , event , target , ...args) ;
    }
 }

                return function(event , ...args){

                    
        if(!var_init_locked_1576231190568){

            isArray = include('is.array');

            var_init_locked_1576231190568 = true ;
        }
        

                    

                    return main.call(this , event , ...args) ;
                } ;

            })();

innerExports['src::mixin.observable.events.suspend'] = (() =>{

                

                

                

                

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

innerExports['src::mixin.observable.events.resume'] = (() =>{

                

                

                

                

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

innerExports['src::mixin.observable'] = (() =>{

                let constructor,method_addListener,method_removeListener,method_fireEvent,method_suspendEvents,method_resumeEvents,isObject;

                let var_init_locked_1576231190571;

                

                

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

                    
        if(!var_init_locked_1576231190571){

            constructor = include('src::mixin.observable.constructor');
method_addListener = include('src::mixin.observable.listener.add');
method_removeListener = include('src::mixin.observable.listener.remove');
method_fireEvent = include('src::mixin.observable.event.fire');
method_suspendEvents = include('src::mixin.observable.events.suspend');
method_resumeEvents = include('src::mixin.observable.events.resume');
isObject = include('is.object.simple');

            var_init_locked_1576231190571 = true ;
        }
        

                    

                    return main.call(this , extend) ;
                } ;

            })();

innerExports['src::object.clear'] = (() =>{

                

                

                

                

                function main(data){

        
/**
 * 
 * 清除指定对象的所有键
 * 
 * @param {object} data 对象数据
 * 
 */

let keys = Object.keys(data) ;

for(let key of keys){

    delete data[key] ;
}


    }

                return function(data){

                    

                    

                    return main.call(this , data) ;
                } ;

            })();

innerExports['src::data.store'] = (() =>{

                let Observable,aclear,oclear,from,isObject,isFunction,empty;

                let var_init_locked_1576231190575;

                let var_class_1576231190575;

                

                return function(config){

                    
        if(!var_init_locked_1576231190575){

            Observable = include('mixin.observable');
aclear = include('array.clear');
oclear = include('object.clear');
from = include('array.from');
isObject = include('is.object.simple');
isFunction = include('is.function');
empty = include('function.empty')();

            var_init_locked_1576231190575 = true ;
        }
        

                    
        if(!var_class_1576231190575){

            /**
 * 
 * 数据存储器类
 * 
 * @import Observable from mixin.observable
 * 
 * @import aclear from array.clear
 * 
 * @import oclear from object.clear
 * 
 * @import from from array.from
 * 
 * @import isObject from is.object.simple
 * 
 * @import is.function
 * 
 * @import empty from function.empty value
 * 
 * @param {object} config 配置
 * 
 */

function defaultRecordId({
    id
}){

    return id ;
}

function defaultRecordMerge(record){

    return record ;
}

function defaultRecordValid(){

    return true ;
}

class main extends mixins({
    mixins:[
        Observable
    ]
}){

    constructor({
        id = defaultRecordId,
        merge = defaultRecordMerge,
        valid = defaultRecordValid,
        reader,
        properties = {},
        ...options
    } = {}){

        super(options) ;

        let me = this ;

        me.doRecordMerge = merge ;

        me.doRecordId = id ;

        me.doRecordValid = valid ;

        me.doSort = id ;

        me.data = [] ;

        me.ids = {} ;

        me.reader = include('data.reader.json')(reader) ;

        let names = Object.keys(properties),
            orginProperties = {},
            store = this;

        for(let name of names){

            let property = properties[name] ;

            if(isFunction(property)){

                orginProperties[name] = {
                    enumerable:true,
                    get(){

                        return property(this , store) ;
                    }
                } ;

            }else if(isObject(property)){

                let {
                    set = empty,
                    get = empty
                } = property ;

                orginProperties[name] = {
                    enumerable:true,
                    get(){

                        return get(this , store) ;
                    },

                    set(value){

                        set(value , this , store) ;
                    }
                } ;
            }
        }

        me.properties = orginProperties ;
    }

    getPreviousRecord(record){

        let {
            ids,
            data,
            doRecordId
        } = this,
        index = ids[doRecordId(record)] || -1;

        if(index > 0){

            return data[index - 1] ;
        }
    }

    append(data){

        let me = this,
        {
            data:records,
            ids,
            doRecordId,
            doRecordMerge,
            doRecordValid,
            reader,
            properties
        } = me ;

        data = reader.read(data) ;

        let result = [] ;

        for(let record of data){

            let id = doRecordId(record) ;

            if(ids.hasOwnProperty(id)){

                let index = ids[id] ;

                result.push(records[index] = doRecordMerge(records[index] , record)) ;

            }else if(doRecordValid(record)){

                if(properties){

                    Object.defineProperties(record , properties) ;
                }

                records.push(record) ;

                result.push(record) ;
                
                ids[id] = records.length - 1 ;
                
            }
        }

        me.fireEvent('append' , result , records) ;
    }

    load(data){

        let me = this ;

        me.clear() ;

        me.suspendEvents() ;

        me.append(data) ;

        me.resumeEvents() ;

        me.fireEvent('load' , data) ;
    }

    clear(){

        let {
            data,
            ids
        } = this ;

        aclear(data) ;

        oclear(ids) ;

        me.fireEvent('clear') ;
    }
}

            var_class_1576231190575 = class extends main{

                static get __ZBEE_IS_CLASS__(){

                    return true ;
                }


                get __ZBEE_CLASS__(){

                    return var_class_1576231190575 ;
                }

                get __ZBEE_CLASS_NAME__(){

                    return 'src::data.store' ;
                }

            } ;
        }
        

                    return new var_class_1576231190575(config);
                } ;

            })();





