
/**
 * 
 * 设置与获取脑图节点自定义属性
 * 
 * @import is.defined
 * 
 * @import info from ....data.node.info scoped
 * 
 * @param {mixed} [node] 脑图节点
 * 
 * @param {string} name 属性名称
 * 
 * @param {mixed}  [value] 属性值
 * 
 * @param {boolean} [isLayout = true] 是否应用自动布局
 * 
 * @return {mixed} 属性值
 * 
 */

 if(isDefined(value)){

    info(node , {
        [name]:value
    } , isLayout) ; 
 
 }else{

    return info(node , name) ;
 }

 