
/**
 * 
 * 区域
 * 
 * @import region from mixin.region
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

 class main extends mixins({
    mixins:[
      region
    ]
 }){

    constructor({
       x,
       y,
       width,
       height
    }){

      super() ;
       
      let me = this ;

      me.x = x ;

      me.y = y ;

      me.width = width ;

      me.height = height ;

    }

    get right(){

       return this.getAnchorXY('r').x ;
    }

    get bottom(){

      return this.getAnchorXY('b').y ;
    }

    contains(region){

      let me = this;
 
      return (region.x >= me.x && (region.right || region.x) <= me.right && region.y >= me.y && (region.bottom || region.y) <= me.bottom);
   }

   containTo(region){

      let me = this ;

      if(me.contains(region)){

         return {
            x:0,
            y:0
         };
      }

      let {
         x:currentX,
         y:currentY,
         right:currentRight,
         bottom:currentBottom
      } = me,
      offsetX = 0,
      offsetY = 0;

      let {
         x:regionX,
         y:regionY,
         right:regionRight,
         bottom:regionBottom
      } = region;

      if(regionX < currentX){

         offsetX = regionX - currentX ;
      }

      if(regionRight > currentRight){

         offsetX = regionRight - currentRight ;
      }

      if(regionY < currentY){

         offsetY = regionY - currentY ;
      }

      if(regionBottom > currentBottom){

         offsetY = regionBottom - currentBottom ;
      }

      return {
         x:offsetX,
         y:offsetY
      } ;
   }
 }

 