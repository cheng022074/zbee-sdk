
/**
 * 
 * 区域
 * 
 * @param {number} top 上
 * 
 * @param {number} right 右
 * 
 * @param {number} bottom 下
 * 
 * @param {number} left 左
 * 
 */

 const {
    abs
 } = Math ;

 class main{

    constructor(top , right , bottom , left){

      let me = this ;

      me.top = top ;

      me.right = right ;

      me.bottom = bottom ;

      me.left = left ;

    }

   get x(){

      return this.left ;
   }

   get y(){

      return this.top ;
   }

   contains(region){

      let {
         x,
         y,
         right,
         bottom
      } = this,
      {
         x:regionX,
         y:regionY,
         right:regionRight,
         bottom:regionBottom
      } = region;

      return (regionX >= x &&
             (regionRight || regionX) <= right &&
             regionY >= y &&
             (regionBottom || regionY) <= bottom);
   }

   getOutOfBoundOffset({
      x,
      y,
      right,
      bottom
   }){

      let me = this;

      x = me.getOutOfBoundOffsetX(x) ;

      right = me.getOutOfBoundOffsetX(right) ;

      if(abs(x) < abs(right)){

         x = right ;
      }

      y = me.getOutOfBoundOffsetY(y) ;

      bottom = me.getOutOfBoundOffsetY(bottom) ;

      if(abs(y) < abs(bottom)){

         y = bottom ;
      }

      return {
         x,
         y
      } ;
  }

   getOutOfBoundOffsetX(x){

      let me = this,
      {
         left,
         right
      } = me;

      if (x <= left) {

         return left - x;
      
      }else if (x >= right) {
      
         return right - x;
      
      }

      return 0;
  }

  getOutOfBoundOffsetY(y){

      let me = this,
      {
      top,
      bottom
      } = me ;

      if (y <= top) {

         return top - y;
      
      }else if (y >= bottom) {
      
         return bottom - y;
      
      }

      return 0;
   }
}

 