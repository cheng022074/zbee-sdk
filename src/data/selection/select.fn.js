
/**
 * 
 * 选定项目
 * 
 * @param {mixed} item 选定的项目
 * 
 * @return {boolean} 如果选定成功则返回 true , 否则返回 false
 * 
 */

 let me = this,
 {
    selectedItems,
    selectItemField,
    selectionMode
 } = me ;

 if(!selectedItem.includes(item)){

    if(selectionMode === 'single' && me.count !== 0){

        me.deselect(selectedItem[0]) ;
    }

    item[selectItemField] = true ;

    selectedItems.push(item) ;

    return true ;
 }

 return false ;