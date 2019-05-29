
/**
 * 
 * 取消选定
 * 
 * 
 */

let me = this,
    {
        selected,
        store
    } = me;

if(selected){

    me.set('selected' , false) ;

    me.fireEvent('deselect') ;
}