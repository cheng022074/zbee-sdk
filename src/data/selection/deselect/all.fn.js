
/**
 * 
 * 清除所有选定
 * 
 */

 let me = this,
 {
    $selectedItems:selectedItems
 } = me ;

 for(let selectedItem of selectedItems){

    me.deselect(selectedItem) ;
 }