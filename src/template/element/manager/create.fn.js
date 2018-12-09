
/**
 * 
 * 创建模板元素
 * 
 * @import createEl from template.element
 * 
 * @param {string} tag 元素名称
 * 
 * @param {object} attributes 元素属性
 * 
 * @param {array} children 子元素集合
 * 
 * @return {html.element} 模板元素对象 
 * 
 */

let {
    $cache
} = this,
el;

if($cache.length){

    el = $cache.pop() ;
 
}else{

    el = createEl() ;
}

 let el = getEl() ;

 el.tag = tag ;

 el.attributes = attributes ;

 el.children = children ;

 return el ;


