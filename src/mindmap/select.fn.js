
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
 * @import layout from .layout scoped
 * 
 * @import passiveCancelEllipsis from .node.ellipsis.cancel.passive scoped
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

      let isEllipsisNode = false ;

      for(let ellipsisNode of ellipsisNodes){

          if(ellipsisNode === node || isDescendantNode(ellipsisNode , node) || isDescendantNode(node , ellipsisNode)){

              for(let ellipsisNode of ellipsisNodes){

                ellipsisNode.hidden = false ;

              }

              ellipsisNodes.length = 0 ;

              if(ellipsisRootNode){

                  ellipsisRootNode.ellipsis = false ;
              }

              isEllipsisNode = true ;

              break ;
          }
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

      if(!isEllipsisNode){

        let {
            unsizedNodes
        } = me ;

        if(unsizedNodes.size){

            await new Promise(callback => add(me , 'nodesized' , () => {

              passiveCancelEllipsis() ;

              callback() ;

            } , {
                once:true
            })) ;

        }else{

          passiveCancelEllipsis() ;

        }

      }else{

        let deepestLeafNode = getDeepestLeafNode(node),
            level = getLevel(deepestLeafNode) ;

          if(level > visibilityLevel){

          let {
              unsizedNodes
          } = me,
          nodeLevel = getLevel(node);

          if(nodeLevel < level - visibilityLevel + 1){

            level -= visibilityLevel ;

            for(let i = 0 ; i < level ; i ++){

              deepestLeafNode = getParentNode(deepestLeafNode) ;

            }
          }

          if(unsizedNodes.size){

              await new Promise(callback => add(me , 'nodesized' , () => {

                ellipsis(deepestLeafNode , visibilityLevel) ;

                callback() ;

              } , {
                  once:true
              })) ;

          }else{

            ellipsis(deepestLeafNode , visibilityLevel) ;

          }
  
        }
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