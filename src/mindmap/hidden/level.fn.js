
/**
 * 
 * 设置脑图节点层次
 * 
 * @import getParentNode from ..node.parent scoped
 * 
 * @param {data.Record} node 节点
 * 
 * @param {boolean} hidden 决定节点是否隐藏，隐藏为 true , 显示为 false
 * 
 */

 if(hidden){

    node.level = -1 ;
 
 }else{

    let parentNode,
        noLevelNodes = [
            node
        ];

    while(parentNode = getParentNode(node)){

        let {
            level
        } = parentNode ;

        if(level === -1){

            noLevelNodes.unshift(parentNode) ;
        
        }else{

            for(let noLevelNode of noLevelNodes){

                noLevelNode.level = ++ level ;
            }

            noLevelNodes.length = 0 ;

            break ;
        }
    }

    if(noLevelNodes.length){

        let level = 0 ;

        for(let noLevelNode of noLevelNodes){

            noLevelNode.level = level ++ ;
        }
    }
 }