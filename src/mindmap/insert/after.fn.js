
/**
 * 
 * 在选定节点之前插入
 * 
 * @import insert from ..node.insert.after scoped
 * 
 * @import order from ..order scoped
 * 
 * @import data from ..node.data scoped
 * 
 * @import getParentNode from ..node.parent scoped
 * 
 * @import select from ..select scoped
 * 
 * @import from from ..node.from scoped
 * 
 * @import is.defined
 * 
 * @import is.function
 * 
 * @import register from ..node.unpublished.register scoped
 * 
 * @import unregister from ..node.unpublished.unregister scoped
 * 
 * @import isUnpublished from ..node.unpublished.is scoped
 * 
 * @import setNodeInfo from ..node.info scoped
 * 
 * @param {mixed} node 插入的节点配置
 * 
 * @param {mixed} [afterNode] 参考脑图节点
 * 
 * @param {boolean} [isSilentMode = false] 是否静默模式
 * 
 */

let me = this,
{
   restructuring
} = me;

if(restructuring){

   return;
}

let nodeSelected,
    isNewNode = true;

if(isDefined(node) &&　from(node)){

   isNewNode = false ;

   nodeSelected = node.selected ;
}

node = insert(node , from(afterNode)) ;

if(node){

   if(nodeSelected){

      node.selected = true ;
   }

   if(!isSilentMode){

      me.fireEvent('nodeinsertafter' , data(node) , data(afterNode) , isNewNode , () => order(getParentNode(afterNode))) ;

      if(!select(node)){

         me.layout() ;
      }
   
   }else if(isFunction(isSilentMode)){

      register(node) ;

      if(!select(node)){

         me.layout() ;
      }

      await isSilentMode(data(node) , isNewNode , id => {

         if(isDefined(id)){

            if(isUnpublished(node)){
      
               setNodeInfo({
                  id
               } , node) ;
         
               unregister(node) ;
            
            }
         
         }else if(!isUnpublished(node)){
   
            return node.id ;
   
         }

      }) ;

      if(!isUnpublished(node)){

         me.fireEvent('nodeinsertafter' , data(node) , data(afterNode) , isNewNode , () => order(getParentNode(afterNode))) ;
      }

   }else{

      me.layout() ;
   }
}
