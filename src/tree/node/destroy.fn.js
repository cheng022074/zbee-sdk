
/**
 * 
 * 销毁节点
 *
 * 
 */

 let me = this,
 {
     parentNode,
     descendants
 } = me ;

descendants = descendants.reverse() ;

for(let descendant of descendants){

    descendant.destroy() ;
}

if(parentNode){

    parentNode.remove(me) ;
}

me.clearAllEventListeners() ;



 