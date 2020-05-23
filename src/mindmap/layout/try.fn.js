
/**
 * 
 * 尝试布局
 * 
 * @import add from event.listener.add
 * 
 * @import layout from ..layout scoped
 * 
 */

let me = this,
{
    unsizedNodes
} = me ;

if(unsizedNodes.size){

    return new Promise(callback =>   add(me , 'nodesized' , () => {

        layout() ;

        callback() ;

    } , {
        once:true
    })) ;

}

layout() ;
