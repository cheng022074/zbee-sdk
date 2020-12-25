
/**
 * 
 * 获取可显示纵纵标
 * 
 * @import getRegion from ..region scoped
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @return {Number} 增加偏移值的纵坐标  
 * 
 */

let me = this,
{
   padding,
   height
} = me,
{
   height:regionHeight
} = getRegion(),
heightPadding = 0;

if(height !== regionHeight){

   heightPadding = padding ;
}

return node.y + heightPadding ;