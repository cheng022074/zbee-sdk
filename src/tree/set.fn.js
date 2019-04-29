/**
 * 
 * 设置节点属性
 * 
 * @import assign from object.assign
 * 
 * @import get from .node.get scoped
 * 
 * @param {string} id 节点编号
 * 
 * @param {object} [values = {}] 节点值
 * 
 * @return {mixed} 返回说明 
 * 
 */

 let {
     proxy
 } = this,
 node = get(id) ;

if(node){

    console.log('修改内容' , values) ;

    let {
        children,
        ...data
    } = values

    assign(node , data) ;

    proxy.call('update' , node.data , node.index) ;
}
