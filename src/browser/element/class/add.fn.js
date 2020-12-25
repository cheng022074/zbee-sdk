
/**
 * 
 * 添加样式类 
 * 
 * @import is.string
 * 
 * @import is.array
 * 
 * @import add from .add
 * 
 * @param {HTMLElement} el 添加样式类的元素
 * 
 * @param {mixed} cls 样式类
 * 
 */

if(isString(cls)){

    el.classList.add(cls) ;

}else if(isArray(cls)){

    for(let item of cls){

        add(el , item) ;
    }
}