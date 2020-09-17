
/**
 * 
 * 加载脑图序列化数据
 * 
 * @import create from ..node.create scoped
 * 
 * @import initSortNodes from ..load.sort scoped
 * 
 * @import initVisibilityNodes from ..load.visibility scoped
 * 
 * @import initNodes from ..load.nodes scoped
 * 
 * @import tryLayout from ..layout.try scoped
 * 
 * @param {object} data 脑图序列化数据 
 * 
 */

 let {
    root
 } = data ;

 let rootNode = this.rootNode = create(root) ;

 rootNode.selected = true ;

initSortNodes() ;

initNodes() ;

initVisibilityNodes() ;

await tryLayout() ;