/**
 * 
 * 将插槽转换成可用的组件数组
 * 
 * @import from from array.from
 * 
 * @param {VueComponent} vue VUE 组件对象
 * 
 * @return {array} 转换成的 Vue 组件数组
 * 
 */

let children = from(vue.$slots.default),
    result = [];

for(let node of children){

    if(node.tag){

        result.push(node) ;
    }
}

return result ;