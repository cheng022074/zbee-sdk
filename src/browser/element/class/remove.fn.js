
/**
 * 
 * 移除样式类 
 * 
 * @import is.string
 * 
 * @import is.array
 * 
 * @import remove from .remove
 * 
 * @param {HTMLElement} el 移除样式类的元素
 * 
 * @param {mixed} cls 样式类
 * 
 */

if(isString(cls)){

    el.classList.remove(cls) ;

}else if(isArray(cls)){

    for(let item of cls){

        remove(el , item) ;
    }
}