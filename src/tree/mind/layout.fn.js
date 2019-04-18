
/**
 * 
 * 基于根节点进行布局
 * 
 */

let {
    rootNode,
    rootXY
} = this;

if(rootNode){

    let {
        x,
        y
    } = rootXY ;

    rootNode.x = x ;

    rootNode.y = y ;

    rootNode.layout() ;

}

