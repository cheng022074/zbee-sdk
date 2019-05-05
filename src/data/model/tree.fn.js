
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

    get descendantNodes(){

        return [] ;
    }

    get firstChildNode(){

        return this.childNodes.first() ;
    }

    get lastChildNode(){

        return this.childNodes.last() ;
    }

    get childNodes(){

        return this.get('childNodes') ;
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

        console.log('删除') ;
    }
 }