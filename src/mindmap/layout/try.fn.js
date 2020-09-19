
/**
 * 
 * 尝试布局
 * 
 * @import waitNodeSized from ..node.sized.wait scoped
 * 
 * @import layout from ..layout scoped
 * 
 * @import reset from ..data.nodes.data.reset scoped
 * 
 */

 let {
    restructuring
 } = this ;

 if(!restructuring){

    reset() ;
 }

 await waitNodeSized() ;

 layout() ;
 
