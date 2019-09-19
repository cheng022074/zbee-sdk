
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
        hidden,
        parentNode
    } = me;

if(!selected){

    if(!hidden){

        let {
            selectedNode
        } = store ;
    
        if(selectedNode){
    
            selectedNode.deselect() ;
        }
    
        me.set('selected' , true) ;
    
        store.selectedNode = me ;
    
        me.fireEvent('select') ;
    
    }else if(parentNode){

        parentNode.select() ;
    }
}