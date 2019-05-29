
/**
 * 
 * 区域
 * 
 * @param {object} config 配置
 * 
 * @param {number} [config.x] 横坐标
 * 
 * @param {number} [config.y] 纵坐标
 * 
 * @param {number} [config.width] 宽度
 * 
 * @param {number} [config.height] 高度
 * 
 */

 class main{

    constructor({
       x,
       y,
       width,
       height
    }){
       
      let me = this ;

      me.x = x ;

      me.y = y ;

      me.width = width ;

      me.height = height ;

    }

    contains(region){

      {
         let {
            x:currentX,
            y:currentY
         } = me.getAnchorXY('tl'),
         {
            x:regionX,
            y:regionY
         } = region.getAnchorXY('tl') ;
   
         if(currentX > regionX || currentY > regionY){
   
            return false ;
         }
      }

      {
         let {
            x:currentX,
            y:currentY
         } = me.getAnchorXY('tr'),
         {
            x:regionX,
            y:regionY
         } = region.getAnchorXY('tr') ;
   
         if(currentX < regionX || currentY > regionY){
   
            return false ;
         }
      }

      {
         let {
            x:currentX,
            y:currentY
         } = me.getAnchorXY('tr'),
         {
            x:regionX,
            y:regionY
         } = region.getAnchorXY('tr') ;
   
         if(currentX < regionX || currentY > regionY){
   
            return false ;
         }
      }

      {
         let {
            x:currentX,
            y:currentY
         } = me.getAnchorXY('br'),
         {
            x:regionX,
            y:regionY
         } = region.getAnchorXY('br') ;
   
         if(currentX < regionX || currentY < regionY){
   
            return false ;
         }
      }

      {
         let {
            x:currentX,
            y:currentY
         } = me.getAnchorXY('bl'),
         {
            x:regionX,
            y:regionY
         } = region.getAnchorXY('bl') ;
   
         if(currentX > regionX || currentY < regionY){
   
            return false ;
         }
      }

      return true ;

    }
 }

 