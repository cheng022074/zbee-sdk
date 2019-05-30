
/**
 * 
 * 取消选定
 * 
 * 
 */

let me = this,
    {
        selected,
        hidden,
        store
    } = me;

if(selected && !hidden){

    me.set('selected' , false) ;

    me.fireEvent('deselect') ;
}