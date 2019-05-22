
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

    static get fieldConfigurations(){

        return [
            'id',
            'parentId'
        ];
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

    get descendantNodes(){

        let me = this,
        {
            childNodes
        } = this,
        result = [];

        for(let childNode of childNodes){

            result.push(childNode) ;

            result.push(...childNode.descendantNodes) ;
        }

        return result ;
    }

    get firstChildNode(){

        return this.childNodes.first() ;
    }

    get lastChildNode(){

        return this.childNodes.last() ;
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