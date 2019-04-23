
/**
 * 
 * 返回当前节点的上一个兄弟节点
 * 
 * @return {tree.Node} 节点 
 * 
 */

let me = this,
{
   parentNode
} = me ;

if(parentNode){

   let {
       $children:children
   } = parentNode ;

   return children[children.indexOf(me) - 1] ;
}