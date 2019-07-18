
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
            'parentNode'
        ]) ;
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
    getParentNode(){

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
    get firstChildNode(){

        let {
            children
        } = this;
    
        if(children.length){
    
            return children[0] ;
        }
    }

     /**
     * 
     * 返回最后一个子节点
     * 
     * @return {data.model.node.Tree} 节点
     * 
     */
    get lastChildNode(){

        let {
            children
        } = this;
    
        if(children.length){
    
            return children[children.length - 1] ;
        }
    }

    get selected(){

        return this.get('selected') ;
    }

      /**
     * 
     * 显示
     * 
     */
    show(){

        doHidden.call(this , false) ;
        
    }

    /**
     * 
     * 隐藏
     * 
     */
    hide(){

        doHidden.call(this , true) ;
    }

    /**
     * 
     * 返回上一个兄弟节点
     * 
     * @return {data.model.node.Tree} 父节点
     * 
     */
    get previousSiblingNode(){

        return getSiblingNode.call(this , -1) ;
    }
    /**
     * 
     * 返回下一个兄弟节点
     * 
     * @return {data.model.node.Tree} 父节点
     * 
     */
    get nextSiblingNode(){

        return getSiblingNode.call(this , 1) ;
    }
 }

 function doHidden(value){

    let me = this,
        {
            children,
            store
        } = me,
        {
            selectedNode
        } = store;

    if(selectedNode === me && value){

        let {
            parentNode
        } = me ;

        while(parentNode){

            if(parentNode.hidden === false){

                parentNode.select() ;

                break ;
            
            }else{

                parentNode = parentNode.parentNode ;
            }
        }
    }

    if(value){

        me.set({
            hidden:true,
            x:0,
            y:0
        }) ;

    }else{

        me.set('hidden' , value) ;
    }

    for(let childNode of children){

        childNode[value ? 'hide' : 'show']() ;
    }
 }

 function getSiblingNode(offset){

    let me = this,
        {
            parentNode
        } = me ;

    if(parentNode){

        let {
            children
        } = parentNode;

        return childNodes[children.indexOf(me) + offset] ;
    }
 }