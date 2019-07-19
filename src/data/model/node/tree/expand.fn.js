
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

        me.synchronize(await store.synchronize(me)) ;
    }

    me.set('expanded' , true) ;

    let {
        children
    } = me ;

    for(let childNode of children){

        childNode.show() ;
    }

    me.fireEvent('expand' , synchronized) ;
}