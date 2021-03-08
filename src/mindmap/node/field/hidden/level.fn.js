
/**
 * 
 * 设置脑图节点层次
 * 
 * @import getParentNode from ....parent scoped
 * 
 * @param {data.Record} node 节点
 * 
 * @param {boolean} hidden 决定节点是否隐藏，隐藏为 true , 显示为 false
 * 
 */

 if(hidden){

    node.level = -1 ;
 
 }else{

    if(node.levelRoot){

        node.level = 0 ;

        return ;
    }

    let parentNode,
        noLevelNodes = [
            node
        ],
        startLevel = 0;

    while(parentNode = getParentNode(node)){

        let {
            level,
            levelRoot
        } = parentNode ;

        if(level === -1){

            noLevelNodes.unshift(parentNode) ;
        
        }else{

            startLevel = level + 1 ;

            break ;
        }

        if(levelRoot === true){

            break ;
        }
    }

    if(noLevelNodes.length){

        for(let noLevelNode of noLevelNodes){

            noLevelNode.level = startLevel ++ ;
        }
    }
 }