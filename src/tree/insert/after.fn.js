
/**
 * 
 * 在指定节点下方添加节点
 * 
 * @param {string} id 节点编号
 * 
 * @param {object} config 节点配置
 * 
 * 
 */

let {
    proxy
} = this,
node = get(id) ;

if(node && !node.isRoot){

    let {
        parentNode
    } = node,
    newNode = parentNode.insertAfter(config , node) ;

    if(newNode){

        proxy.callIf('insert' , newNode.data , newNode.index) ;

        return true ;
    }
}

return false ;