
/**
 * 
 * 树型数据模型
 * 
 * @import Model from data.model value
 * 
 * @param {mixed} data 数据
 * 
 * @class
 * 
 */

 class main extends Model{

    syncSize(width , height){

        this.setSize({
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
                name:'margin-bottom',
                persistent:true,
                defaultValue:0
            },{
                name:'margin-right',
                persistent:true,
                defaultValue:0
            }
        ];
    }

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

    get x(){

        return this.get('x') ;
    }

    get y(){

        return this.get('y') ;
    }

    getDepthNodes(depth){

        let depthNodes = [
                this
            ];

        for(let i = 0 ; i < depth ; i ++){

           let nodes = [] ;

           for(let {
            childNodes
           } of depthNodes){

                nodes.push(...childNodes) ;
           }

           depthNodes = nodes ;
        }

        return depthNodes ;
    }

    getFirstDepthNode(depth , isStrict = true){

        return getDepthNode.call(this , depth , isStrict , 'first') ;
    }

    getLastDepthNode(depth , isStrict = true){

        return getDepthNode.call(this , depth , isStrict , 'last') ;
    }

    getParentNode(depth , isStrict = true){

        return getDepthNode.call(this , depth , isStrict , 'parent') ;
    }

    get previousSiblingNode(){

        return getSiblingNode.call(this , 'previous') ;
    }

    get nextSiblingNode(){

        return getSiblingNode.call(this , 'next') ;
    }

    get expanded(){

        return this.get('expanded') ;
    }

    get parentNode(){

        let me = this,
        {
            store
        } = me ;

        return store.getById(me.get('parentId')) ;
    }

    get childNodes(){

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

    get isLeaf(){

        return this.childNodes.length === 0 ;
    }

    get firstLeafNode(){

        return getLeafNode.call(this , 'firstChildNode') ;
    }

    get lastLeafNode(){

        return getLeafNode.call(this , 'lastChildNode') ;
    }

    get firstChildNode(){

       return getChildNode('first') ;
    }

    get lastChildNode(){

        return getChildNode('last') ;
    }

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

    appendChild(node){

        let me = this,
        {
            store
        } = me ;

        store.insertNodes(store.indexOf(me.lastLeafNode || me) + 1 , node) ;
    }

    get selected(){

        return this.get('selected') ;
    }

    up(){

        let me = this,
        {
            previousSiblingNode
        } = me ;

        if(previousSiblingNode){

            previousSiblingNode.select() ;
        
        }else{

            let depth = 1,
                parentNode;

            while(parentNode = me.getParentNode(depth)){

                let {
                    previousSiblingNode
                } = parentNode ;

                if(previousSiblingNode){

                    previousSiblingNode.getLastDepthNode(depth , false).select() ;

                    break ;
                }

                depth ++ ;
            }
        }
    }

    down(){

        let me = this,
        {
            nextSiblingNode
        } = me ;

        if(nextSiblingNode){

            nextSiblingNode.select() ;
        
        }else{

            let depth = 1,
                parentNode;

            while(parentNode = me.getParentNode(depth)){

                let {
                    nextSiblingNode
                } = parentNode ;

                if(nextSiblingNode){

                    nextSiblingNode.getFirstDepthNode(depth , false).select() ;

                    break ;
                }

                depth ++ ;
            }
        }
    }

    left(){

        let {
            parentNode
        } = this ;

        if(parentNode){

            parentNode.select() ;
        }
    }

    right(){

        let me = this,
        {
            firstChildNode
        } = me ;

        if(firstChildNode){

            firstChildNode.select() ;
        
        }else{

            // 尝试寻找其它节点的子节点
        }
    }

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

    deselect(){

        this.set('selected' , false) ;
    }

    insertBefore(node , existNode){

       let {
         childNodes,
         store
       } = this ;

       if(childNodes.includes(existNode)){

            store.insert(store.indexOf(existNode) , node) ;
       }
    }

    removeChild(node){

        let {
             store
        } = this ;

        store.removeNodes(node) ;
        
    }

    expand(){

        let me = this,
        {
            expanded,
            childNodes,
            store
        } = me ;

        if(!expanded){

            store.insertNodes(store.indexOf(me) + 1 , childNodes) ;
        }
    }

    collapse(){

        let {
            expanded,
            childNodes,
            store
        } = this ;

        if(expanded){

            store.removeNodes(childNodes) ;
        }
    }

    layout(){


    }
 }

 function getDepthNode(depth , isStrict , property){

    let node = this ;

    for(let i = 0 ; i < depth ; i ++){

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

            if(isStrict){

                node = undefined ;
            }

            break ;
        }
    }

    return node ;
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

 function getChildNode(property){

    let {
        isLeaf,
        childNodes
    } = this ;

    if(!isLeaf){

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