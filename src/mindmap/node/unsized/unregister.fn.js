
/**
 * 
 * 注销尺寸已设置的脑图节点
 * 
 * @param {data.Record} node 脑图节点
 * 
 */

let me = this,
{
   unsizedNodes
} = me,
{
   id
} = node;

if(unsizedNodes.has(id)){

   unsizedNodes.delete(id) ;

   me.fireNodeSizedEvent() ;
}