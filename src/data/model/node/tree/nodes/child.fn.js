
/**
 * 
 * 获取真实的子节点集合
 * 
 * @return {array} 子节点集合 
 * 
 */

let {
    store,
    id
} = this ;

return store.findRecords('parentId' , id) ;