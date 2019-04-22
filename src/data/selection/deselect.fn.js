
/**
 * 
 * 取消选定
 * 
 * @import remove from array.remove
 * 
 * @param {mixed} item 取消选定的项目
 * 
 */

 let {
    selectedItems,
    selectItemField
 } = this ;

 if(selectedItems.includes(item)){

    item[selectItemField] = false ;

    remove(selectedItems , item) ;

    return true ;
 }

 return false ;