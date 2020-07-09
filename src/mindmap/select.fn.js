
/**
 * 
 * 选定节点
 * 
 * @import fireDrawEvent from .fire.draw scoped
 * 
 * @import data from .node.data scoped
 * 
 * @import cancelEllipsis from .node.ellipsis.cancel.active scoped
 * 
 * @import getParentNode from .node.parent scoped
 * 
 * @import expand from .node.expand scoped
 * 
 * @import collapse from .node.collapse scoped
 * 
 * @import layout from .layout scoped
 * 
 * @import add from event.listener.add
 * 
 * @import isDescendantNode from .node.is.descendant scoped
 * 
 * @import getLevel from .node.level scoped
 * 
 * @import ellipsis from .node.ellipsis scoped
 * 
 * @import getDeepestLeafNode from .node.leaf.deepest scoped
 * 
 * @param {string} id 节点编号
 * 
 * @param {boolean} [isFireDrawEvent = true] 是否派发重绘事件 
 * 
 */

 let me = this,
 {
    nodes,
    selectedNode,
    restructuring,
    ellipsisRootNode,
    ellipsisNodes,
    visibilityLevel
 } = me,
 useLayout = false;

 if(ellipsisRootNode && ellipsisRootNode.id === id){

  cancelEllipsis() ;
    
 }else if(!restructuring && selectedNode.id !== id && nodes.has(id)){

   let node = nodes.get(id) ;

   if(node.hidden){

      for(let ellipsisNode of ellipsisNodes){

        ellipsisNode.hidden = false ;

      }

      ellipsisNodes.length = 0 ;

      if(ellipsisRootNode){

          ellipsisRootNode.ellipsis = false ;
      }

      let parentNodes = [],
          parentNode,
          baseNode = node;

      while(parentNode = getParentNode(baseNode)){

          if(!parentNode.expanded){

            parentNodes.unshift(parentNode) ;

            baseNode = parentNode ;
          
          }else{

              break ;
          }
      }

      for(let parentNode of parentNodes){

          expand(parentNode) ;
      }

      let {
          unsizedNodes
      } = me ;

      if(unsizedNodes.size){

          await new Promise(callback => add(me , 'nodesized' , callback , {
              once:true
          })) ;

      }

      let deepestLeafNode = getDeepestLeafNode(node),
          level = getLevel(deepestLeafNode) ;

      if(level > visibilityLevel){

        let nodeLevel = getLevel(node);

        if(nodeLevel < level - visibilityLevel + 1){

          let count = level - visibilityLevel - nodeLevel + 1;

          for(let i = 0 ; i < count ; i ++){

              deepestLeafNode = getParentNode(deepestLeafNode) ;
          }

          collapse(deepestLeafNode) ;
        }

        ellipsis(deepestLeafNode , visibilityLevel) ;

      }

      useLayout = true ;
   }

   node.selected = true ;
        
   me.fireEvent('nodeselect' , data(node)) ;

    if(isFireDrawEvent){

      if(useLayout){

        layout() ;

      }else{

        fireDrawEvent() ;

      }
    
    }    
 }