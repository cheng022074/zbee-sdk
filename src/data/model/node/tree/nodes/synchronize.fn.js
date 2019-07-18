
/**
 * 
 * 同步
 * 
 * @param {array} [nodes = []] 同步的子节点
 * 
 */

let me = this ;

if(!me.synchronized){

    if(nodes.length === 0){

        me.set('leaf' , true) ;
    
    }else{

        me.suspendEvents() ;

        nodes = me.appendChild(nodes) ;

        me.resumeEvents() ;
    }

    me.fireEvent('synchronize' , nodes) ;
}