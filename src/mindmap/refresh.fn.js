
/**
 * 
 * 刷新
 * 
 * @import refresh from .layout.refresh scoped
 * 
 * @import layout from .layout scoped
 * 
 * @import isUnsized from .node.is.unsized scoped
 * 
 */

 let me = this,
 {
     layoutNodes
 } = me;

 for(let layoutNode of layoutNodes){

     if(isUnsized(layoutNode)){

         layout() ;

         return ;
     }
 }

 refresh() ;