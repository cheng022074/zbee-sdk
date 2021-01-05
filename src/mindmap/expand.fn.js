
/**
 * 
 * 展开节点
 * 
 * @import from from .node.from scoped
 * 
 * @import expand from .node.expand scoped
 * 
 * @param {mixed} node 脑图节点
 * 
 * @param {number} [level = 1] 展开层次
 * 
 * @param {boolean} [isLayout = true] 是否布局
 * 
 */

 function main(node , level , isLayout){

    node = from(node) ;

    let isExpand = doDeepExpand(node , 0 , level) ;

    if(isLayout && isExpand){

        this.layout() ;
    }
    
    return isExpand ;
 }

 function doDeepExpand(node , level , maxLevel){

    node.hidden = false ;

    level ++ ;

    if(level <= maxLevel){

        let isExpand = false ;

        if(expand(node)){

            isExpand = true ;
        }

        let {
            children
        } = node ;

        for(let childNode of children){

            if(doDeepExpand(childNode , level , maxLevel)){

                isExpand = true ;
            }
        }

        if(isExpand){

            return true ;
        }
    }

    return false ;
 }