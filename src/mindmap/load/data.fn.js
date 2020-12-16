
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
 * @param {object} rootNode 脑图数据
 * 
 */

let me = this,
{
    callback
} = me ;


me.rootNode = rootNode ;

rootNode.selected = true ;

initSortNodes() ;

initNodes() ;

initVisibilityNodes() ;

await tryLayout() ;

callback('load') ;