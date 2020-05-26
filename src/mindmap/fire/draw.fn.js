
/**
 * 
 * 触发绘制事件
 * 
 * @import region from ..region scoped
 * 
 * @import data from ..data scoped
 * 
 * @import defer from function.defer
 * 
 * @param {mixed} data 参数说明
 * 
 * @return {mixed} 返回说明 
 * 
 */

 let me = this,
 {
   fireDrawEventTimerId
 } = me;

 if(fireDrawEventTimerId){

   clearTimeout(fireDrawEventTimerId) ;
 }

 me.fireDrawEventTimerId = defer(() => {

   let {
      visibilityNodes
   } = me,
   {
       nodes,
       selectedNode,
       lines
   } = data(visibilityNodes.values() , true);
  
   me.fireEvent('draw' , {
      nodes,
      lines,
      selectedNode,
      canvas:region()
   }) ;

 }) ;