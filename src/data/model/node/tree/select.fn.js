
/**
 * 
 * 选定
 * 
 * 
 */

let me = this,
    {
        selected,
        store,
        hidden
    } = me;

if(!selected && !hidden){

    let {
        selectedNode
    } = store ;

    if(selectedNode){

        selectedNode.deselect() ;
    }

    me.set('selected' , true) ;

    store.selectedNode = me ;

    me.fireEvent('select') ;
}