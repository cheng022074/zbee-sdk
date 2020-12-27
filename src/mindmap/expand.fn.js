
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

    doDeepExpand(node , 0 , level) ;

    if(isLayout){

        this.layout() ;
    }    
 }

 function doDeepExpand(node , level , maxLevel){

    node.hidden = false ;

    level ++ ;

    if(level <= maxLevel){

        let {
            children
        } = node ;

        if(children.length){

            expand(node) ;

            for(let childNode of children){

                doDeepExpand(childNode , level , maxLevel) ;
            }
        }
    }
 }