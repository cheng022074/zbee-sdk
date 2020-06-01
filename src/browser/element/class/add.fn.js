
/**
 * 
 * 添加样式类 
 * 
 * @import is.string
 * 
 * @import is.array
 * 
 * @param {HTMLElement} el 添加样式类的元素
 * 
 * @param {mixed} cls 样式类
 * 
 */

 function main(el , cls){

    if(isString(cls)){

        el.classList.add(cls) ;
    
    }else if(isArray(cls)){

        for(let item of cls){

            main(el , item) ;
        }
    }
 }