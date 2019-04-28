
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
        layoutConfig,
        list
    } = me,
    {
        line:{
            offset:lineOffset = 5,
            startX:lineStartX = 0,
            startY:lineStartY = 0
        }
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
            lines:get_lines(list.nodes , {
                left,
                top,
                lineOffset,
                lineStartX,
                lineStartY
            })
        }) ;
    }
}

function get_lines(nodes , {
    left,
    top,
    lineOffset,
    lineStartX,
    lineStartY
}){

    let lines = [] ;

    for(let node of nodes){

        let {
            parentNode
        } = node ;

        if(!parentNode){

            continue ;
        }

        let {
            nodeRegion
        } = parentNode,
        {
            x:startX,
            y:startY
        } = nodeRegion.getAnchorXY('r');
    
        startX += left + lineStartX;
    
        startY += top + lineStartY;
    
        {
            let {
                nodeRegion
            } = node,{
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
        }
        
    }

    return lines ;
}

