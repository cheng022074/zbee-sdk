
/**
 * 
 * 布局
 * 
 * @import refresh from .refresh scoped
 * 
 * @import isUnsized from .node.is.unsized scoped
 * 
 * @import getData from .layout.node.data.param scoped
 * 
 * @import clear from .layout.cache.clear scoped
 * 
 */

 function main(){

   let me = this,
   {
      isLayouting
   } = me;

   if(isLayouting){

      return ;
   }

   me.isLayouting = true ;

   clear() ;

   let {
      pattern:layout,
      getRootNode,
      getDescendantNodes
   } = me.layoutConfig ;

   let rootNode = getRootNode() ;

   doBeforeLayout.call(me , me.layoutNodes = [
      rootNode,
      ...getDescendantNodes(rootNode)
   ] , () => {

      me.layoutData = layout(rootNode) ;

      refresh() ;

      me.isLayouting = false ;

   }) ;
 }

 function doBeforeLayout(layoutNodes , callback){

   let unsizedNodes = new Map() ;

    for(let layoutNode of layoutNodes){

      if(isUnsized(layoutNode)){

         unsizedNodes.set(layoutNode.id , layoutNode) ;
      }
    }

    if(unsizedNodes.size){

      this.fireEvent('nodeunsized' , getDataNodes(unsizedNodes) , sizes => {

         let ids = Object.keys(sizes) ;

         for(let id of ids){

            let node = unsizedNodes.get(id),
            {
               width,
               height
            } = sizes[id];

            node.width = width ;

            node.height = height ;
         }

         callback() ;

      }) ;

    }else{

      callback() ;
    }
 }

 function getDataNodes(nodes){

   nodes = nodes.values() ;

   let result = [] ;

   for(let node of nodes){

      result.push(getData(node)) ;
   }

   return result ;
 }