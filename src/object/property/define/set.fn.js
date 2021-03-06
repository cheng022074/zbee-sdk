
/**
 * 
 * 设置属性
 * 
 * @import is.function
 * 
 * @import equals from data.equals
 * 
 * @import get from ..inner.get
 * 
 * @import set from ..inner.set
 * 
 * @import has from ..inner.has
 * 
 * @param {string} name 属性名称
 * 
 * @param {function} [onSet] 设置属性值
 * 
 * @param {function} [onAfterSet] 设置属性值之后调用
 * 
 * @param {function} [isEquals] 属性值判断是否相等，只在启动改变属性事件有效
 * 
 */
 
 isEquals = isEquals || equals ;

 return function(value){

    let me = this,
        oldValue = get(me , name) ;

    if(!isEquals.call(me , value , oldValue)){

        if(isFunction(onSet)){

            value = onSet.call(me , value , oldValue) ;
        }

        set(me , name , value) ;

        if(isFunction(onAfterSet)){

            value = onAfterSet.call(me , value) ;
        }
    }
} ;