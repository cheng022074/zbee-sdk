
/**
 * 
 * 深度展开节点
 * 
 * @import from from ..from scoped
 * 
 * @import expand from ..expand scoped
 * 
 * @param {mixed} node 脑图节点
 * 
 * @param {number} [level = 1] 展开层次
 * 
 * @return {boolean} 如果有展开动作则返回 true , 否则返回 false
 * 
 */

function main(node , level){

    return doDeepExpand(from(node) , 0 , level) ;
}

async function doDeepExpand(node , level , maxLevel){

    node.hidden = false ;

    level ++ ;

    if(level <= maxLevel){

        let isExpand = false ;

        if(await expand(node)){

            isExpand = true ;
        }

        let {
            children
        } = node ;

        for(let childNode of children){

            if(await doDeepExpand(childNode , level , maxLevel)){

                isExpand = true ;
            }
        }

        if(isExpand){

            return true ;
        }
    }

    return false ;
}