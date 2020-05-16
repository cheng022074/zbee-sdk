
/**
 * 
 * 设置属性
 * 
 * @import innerName from ..inner.name
 * 
 * @import is.function
 * 
 * @import equals from data.equals
 * 
 * @param {string} name 属性名称
 * 
 * @param {boolean} isEnablePropertyChangeEvent 是否启动改变属性事件
 * 
 * @param {function} [isEquals] 属性值判断是否相等，只在启动改变属性事件有效
 * 
 */

 if(isEnablePropertyChangeEvent){

    isEquals = isEquals || equals ;

    return value => {

        let me = this,
            target = innerName('EVENT_TARGET');

        if(target && isFunction(target.fireEvent)){

            let oldValue = me[innerName(name)] ;

            if(!isEquals(value , oldValue)){

                target.fireEvent('propertychange' , name , value , oldValue) ;
            }

        }
    } ;
 }

 return value => this[innerName(name)] = value ;