
/**
 * 
 * 初始化显示节点
 * 
 */

 function main(){

    let me = this,
    {
        rootNode,
        initDisplayLevel
    } = me ;

    initDisplayNode.call(me , rootNode , 1 , initDisplayLevel) ;
 }

 function initDisplayNode(node , level , maxLevel){

    node.hidden = true ;

    level ++ ;

    if(level <= maxLevel){

        let {
            children
        } = node ;

        for(let childNode of children){

            initDisplayNode(childNode , level , maxLevel) ;
        }
    }
    
 }