
/**
 * 
 * 展开节点 
 * 
 */

let me = this,
{
    expanded
} = me ;

if(!expanded){

    let {
        store,
        synchronized
    } = this ;

    if(!synchronized){

        me.sync(await store.syncChildNodes(node)) ;
    }

    me.set('expanded' , true) ;

    let {
        childNodes
    } = me ;

    for(let childNode of childNodes){

        childNode.show() ;
    }

    me.fireEvent('expand') ;
}