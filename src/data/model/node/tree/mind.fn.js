
/**
 * 
 * 脑图节点
 * 
 * @import Model from ..tree value
 * 
 * @import isEmpty from is.object.empty
 * 
 * @class
 * 
 */

 class main extends Model{

    syncSize({
        width,
        height
    }){

        return !isEmpty(this.set({
            width,
            height
        })) ;
    }

    static get fieldConfigurations(){

        return [
            ...super.fieldConfigurations,
            {
                name:'width',
                persistent:true,
                defaultValue:0
            },{
                name:'height',
                persistent:true,
                defaultValue:0
            },{
                name:'x',
                persistent:true,
                defaultValue:0
            },{
                name:'y',
                persistent:true,
                defaultValue:0
            }
        ] ;
    }

    /**
     * 
     * 获得横坐标
     * 
     * @return {number}
     * 
     */
    get x(){

        return this.get('x') ;
    }

    /**
     * 
     * 获得纵坐标
     * 
     * @return {number}
     * 
     */
    get y(){

        return this.get('y');
    }

    /**
     * 
     * 获取宽度
     * 
     * @return {Number}
     * 
     */
    get width(){

        return this.get('width') ;
     }
 
     /**
      * 
      * 获得高度
      * 
      * @return {Number}
      * 
      */
     get height(){
 
         return this.get('height') ;
     }
 }