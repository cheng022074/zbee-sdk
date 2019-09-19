
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
 * @import from from array.from
 * 
 * @import resetProperties from object.properties.reset
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
            'children',
            'leafNodes',
            'depth'
        ]) ;
    }

    resetProperties(names){

        resetProperties(this , from(names)) ;
    }

    resetAncestorProperties(names){

        let node = this ;

        while(node = node.parentNode){

            node.resetProperties(names) ;

        }
    }

    getDepth(){

        let node = this,
            parentNode,
            depth = 0;

        while(parentNode = node.parentNode){

            node = parentNode ;

            depth ++ ;
        }

        return depth ;
    }

    getLeafNodes(){

        let me = this,
        {
            expanded,
            hidden
        } = me;

        if(hidden){

            return [] ;
        }

        if(!expanded){

            return [
                me
            ] ;
        
        }

        let leafNodes = [],
        {
            children
        } = me;

        if(children.length === 0){

            return [
                me
            ] ;
        }

        for(let childNode of children){

            leafNodes.push(...childNode.leafNodes) ;
        }

        return leafNodes ;
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