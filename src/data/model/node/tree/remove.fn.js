
/**
 * 
 * 删除子节点

 * @import resetProperty from object.property.reset
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

    resetProperty(me , 'children') ;

    if(children.length === 0){

        me.set('leaf' , true) ;
    }
}