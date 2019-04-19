
/**
 * 
 * 删除子节点
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

    proxy.callIf('remove' , node.index) ;

    node.destroy() ;

    return true ;
}

return false ;
