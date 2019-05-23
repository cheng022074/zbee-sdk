
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
            }
        ];
    }

    get nextSiblingNode(){

        let me = this,
        {
            parentNode
        } = me ;

        if(parentNode){

            let {
                childNodes
            } = parentNode ;

            childNodes[childNodes.indexOf(me) + 1] ;
        }
    }

    getFirstDepthNode(depth){

        return getDepthNode.call(this , depth , 'first') ;
    }

    getLastDepthNode(depth){

        return getDepthNode.call(this , depth , 'last') ;
    }

    getParentNode(depth){

        return getDepthNode.call(this , depth , 'parent') ;
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
 }

 function getDepthNode(depth , property){

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

            node = undefined ;

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