
/**
 * 
 * 基于根节点进行布局
 * 
 */

function main(){

    let me = this,
    {
        rootNode,
        rootXY,
        layoutConfig
    } = me,
    {
        lineOffset = 5
    } = layoutConfig;

    if(rootNode){

        let {
            x,
            y
        } = rootXY ;

        rootNode.x = x ;

        rootNode.y = y ;

        rootNode.layout() ;

        let {
            proxy,
            data
        } = me,
        {
            firstLeaf,
            lastLeaf,
            deepestLeaf
        } = rootNode;

        if(!firstLeaf){

            firstLeaf = rootNode ;
        }

        if(!lastLeaf){

            lastLeaf = rootNode ;
        }

        if(!deepestLeaf){

            deepestLeaf = rootNode ;
        }

        let top = firstLeaf.y ;

        if(top > 0){

            top = 0 ;
        
        }else{

            top = - top ;
        }

        let left = rootNode.x ;

        if(left > 0){

            left = 0 ;
        
        }else{

            left = -left ;
        }

        proxy.call('layout' , data , {
            left,
            right:deepestLeaf.x + deepestLeaf.width,
            top,
            bottom:lastLeaf.y + lastLeaf.height,
            lines:get_lines(rootNode , {
                left,
                top,
                lineOffset
            })
        }) ;
    }
}

function get_lines(node , params){

    let {
        left,
        top,
        lineOffset
    } = params ;

    let lines = [] ;

    let {
        nodeRegion,
        children
    } = node,
    {
        x:startX,
        y:startY
    } = nodeRegion.getAnchorXY('r');

    startX += left ;

    startY += top ;

    for(let child of children){

        let {
            isLeaf,
            nodeRegion
        } = child,{
            x,
            y
        } = nodeRegion.getAnchorXY('l') ;

        x += left ;

        y += top ;

        lines.push([
            startX,
            startY,
            startX + lineOffset,
            startY,
            x - lineOffset,
            y,
            x,
            y
        ]) ;

        if(!isLeaf){

            lines.push(...get_lines(child , params)) ;
        }
    }

    return lines ;
}

