/**
 * 
 * 定义一个缓存属性
 * 
 * @import innerDefine from .inner.define
 * 
 * @import innerName from .inner.name
 * 
 * @import is.function
 * 
 * @import doSet from .define.set
 * 
 * @import doGet from .define.get
 * 
 * @param {object} target 目标对象
 * 
 * @param {string} name 属性名称
 * 
 * @param {object} [options = {}] 属性配置
 * 
 * @param {boolean} options.mode 读写模式
 * 
 * @param {string} [options.value] 属性初始始化值
 * 
 * @param {boolean} [options.equals] 判断属性值是否相等
 * 
 * @param {function} [options.set] 设置值
 * 
 * @param {function} [options.get] 获取值
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
            set:doSet(name , set , equals)
        }) ;

        innerDefine(target , name , value) ;

        break ;

    case 'readwrite':

        if(isFunction(set) || isFunction(get)){

            Object.defineProperty(target , name , {
                [name]:{
                    set:doSet(name , set , equals),
                    get:doGet(name , get)
                },
                enumerable:true
            }) ;

        }else{

            Object.defineProperty(target , name , {
                value,
                enumerable:true,
                writable:true
            }) ;
        }

        innerDefine(target , name , value) ;

}