
/**
 * 
 * 加载脑图专有数据
 * 
 * @import initSortNodes from .sort scoped
 * 
 * @import initVisibilityNodes from .visibility scoped
 * 
 * @import initNodes from .nodes scoped
 * 
 * @import tryLayout from ..layout.try scoped
 * 
 * @param {array} data 脑图数据
 * 
 */

if(data.length === 1){

    let rootNode = this.rootNode = data[0] ;

    rootNode.selected = true ;

    initSortNodes() ;

    initNodes() ;

    initVisibilityNodes() ;

    await tryLayout() ;
 }