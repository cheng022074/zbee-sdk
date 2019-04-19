
/**
 * 
 * 添加子节点
 * 
 * @import get from .node.get scoped
 * 
 * @param {string} id 节点编号
 * 
 * @param {object} config 节点配置
 * 
 */

let {
    proxy
} = this,
node = get(id) ;

if(node){

    node.append(config) ;

    proxy.callIf('insert' , node.data , node.index) ;

    return true ;
}

return false ;

