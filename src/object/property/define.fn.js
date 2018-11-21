/**
 * 
 * 定义一个缓存属性
 * 
 * @import capitalize from string.capitalize
 * 
 * @import getPrefix from object.property.prefix
 * 
 * @param {object} target 目标对象
 * 
 * @param {string} name 属性名称
 * 
 */

 let prefix = getPrefix() ;

 Object.defineProperty(target , name , {
    configurable:true,
    enumerable:true,
    set(value){

        let me = this,
            methodName = `set${capitalize(name)}`;
    
        if(methodName in me){

            me[`${prefix}${name}`] = me[methodName](value) ;
        }
    },
    get(){
    
        let me = this,
            innerName = `${prefix}${name}`,
            method = me[`apply${capitalize(name)}`];

        if(!me.hasOwnProperty(innerName) && method){

            if(is_function(method) && method.length === 0){

                return me[innerName] = method.call(me) ;
            }
        }

        return me[innerName] ;
    }
 }) ;