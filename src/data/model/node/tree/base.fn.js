
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
 * @param {mixed} data 数据
 * 
 * @class
 * 
 */

 class main extends Model{

    syncSize(width , height){

        this.set({
            width,
            height
        }) ;
    }

    static get fieldConfigurations(){

        return [
            'id',
            'parentId',
            {
                name:'expanded',
                persistent:true,
                defaultValue:true
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

        return getChildNodes.call(this).length === 0 ;
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

       return getChildNodes.call(me) ;
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
     * 添加子节点
     * 
     * @param {data.model.node.} node
     * 
     */
    appendChild(node){

        let me = this,
        {
            store,
            expanded
        } = me,
        childNodes = getChildNodes.call(me);
  
        if(!expanded){

            node.hide() ;
        }

        store.insertNodes(store.indexOf(me.lastLeafNode || me) + 1 , node) ;

        childNodes.push(node) ;
    }

    /**
     * 
     * 插入
     * 
     * @param {data.model.node.Tree} node
     * 
     * @param {data.model.node.Tree} existNode
     * 
     *  
     */
    insertBefore(node , existNode){

       let {
         store,
         expanded
       } = this,
       childNodes = getChildNodes.call(me);

       if(childNodes.includes(existNode)){

            if(!expanded){

                node.hide() ;
            }

            store.insert(store.indexOf(existNode) , node) ;

            insert(childNodes , childNodes.indexOf(existNode) , node) ;
       }
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
     * 展开
     * 
     */
    expand(){

        let me = this,
        {
            expanded
        } = me ;



        if(!expanded){

            me.set('expanded' , true) ;

            let {
                childNodes
            } = me ;

            for(let childNode of childNodes){

                childNode.show() ;
            }
        }
    }

    /**
     * 
     * 收起
     * 
     */
    collapse(){

        let me = this,
        {
            expanded,
            childNodes
        } = me ;

        if(expanded){

            for(let childNode of childNodes){

                childNode.hide() ;
            }

            me.set('expanded' , false) ;
        }
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
            childNodes
        } = me;

    me.set('hidden' , value) ;

    for(let childNode of childNodes){

        childNode[value ? 'hide' : 'show']() ;
    }
 }

 function getChildNodes(){

    let {
        store,
        id
    } = this ;

    return store.findRecords('parentId' , id) ;
 }

 function getRegion(property , defaultValue = 0){

    let me = this,
    {
        hidden
    } = me ;

    if(hidden){

        return defaultValue;
    }

    return me.get(property) ;
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
        childNodes
    } = this ;

    if(childNodes.length){

        switch(property){

            case 'first':

                return childNodes[0] ;

            case 'last':

                return childNodes[childNodes.length - 1] ;
        }
    }
 }