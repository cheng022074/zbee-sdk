
/**
 * 
 * 设置一组属性
 * 
 * @import setAttriubte from template.element.setAttribute scoped
 * 
 * @param {object} data 一组属性值
 * 
 */

let me = this,
    names = Object.keys(data);

for(let name of names){

    setAttribute(name , data[name]) ;
}