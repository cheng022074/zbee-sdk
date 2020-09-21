
/**
 * 
 * 保存脑图节点数据
 * 
 * @import getData from .data.node.data scoped
 * 
 * @return {array} 脑图节点数据  
 * 
 */

function main(){

   let me = this ;

   me.snapshotData = save(me.rootNode) ;
}

function save(node){

   let data = {
      ...getData(node),
      children:[]
   },
   {
      children:items
   } = data,
   {
      children
   } = node;

   for(let childNode of children){

      items.push(save(childNode)) ;
   }

   return data ;
}


