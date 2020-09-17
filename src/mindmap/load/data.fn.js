
/**
 * 
 * 加载脑图序列化数据
 * 
 * @import create from ..node.create scoped
 * 
 * @import append from ..node.append scoped
 * 
 * @import initSortNodes from ..load.sort scoped
 * 
 * @import initVisibilityNodes from ..load.visibility scoped
 * 
 * @import initNodes from ..load.nodes scoped
 * 
 * @import tryLayout from ..layout.try scoped
 * 
 * @param {object} data 脑图序列化数据 
 * 
 */

 async function main(data){

   let {
      root
   } = data ;
  
   let rootNode = this.rootNode = create(root) ;

   doAppend(rootNode , root.children) ;
  
   rootNode.selected = true ;
   
   initSortNodes() ;
   
   initNodes() ;
   
   initVisibilityNodes() ;
   
   await tryLayout() ;
 }

 function doAppend(node , children){

   for(let child of children){

      let childNode = append(node , child) ;

      doAppend(childNode , child.children) ;
   }
 }

 