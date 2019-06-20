
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
 * @param {mixed} data 数据
 * 
 * @class
 * 
 */

 class main extends Model{

    sync({
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
            'id',
            'parentId',
            {
                name:'expanded',
                persistent:true,
                defaultValue:false
            },{
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

    get width(){

       return this.get('width') ;
    }

    /**
     * 
     * 获得高度
     * 
     * @return {number}
     * 
     */
    get height(){

        return this.get('height') ;
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
    get isLoaded(){

        let {
            isLeaf,
            children
        } = this ;

        return !isLeaf && children.length === 0 ;
    }

    /**
     * 
     * 返回上一个兄弟节点
     * 
     * @return {data.model.node.Tree} 父节点
     * 
     */
    get previousSiblingNode(){

        return getSiblingNode.call(this , 'previous') ;
    }
    /**
     * 
     * 返回下一个兄弟节点
     * 
     * @return {data.model.node.Tree} 父节点
     * 
     */
    get nextSiblingNode(){

        return getSiblingNode.call(this , 'next') ;
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
     * 返回子节点集合
     * 
     * @return {data.model.node.Tree[]} 子节点集合
     * 
     */
    get childNodes(){

       let me = this,
       {
           expanded
       } = me ;

       if(!expanded){

            return [] ;
       }

       return me.children ;
    }

    /**
     * 
     * 返回第一个子节点
     * 
     * @return {data.model.node.Tree} 节点
     * 
     */
    get firstChildNode(){

       return getChildNode.call(this , 'first') ;
    }

    get firstDescendantNodes(){

        return getDescendantNodes.call(this , 'firstChildNode') ;
    }

    /**
     * 
     * 返回最后一个子节点
     * 
     * @return {data.model.node.Tree} 节点
     * 
     */
    get lastChildNode(){

        return getChildNode.call(this , 'last') ;
    }

    get lastDescendantNodes(){

        return getDescendantNodes.call(this , 'lastChildNode') ;
    }


    get selected(){

        return this.get('selected') ;
    }

    /**
     * 
     * 删除
     * 
     * @param {data.model.node.Tree} node 节点
     * 
     */
    removeChild(node){

        let {
             store,
             childNodes
        } = this ;

        store.removeNodes(node) ;
        
        remove(childNodes , node) ;
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
 }

 function doHidden(value){

    let me = this,
        {
            childNodes,
            store
        } = me,
        {
            selectedNode
        } = store;

    if(selectedNode === me){

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

    for(let childNode of childNodes){

        childNode[value ? 'hide' : 'show']() ;
    }
 }

 function getSiblingNode(property){

    let me = this,
        {
            parentNode
        } = me ;

    if(parentNode){

        let {
            childNodes
        } = parentNode,
        index = childNodes.indexOf(me);

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