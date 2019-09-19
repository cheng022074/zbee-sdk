
/**
 * 
 * 删除子节点
 * 
 * @param {data.model.node.Tree} node 树型节点
 * 
 */

let me = this,
{
    store,
    children
} = me ;

if(children.includes(node)){

    store.remove(node) ;

    me.resetProperties([
        'children',
        'leafNode'
    ]) ;

    if(children.length === 0){

        me.set('leaf' , true) ;
    }
}