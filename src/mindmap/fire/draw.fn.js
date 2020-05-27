
/**
 * 
 * 触发绘制事件
 * 
 * @import region from ..region scoped
 * 
 * @import data from ..data scoped
 * 
 * @param {mixed} data 参数说明
 * 
 * @return {mixed} 返回说明 
 * 
 */

 let me = this,
 {
    visibilityNodes
 } = me,
 {
     nodes,
     selectedNode,
     lines
 } = data(visibilityNodes.values() , true),
 params = {
   nodes,
   lines,
   selectedNode,
   canvas:region()
};

 me.fireEvent('draw' , params) ;