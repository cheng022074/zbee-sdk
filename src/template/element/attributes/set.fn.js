
/**
 * 
 * 设置一组属性
 * 
 * @param {object} data 一组属性值
 * 
 */

let me = this,
    names = Object.keys(data);

for(let name of names){

    me.setAttribute(name , data[name]) ;
}