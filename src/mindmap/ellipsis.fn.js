
/**
 * 
 * 设置节点忽略状态
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @param {boolean} ellipsis 忽略状态
 * 
 * @return {boolean} 忽略状态 
 * 
 */

 let me = this ;

 if(ellipsis){

    let {
        ellipsisRootNode
    } = me ;

    if(ellipsisRootNode){

        ellipsisRootNode.ellipsis = false ;
    }

    me.ellipsisRootNode = node ;

 }else{

    delete me.ellipsisRootNode ;
 }

 return ellipsis ;