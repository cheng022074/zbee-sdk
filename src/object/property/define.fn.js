/**
 * 
 * 定义一个缓存属性
 * 
 * @import innerDefine from .inner.define
 * 
 * @import innerName from .inner.name
 * 
 * @import set from .define.set
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
 * @param {boolean} [options.equals] 判断属性值是否相等
 * 
 * @param {boolean} [options.isEnablePropertyChangeEvent = true] 是否抛出属性改变事件，如果属性改变的话
 * 
 */

switch(mode){
    
    case 'readonly':

        Object.defineProperty(target , name , {
            value,
            enumerable:true
        }) ;

        break ;

    case 'writeonly':

        Object.defineProperty(target , name , {
            set:set(name , isEnablePropertyChangeEvent , equals)
        }) ;

        innerDefine(target , name , value) ;

        break ;

    case 'readwrite':

        Object.defineProperty(target , name , {
            [name]:{
                set:set(name , isFirePropertyChangeEvent , equals),

                get(){

                    return this[innerName(name)] ;
                }
            }
        }) ;

        innerDefine(target , name , value) ;

}