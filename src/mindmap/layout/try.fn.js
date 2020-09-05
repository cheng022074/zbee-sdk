
/**
 * 
 * 尝试布局
 * 
 * @import waitNodeSized from ..node.sized.wait scoped
 * 
 * @import layout from ..layout scoped
 * 
 * @import fireDrawEvent from ..fire.draw scoped
 * 
 */

 if(await waitNodeSized()){

    layout() ;
 
 }else{

    fireDrawEvent() ;
 }