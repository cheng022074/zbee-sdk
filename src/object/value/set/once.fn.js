/**
 * 
 * 如果设置的对象属性值存在，则不调用赋值函数
 * 
 * @param {object} target 对象主体
 * 
 * @param {string} name 属性名称
 * 
 * @param {Function} fn 赋值函数引用
 * 
 * @param {mixed} scope 基于赋值函数的作用域引用
 * 
 * @return {mixed} 对象属性值
 * 
 */

if(!target.hasOwnProperty(name)){

    target[name] = fn.call(scope) ;

}

return target[name] ;