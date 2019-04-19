
/**
 * 
 * 销毁节点
 *
 * 
 */

 let me = this,
 {
     parentNode
 } = me ;

 if(parentNode){

    let {
        descendants
    } = me ;

    descendants = descendants.reverse() ;

    for(let descendant of descendants){

        descendant.destroy() ;
    }

    parentNode.remove(me) ;
 }



 