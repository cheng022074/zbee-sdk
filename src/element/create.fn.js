
/**
 * 
 * 创建 HTML 片段
 * 
 * @import create from html.element.create
 * 
 * @import isObject from is.object.simple
 * 
 * @param {mixed} config 元素配置
 * 
 * @param {HTMLDocument} [doc] HTML 文档对象
 * 
 * @return {HTMLFragment} HTML 片段对象引用 
 * 
 */

if(!isObject(config)){

    return config ;
}

if(!doc && typeof document !== undefined){

    doc = document ;
}

let {
    tag,
    attrs,
    cn
} = config ;

attrs = attrs || {} ;

cn = cn || [] ;

let el = document.createElement(tag),
    names = Object.keys(attrs) ;

for(let name of names){

    el.setAttribute(name , attrs[name]) ;
    
}

for(let elConfig of cn){

    el.appendChild(create(elConfig , doc)) ;
}

return el;




