
/**
 * 
 * 布局
 * 
 * @import isUnsized from .node.is.unsized scoped
 * 
 * @import getData from .node.data scoped
 * 
 * @import clear from .layout.cache.clear scoped
 * 
 */

 function main(){

   let me = this,
   {
      isLayouting,
      rootNode
   } = me;

   if(isLayouting){

      return ;
   }

   me.isLayouting = true ;

   clear() ;

   let {
      pattern:layout,
      getRootNode,
      getDescendantNodes,
      createPositioner
   } = me.layoutConfig ;

   rootNode = getRootNode() || rootNode;

   doBeforeLayout.call(me , me.layoutNodes = [
      rootNode,
      ...getDescendantNodes(rootNode)
   ] , () => {

      console.time('布局') ;

      me.layoutData = layout(rootNode) ;

      me.layoutPositioner = createPositioner(me , me.layoutNodes) ;

      me.refresh() ;

      me.isLayouting = false ;

      console.timeEnd('布局') ;

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