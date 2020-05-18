
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
 * @import is from is.data.item
 * 
 * @param {string} name 属性名称
 * 
 * @param {function} onSet 设置属性值
 * 
 * @param {function} [isEquals] 属性值判断是否相等，只在启动改变属性事件有效
 * 
 */
 
 isEquals = isEquals || equals ;

 return function(value){

    let me = this,
        oldValue = get(me , name) ;

    if(isFunction(onSet)){

        value = onSet.call(me , value) ;
    }

    if(!isEquals.call(me , value , oldValue)){

        if(is(oldValue)){

            get(oldValue , 'observable').independent() ;
        }

        set(me , name , value) ;

        if(is(me)){

            get(me , 'observable').fireEvent('propertychange' , me , name , value , oldValue) ;
        }
    }
} ;