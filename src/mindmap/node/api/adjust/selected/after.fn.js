/**
 * 
 * 重置选中节点
 * 
 * @import select from mindmap.node.select scoped
 * 
 * @import from from mindmap.node.from scoped
 * 
 * @param {object} options 节点配置
 * 
 */

function main(config){

    if(this.selectedNode){

        let {
            node,
            ancestorNodes,
            nextSiblingNodes,
            previousSiblingNodes
        } = config ;

        node = from(node) ;

        if(node && !node.hidden){

            node.selected = true ;

        }else{

            selectNode(previousSiblingNodes) ||
            selectNode(nextSiblingNodes) ||
            selectNode(ancestorNodes) ;

        }
    }
}

function selectNode(nodes){

    for(let node of nodes){

        node = from(node) ;

        if(node && !node.hidden){

            select(node) ;

            return true ;
        }
    }

    return false ;
}