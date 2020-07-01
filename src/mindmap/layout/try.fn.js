
/**
 * 
 * 尝试布局
 * 
 * @import add from event.listener.add
 * 
 * @import layout from ..layout scoped
 * 
 * @param {boolean} [isFireDrawEvent = true] 是否派发绘制事件
 * 
 */

let me = this,
{
    unsizedNodes
} = me ;

if(unsizedNodes.size){

    return new Promise(callback =>   add(me , 'nodesized' , () => {

        layout(isFireDrawEvent) ;

        callback() ;

    } , {
        once:true
    })) ;

}

layout() ;
