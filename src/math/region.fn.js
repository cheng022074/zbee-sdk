
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

      let me = this;

      return (region.x >= me.x &&
             (region.right || region.x) <= me.right &&
             region.y >= me.y &&
             (region.bottom || region.y) <= me.bottom);
   }

   getOffsetsTo(offsetsTo){

      let me = this ;

      return {
          x: me.x - offsetsTo.x,
          y: me.y - offsetsTo.y
      };
   }
}

 