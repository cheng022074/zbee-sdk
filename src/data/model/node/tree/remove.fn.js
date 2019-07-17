
/**
 * 
 * 删除子节点
 * 
 * @import remove from array.remove
 * 
 * @param {data.model.node.Tree} node 树型节点
 * 
 */

let me = this,
{
    store,
    cache
} = me ;

if(cache.get('children').includes(node)){

    store.remove(node) ;

    remove(children , node) ;

    if(children.length === 0){

        me.set('leaf' , true) ;
    }
}