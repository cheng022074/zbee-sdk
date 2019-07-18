
/**
 * 
 * 树型数据模型
 * 
 * @import Model from data.model value
 * 
 * @import insert from array.insert
 * 
 * @import remove from array.remove
 * 
 * @import region from mixin.region
 * 
 * @import isEmpty from is.object.empty
 * 
 * @import defineProperties from object.properties.define
 * 
 * @param {mixed} data 数据
 * 
 * @class
 * 
 */

 class main extends Model{

    constructor(config){

        super(config) ;

        defineProperties(this , [
            'parentNode',
            'children'
        ]) ;
    }

    /**
     * 
     * 返回父节点
     * 
     * @return {data.model.node.Tree} 父节点
     * 
     */
    getParentNode(){

        let me = this,
        {
            store
        } = me ;

        return store.getById(me.get('parentId')) ;
    }
    /**
     * 
     * 返回子节点
     * 
     * @return {array} 父节点
     * 
     */
    getChildren(){

        let {
            store,
            id
        } = this ;
        
        return store.findRecords('parentId' , id) ;
    }
 }