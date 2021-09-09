
/**
 * 
 * 布局
 * 
 * @import refresh from .layout.refresh scoped
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

      me.layoutCount ++ ;

      return ;
   }

   me.isLayouting = true ;

   me.layoutCount = 0 ;

   clear() ;

   let {
      pattern:layout,
      createPositioner
   } = me.layoutConfig ;

   doBeforeLayout.call(me , (rootNode , layoutNodes) => {

      me.layoutNodes = layoutNodes ;

      me.layoutData = layout(rootNode) ;

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

         if(me.layoutCount !== 0){

            me.layoutCount = 0 ;

            doBeforeLayout.call(me , callback) ;

            return  ;
         }

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

         callback(rootNode , layoutNodes) ;
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