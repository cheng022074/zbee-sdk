
/**
 * 
 * 省略指定节点的父节点
 * 
 * @import getParentNode from .parent scoped
 * 
 * @import next from ..nodes.sibling.next scoped
 * 
 * @import previous from ..nodes.sibling.previous scoped
 * 
 * @param {data.Record} node  脑图节点
 * 
 */

 function main(node , useEllipsis = true){
    
    let parentNode = getParentNode(node),
        me = this,
        {
            ellipsisNodes
        } = me;

    if(parentNode){

        hide.call(me , previous(node)) ;

        hide.call(me , next(node)) ;

        main.call(me , parentNode , false) ;
        
        if(useEllipsis){

            parentNode.ellipsis = true ;
        
        }else{

            parentNode.hidden = true ;

            ellipsisNodes.push(parentNode) ;
        }
    }
 }

 function hide(nodes){

    let me = this ;

    for(let node of nodes){

        downHide.call(me , node) ;
    }
 }

 function downHide(node){

    let me = this,
    {
        ellipsisNodes
    } = me ;

    node.hidden = true ;

    ellipsisNodes.push(node) ;

    if(node.expanded){

        let {
            children
        } = node ;

        for(let childNode of children){

            downHide.call(me , childNode) ;
        }
    }
 }