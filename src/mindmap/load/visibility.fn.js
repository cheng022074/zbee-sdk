
/**
 * 
 * 初始化显示节点
 * 
 */

 function main(){

    let me = this,
    {
        rootNode,
        initVisibilityLevel
    } = me ;

    initVisibilityNode.call(me , rootNode , 1 , initVisibilityLevel) ;
 }

 function initVisibilityNode(node , level , maxLevel){

    node.hidden = false ;

    level ++ ;

    if(level <= maxLevel){
        
        node.expanded = true ;

        let {
            children
        } = node ;

        for(let childNode of children){

            initVisibilityNode(childNode , level , maxLevel) ;
        }
    }
    
 }