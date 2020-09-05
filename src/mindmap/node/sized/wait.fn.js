
/**
 * 
 * 等待所有节点都获取了尺寸
 * 
 * @import add from event.listener.add
 * 
 * @import wait from .wait scoped
 * 
 */

let me = this,
{
    unsizedNodes
} = me ;

if(unsizedNodes.size){

    return new Promise(callback =>   add(me , 'nodesized' , async () => callback(true) , {
        once:true
    })) ;

}

return false ;
