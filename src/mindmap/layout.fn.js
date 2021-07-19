
/**
 * 
 * 布局
 * 
 * @import refresh from .refresh scoped
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
      isLayouting
   } = me;

   if(isLayouting){

      return ;
   }

   me.isLayouting = true ;

   clear() ;

   let {
      pattern:layout,
      createPositioner
   } = me.layoutConfig ;

   doBeforeLayout.call(me , (rootNode , layoutNodes) => {

      me.layoutData = layout(rootNode) ;

      me.layoutNodes = layoutNodes ;

      me.layoutPositioner = createPositioner(me , me.layoutNodes) ;

      refresh() ;

      me.isLayouting = false ;

   }) ;
 }

 function doBeforeLayout(callback){

   let me = this,
   {
      rootNode,
      layoutConfig
   } = me,
   {
      getRootNode,
      getDescendantNodes
   } = layoutConfig ;

   rootNode = getRootNode() || rootNode;

   let layoutNodes = [
      rootNode,
      ...getDescendantNodes(rootNode)
   ] ;

   let unsizedNodes = new Map() ;

   initUnsizedNodes(unsizedNodes , layoutNodes) ;

    if(unsizedNodes.size){

      let onNodeUnsized = sizes => {

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

         initUnsizedNodes(unsizedNodes , layoutNodes) ;

         if(unsizedNodes.size){

            me.fireEvent('nodeunsized' , getDataNodes(unsizedNodes) , onNodeUnsized) ;

         }else{

            callback(rootNode , layoutNodes) ;
         }
      } ;

      me.fireEvent('nodeunsized' , getDataNodes(unsizedNodes) , onNodeUnsized) ;

   }else{

      callback(rootNode , layoutNodes) ;
   }
 }

 function initUnsizedNodes(unsizedNodes , layoutNodes){

   unsizedNodes.clear() ;

   for(let layoutNode of layoutNodes){

      if(isUnsized(layoutNode)){

         unsizedNodes.set(layoutNode.id , layoutNode) ;
      }
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