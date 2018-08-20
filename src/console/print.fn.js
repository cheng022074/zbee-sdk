/**
 * 
 * 重写原生日志输出方法
 * 
 * @import isObject from is.object.simple
 * 
 * @import is.string
 * 
 * @param {string} type 打印日志类型
 * 
 * @param {function} processFn 不同的打印日志的方法集合
 * 
 * @param {array} rules 输出日志规则
 * 
 */

return (...values) =>{

    for(let rule of rules){
        
        let 
        index,
        value ;

        if(isObject(rule)){

            index = rule.index || 0,
            value = rule.value;

        }else if(isString(rule)){

            index = 0,
            value = rule ;
        
        }else if(rule === true){

            processFn(...values) ;

            break ;
        }
    
        if(values[index] === value){
    
            processFn(...values) ;

            break ;
        }
    }

} ;