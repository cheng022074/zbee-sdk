
/**
 * 
 * 添加节点
 * 
 * @param {mixed} node 节点信息
 * 
 */

let me = this,
{
    store,
    expanded
} = me,
nodes = store.insert(store.indexOf(me.lastLeafNode || me) + 1 , node) ;

if(!expanded){

    for(let node of nodes){

        node.hide() ;
    }
}
