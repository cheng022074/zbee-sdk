
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
        ellipsisNodeWidth,
        ellipsisNodeHeight,
        ellipsisRootNode
    } = me ;

    if(ellipsisRootNode){

        ellipsisRootNode.ellipsis = false ;
    }

    node.beforeEllipsisWidth = node.width ;

    node.beforeEllipsisHeight = node.height ;

    node.width = ellipsisNodeWidth ;

    node.height = ellipsisNodeHeight ;

    me.ellipsisRootNode = node ;

 }else{

    delete me.ellipsisRootNode ;

    node.width = node.beforeEllipsisWidth ;

    node.height = node.beforeEllipsisHeight ;
 }

 return ellipsis ;