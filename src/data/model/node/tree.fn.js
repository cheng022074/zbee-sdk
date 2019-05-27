
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

 class main extends mixins({
     extend:Model,
     mixins:[
        region
     ]
 }){

    syncSize(width , height){

        this.set({
            width,
            height
        }) ;
    }

    move({
        x:offsetX = 0,
        y:offsetY = 0
    }){

        let me = this,
        {
            childNodes,
            x,
            y
        } = me;

        me.set({
            x:x + offsetX,
            y:y + offsetY
        }) ;

        for(let childNode of childNodes){

            childNode.move(x , y) ;
        }
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

    /**
     * 
     * 获得当前节点在树中的深度
     * 
     * @return {number}
     * 
     */
    get depth(){

        let node = this,
        parentNode,
        depth = 0;

        while(parentNode = node.parentNode){

            node = parentNode ;

            depth ++ ;
        }

        return depth ;
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

    /**
     * 
     * 获得宽度
     * 
     * @return {number}
     * 
     */
    get width(){

        return this.get('width');
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


    get regionHeight(){

        let me = this,
        {
            height,
            childNodes,
            store,
        } = me,
        countHeight = 0,
        {
            marginBottom
        } = store,
        {
            length
        } = childNodes;

        if(length){

            for(let {
                regionHeight
            } of childNodes){
    
                countHeight += regionHeight ;
            }

            return countHeight + marginBottom * (length - 1); 
        }

        return height ;
    }

    /**
     * 
     * 获得指定深度的第一个节点
     * 
     * @param {number} depth 深度
     *  
     * @param {boolean} [isStrict = true] 是否严格匹配深度指定，如果指定为 false , 则当深度达不到指定值时，返回实际最深的节点
     * 
     * @return {data.model.node.Tree} 节点
     *  
     */
    getFirstDepthNode(depth , isStrict = true){

        return getDepthNode.call(this , depth , isStrict , 'first') ;
    }
    /**
     * 
     * 获得指定深度的最后一个节点
     * 
     * @param {number} depth 深度
     *  
     * @param {boolean} [isStrict = true] 是否严格匹配深度指定，如果指定为 false , 则当深度达不到指定值时，返回实际最深的节点
     * 
     * @return {data.model.node.Tree} 节点
     *  
     */
    getLastDepthNode(depth , isStrict = true){

        return getDepthNode.call(this , depth , isStrict , 'last') ;
    }

    /**
     * 
     * 返回祖先节点
     * 
     * @return {data.model.node.Tree} 祖先节点
     * 
     */
    getAncestorNode(depth , isStrict = true){

        return getDepthNode.call(this , depth , isStrict , 'parent') ;
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
     * 返回第一个叶子节点
     * 
     * @return {data.model.node.Tree} 节点
     * 
     */
    get firstLeafNode(){

        return getLeafNode.call(this , 'firstChildNode') ;
    }
    /**
     * 
     * 返回最后一个叶子节点
     * 
     * @return {data.model.node.Tree} 节点
     * 
     */
    get lastLeafNode(){

        return getLeafNode.call(this , 'lastChildNode') ;
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

    /**
     * 
     * 返回所有子孙节点
     * 
     * @param {data.model.node.Tree[]} 节点集合
     * 
     */
    get descendantNodes(){

        let me = this,
        {
            childNodes
        } = me,
        result = [];

        for(let childNode of childNodes){

            result.push(childNode) ;

            result.push(...childNode.descendantNodes) ;
        }

        return result ;
    }

    get selected(){

        return this.get('selected') ;
    }

    up(){

        doVerticalMoveSelect.call(this , 'up') ;
    }

    down(){

        doVerticalMoveSelect.call(this , 'down') ;

    }

    left(){

        let {
            parentNode
        } = this ;

        if(parentNode){

            parentNode.select() ;
        }
    }

    /**
     * 
     * 往右移动
     * 
     */
    right(){

        let me = this,
        {
            firstChildNode
        } = me ;

        if(firstChildNode){

            firstChildNode.select() ;
        
        }else{

            let upNode = getSubNode.call(me  , 'up');

            if(upNode){

                upNode.select() ;

                return ;
            }

            let downNode = getSubNode.call(me , 'down');

            if(downNode){

                downNode.select() ;
            }
        }
    }

    /**
     * 
     * 选择节点
     * 
     */
    select(){

        let me = this,
        {
            selected,
            store
        } = me;

        if(!selected){

            let {
                previousSelectedNode
            } = store ;

            if(previousSelectedNode){

                previousSelectedNode.deselect() ;
            }

            me.set('selected' , true) ;

            store.previousSelectedNode = me ;
        }
    }
    /**
     * 
     * 取消选择
     * 
     */
    deselect(){

        this.set('selected' , false) ;
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

    layout(){

        let me = this,
            {
                childNodes,
                isRoot
            } = me;

        if(childNodes.length === 0){

            return ;
        }

        let {
            regionHeight,
            store
        } = me,
        {
            marginBottom,
            marginRight
        } = store,
        {
            y:centerY
        } = me.getAnchorXY('c'),
        {
            x:rightX
        } = me.getAnchorXY('r');

        let startY = centerY - regionHeight / 2,
            x = rightX + marginRight;

        for(let childNode of childNodes){

            let {
                regionHeight
            } = childNode ;

            childNode.set(childNode.setAnchorXY({
                x,
                y:startY + regionHeight / 2
            } , 'c')) ;

            startY += regionHeight + marginBottom ;

            childNode.layout() ;
        }

        let {
            firstChildNode,
            lastChildNode
        } = me,
        {
            y:topY
        } = firstChildNode.getAnchorXY('t'),
        {
            y:bottomY
        } = lastChildNode.getAnchorXY('b'),
        moveY = (bottomY - topY) / 2;

        if(isRoot){

            let offsetY = moveY - me.getAnchorXY('c').y ;

            for(let childNode of childNodes){

                childNode.move({
                    y:offsetY
                }) ;
            }

        }else{
    
            me.set(me.setAnchorXY({
                y:moveY
            })) ;
        }
    }
 }

 function doHidden(value){

    let me = this,
        {
            childNodes
        } = me;

    me.set('hidden' , value) ;

    for(let childNode of childNodes){

        childNode.show() ;
    }
 }

 function getChildNodes(){

    let me = this;

    if(!me.hasOwnProperty('$childNodes')){

        let {
            store,
            id
        } = me ;

        me.$childNodes = store.findRecords('parentId' , id) ;
    
    }

    return me.$childNodes ;
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

 function getDepthNode(depth , isStrict , property){

    let node = this,
        i = 0;

    for(; i < depth ; i ++){

        let depthNode ;

        switch(property){

            case 'first':

                depthNode = node.firstChildNode ;

                break ;

            case 'last':

                depthNode = node.lastChildNode ;

                break ;

            case 'parent':

                depthNode = node.parentNode ;
        }

        if(depthNode){

            node = depthNode ;
        
        }else{

            break ;
        }
    }

    if(i === depth || isStrict !== true){

        return node ;
    
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

 function doVerticalMoveSelect(property){

    let directionName,
        depthName;

    switch(property){

        case 'up':

            directionName = 'previousSiblingNode' ;

            depthName = 'getLastDepthNode' ;

            break ;

        case 'down':

            directionName = 'nextSiblingNode' ;

            depthName = 'getFirstDepthNode' ;
    }

    let me = this,
        node = me[directionName];

    if(node){

        return node ;
    
    }else{

        let depth = 1,
            parentNode;

        while(parentNode = me.getParentNode(depth)){

            let directionNode = parentNode[directionName];

            if(directionNode){

                directionNode[depthName](depth , false).select() ;

                break ;
            }

            depth ++ ;
        }
    }
 }

 function getSubNode(property){

    let directionName,
        depthName,
        childName;

    switch(property){

        case 'up':

            directionName = 'previousSiblingNode' ;

            depthName = 'getLastDepthNode' ;

            childName = 'lastChildNode' ;

            break ;

        case 'down':

            directionName = 'nextSiblingNode' ;

            depthName = 'getFirstDepthNode' ;

            childName = 'firstChildNode' ;
    }

    let me = this,
        node = me[directionName];

    if(node){

        let childNode = node[childName] ;

        if(childNode){

            return childNode ;
        }

    }

    let depth = 1,
        parentNode;

    while(parentNode = me.getParentNode(depth)){

        while(true){

            let directionNode = parentNode[directionName];

            floor ++ ;

            if(directionNode){

                directionNode = directionNode[depthName](depth) ;

                if(directionNode){

                    let childNode = directionNode[childName] ;

                    if(childNode){

                        return childNode ;
                    }
                }

                parentNode = directionNode ;
            
            }else{

                break ;
            }
        }

        depth ++ ;
    }
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

 function getLeafNode(property){

    let me = this,
        {
            isLeaf
        } = me ;

        if(isLeaf){

            return me ;
        }

        let node = me[property];

        while(!node.isLeaf){

            node = node[property] ;
        }

        return node ;
 }