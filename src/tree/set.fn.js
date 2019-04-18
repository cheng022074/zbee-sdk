
/**
 * 
 * 设置节点属性
 * 
 * @import assign from object.assign
 * 
 * @param {string} id 节点编号
 * 
 * @param {object} [values = {}] 节点值
 * 
 * @return {mixed} 返回说明 
 * 
 */

 let {
     nodes,
     proxy
 } = this,
 count = -1;

 for(let node of nodes){

    count ++ ;

    if(node.id === id){

        assign(node , values) ;

        proxy.call('update' , count , node.data) ;

        break ;
    }
 }

