
/**
 * 
 * 加载脑图专有数据
 * 
 * @import initVisibilityNodes from .visibility scoped
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

initVisibilityNodes() ;

await tryLayout() ;

callback('load') ;