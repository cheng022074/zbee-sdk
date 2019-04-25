
/**
 * 
 * 在指定节点之前插入
 * 
 * @import isObject from is.object.simple
 * 
 * @import insert from array.insert.after
 * 
 * @param {mixed} node 子节点
 * 
 * @param {tree.Node} existNode 已有子节点
 * 
 * @return {mixed} 返回说明 
 * 
 */

let me = this,
{
   $children:children,
   tree
} = me ;

if(!children.includes(existNode)){

    return ;
}

if(isObject(node)){

   node = tree.read(node) ;

   if(!node){

     return ;
   }
}

let {
   parentNode
} = node;

if(parentNode){

  parentNode.removeChild(node) ;
  
}

if(!children.includes(node)){

  tree.insertQueue(me , node , existNode , 'after') ;

  node.parentNode = me ;

  insert(children , node , existNode) ;

  return node ;
}