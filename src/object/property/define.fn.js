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

            if(is_function(method) && method.length === 0){

                return me[innerName] = method.call(me) ;
            }
        }

        return me[innerName] ;
    }
 }) ;