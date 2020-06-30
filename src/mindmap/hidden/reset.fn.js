
/**
 * 
 * 重置节点
 * 
 * @import reset from .reset scoped
 * 
 * @import getParentNode from ..node.parent scoped
 * 
 * @param {data.Record} node 节点
 * 
 * @param {string} direction 重置方向
 * 
 */

if(node){

    switch(direction){

        case 'up':

            delete node.descendantNodes ;

            delete node.leafNodes ;

            delete node.relationNodes ;

            delete node.firstChildNodes ;

            delete node.lastChildNodes ;

            reset(getParentNode(node) , 'up') ;

            break ;

        case 'down':

            delete node.ancestorNodes ;

            if(node.expanded){

                let {
                    children
                } = node ;

                for(let childNode of children){

                    reset(childNode , 'down') ;
                }
            }

            break ;

        default:

            reset(node , 'up') ;

            reset(node , 'down') ;
    }
}

