
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
            },
            'width',
            'height'
        ];
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
        } = me,
        insertNodes = store.insert(store.indexOf(me.lastChildNode || me) + 1 , node) ;

        for(let insertNode of insertNodes){

            store.insert(store.indexOf(insertNode) + 1 , insertNode.descendantNodes) ;
        }
    }

    insertBefore(node , existNode){

       let me = this,
       {
            store
       } = me,
       index = store.indexOf(existNode);

       if(index !== -1){

            let insertNodes = store.insert(index , node) ;

            for(let insertNode of insertNodes){

                store.insert(store.indexOf(insertNode) + 1 , insertNode.descendantNodes) ;
            }
       }
    }

    removeChild(node){

        let me = this,
        {
             store
        } = me,
        removeNodes = store.remove(node) ;

        for(let removeNode of removeNodes){

            store.remove(removeNode.descendantNodes) ;
        }

        me.fireEvent('removechild' , removeNodes) ;
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