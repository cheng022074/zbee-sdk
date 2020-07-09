
/**
 * 
 * 初始化显示节点
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @param {Number} visibilityLevel 显示层次
 * 
 */

 function main(node , visibilityLevel){

    let me = this,
    {
        rootNode,
        initVisibilityLevel
    } = me ;

    initVisibilityNode.call(me , node || rootNode , 1 , visibilityLevel || initVisibilityLevel) ;
 }

 function initVisibilityNode(node , level , maxLevel){

    node.hidden = false ;

    level ++ ;

    if(level <= maxLevel){

        let {
            children
        } = node ;

        if(children.length){

            node.expanded = true ;

            for(let childNode of children){

                initVisibilityNode(childNode , level , maxLevel) ;
            }
        }
        
        
    }
    
 }