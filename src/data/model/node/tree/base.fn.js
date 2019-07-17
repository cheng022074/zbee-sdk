
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
 * @import createVisualization from ..visualization
 * 
 * @import createCache from object.cach2e
 * 
 * @param {mixed} data 数据
 * 
 * @class
 * 
 */

 class main extends Model{

    constructor(config){

        super(config) ;

        let me = this ;

        me.cache = createCache(me) ;

        me.visualization = createVisualization(me) ;
    }

    static get fieldConfigurations(){

        return [
            'id',
            'parentId',
            {
                name:'expanded',
                persistent:true,
                defaultValue:false
            },{
                name:'selected',
                persistent:true,
                defaultValue:false
            },{
                name:'hidden',
                persistent:true,
                defaultValue:true
            },
            {
                name:'leaf',
                defaultValue:false
            }
        ];
    }

    get hidden(){

        return this.get('hidden') ;
    }

    /**
     * 
     * 判断当前节点是否为根节点
     * 
     * @return {boolean} 如果为根节点则返回 true , 否则返回 false
     * 
     */
    get isRoot(){

        return !this.parentNode ;
    }

    /**
     * 
     * 判断当前节点是否为叶子节点
     * 
     * @return {boolean} 如果为叶子节点则返回 true , 否则返回 false
     * 
     */
    get isLeaf(){

        return this.get('leaf') ;
    }

    /**
     * 
     * 判断当前节点是否加载
     * 
     * @return {boolean}
     * 
     */
    get synchronized(){

        let {
            isLeaf,
            children
        } = this ;

        return !isLeaf && children.length !== 0 ;
    }

    syncChildNodes(nodes){

        let me = this ;

        if(!me.synchronized){

            if(nodes.length === 0){

                me.set('leaf' , true) ;
            
            }else{

                me.suspendEvents() ;
    
                nodes = me.appendChild(nodes) ;

                me.resumeEvents() ;
            }

            me.fireEvent('syncchildnodes' , nodes) ;
        }
    }

    /**
     * 
     * 表达当前节点是否展开
     * 
     * @return {boolean} 节点展开标志
     * 
     */
    get expanded(){

        return this.get('expanded') ;
    }
    /**
     * 
     * 返回父节点
     * 
     * @return {data.model.node.Tree} 父节点
     * 
     */
    get parentNode(){

        let me = this,
        {
            store
        } = me ;

        return store.getById(me.get('parentId')) ;
    }

    /**
     * 
     * 返回第一个子节点
     * 
     * @return {data.model.node.Tree} 节点
     * 
     */
    get firstVisibleChildNode(){

       return getChildNode.call(this , 'first') ;
    }

     /**
     * 
     * 返回最后一个子节点
     * 
     * @return {data.model.node.Tree} 节点
     * 
     */
    get lastVisibleChildNode(){

        return getChildNode.call(this , 'last') ;
    }

    get firstDescendantNodes(){

        return getDescendantNodes.call(this , 'firstChildNode') ;
    }

    get lastDescendantNodes(){

        return getDescendantNodes.call(this , 'lastChildNode') ;
    }


    get selected(){

        return this.get('selected') ;
    }
 }

 function getSiblingNode(property){

    let me = this,
        {
            parentNode
        } = me ;

    if(parentNode){

        let {
            cache
        } = parentNode,
        index = cache.get('children').indexOf(me);

        switch(property){

            case 'next':

                index ++ ;

                break ;

            case 'previous':

                index -- ;
        }

        return childNodes[index] ;
    }
 }

 function getDescendantNodes(property){

    let nodes = [],
        node = this;

    while(true){

        let childNode = node[property] ;

        if(childNode){

            nodes.push(childNode) ;

            node = childNode ;
        
        }else{

            break ;
        }

    }

    return nodes ;
 }

 function getChildNode(property){

    let {
        children
    } = this ;

    if(children.length){

        switch(property){

            case 'first':

                return children[0] ;

            case 'last':

                return children[children.length - 1] ;
        }
    }
 }