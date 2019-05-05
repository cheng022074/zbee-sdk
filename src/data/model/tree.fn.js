
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

    appendChild(node){

        let me = this,
        {
            store
        } = me,
        insertNodes = store.insert(store.indexOf(me) + 1 , node) ;

        for(let insertNode of insertNodes){

            store.insert(store.indexOf(insertNode) + 1 , insertNode.descendantNodes) ;
        }

        console.log('添加节点') ;
    }

    insertBefore(node , existNode){

        console.log('插入节点') ;
    }

    removeChild(node){

        console.log('删除') ;
    }
 }