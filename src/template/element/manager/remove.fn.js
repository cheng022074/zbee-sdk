
/**
 * 
 * 移除模板元素
 * 
 * @param {template.element} el 元素
 * 
 */

let {
    $cache
} = this;

el.destroy() ;

$cache.push(el) ;



