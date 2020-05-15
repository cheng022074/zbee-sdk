/**
 * 
 * 定义一个缓存属性
 * 
 * @import innerDefine from .inner.define
 * 
 * @import innerName from .inner.name
 * 
 * @param {object} target 目标对象
 * 
 * @param {string} name 属性名称
 * 
 * @param {object} [options = {}] 属性配置
 * 
 * @param {boolean} [options.mode = 'readonly'] 读写模式
 * 
 * @param {string} [options.value] 属性初始始化值
 * 
 */

let innerPropertyName = generate(`__ZBEE_OBJECT_PROPERTY_${name}__`) ;

switch(mode){
    
    case 'readonly':

        Object.defineProperty(record , name , {
            value,
            enumerable:true
        }) ;

        break ;

    case 'writeonly':

        Object.defineProperty(record , name , {
            set(value){

                this[innerName(name)] = value ;
            }
        }) ;

        innerDefine(record , name , value) ;

        break ;

    case 'readwrite':

        Object.defineProperty(record , name , {
            [name]:{
                set(value){

                    this[innerName(name)] = value ;
                },

                get(){

                    return this[innerName(name)] ;
                }
            }
        }) ;

        innerDefine(record , name , value) ;

}