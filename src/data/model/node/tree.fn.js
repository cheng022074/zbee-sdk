
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

        if(store){

            store.insertNodes(store.indexOf(me.lastLeafNode || me) + 1 , node) ;
        }
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

        if(selected){

            store.each(node => node.deselect()) ;

            me.set('selected' , true) ;
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

       if(store && childNodes.includes(existNode)){

            store.insert(store.indexOf(existNode) , node) ;
       }
    }

    removeChild(node){

        let {
             store
        } = this ;

        if(store){

            store.removeNodes(node) ;
        }
    }

    expand(){

        let me = this,
        {
            expanded,
            childNodes,
            store
        } = me ;

        if(store && !expanded){

            store.insertNodes(store.indexOf(me) + 1 , childNodes) ;
        }
    }

    collapse(){

        let {
            expanded,
            childNodes,
            store
        } = this ;

        if(store && expanded){

            store.removeNodes(childNodes) ;
        }
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