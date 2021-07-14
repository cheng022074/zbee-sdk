
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

      me.isNeedAgainLayout = true ;

      return ;
   }

   delete me.isNeedAgainLayout ;

   me.isLayouting = true ;

   clear() ;

   let {
      pattern:layout,
      createPositioner
   } = me.layoutConfig ;

   doBeforeLayout.call(me , rootNode => {

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

   let layoutNodes = me.layoutNodes = [
      rootNode,
      ...getDescendantNodes(rootNode)
   ] ;

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

         if(me.isNeedAgainLayout){

            doBeforeLayout(callback) ;

         }else{

            callback(rootNode) ;
         }

      }) ;

    }else{

      callback(rootNode) ;
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