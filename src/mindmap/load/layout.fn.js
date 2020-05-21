
/**
 * 
 * 初始化布局
 * 
 * @import getCenterXY from ..node.xy.center scoped
 * 
 * @import getRightXY from ..node.xy.right scoped
 * 
 * @import getTopRightXY from ..node.xy.topright scoped
 * 
 * @import getBottomRightXY from ..node.xy.bottomright scoped
 * 
 * @import getScopeRegion from ..node.region.scope scoped
 * 
 * @import moveY from ..node.move.y
 * 
 * @import move from ..node.move
 * 
 * @import nodes from ..nodes
 * 
 * @import getSize from ..size scoped
 * 
 * @import resize from ..resize scoped
 * 
 * @return {mixed} 返回说明 
 * 
 */

function main(){

    let me = this,
    {
        rootNode,
        visibilityNodes,
        padding,
        region,
        width,
        height
    } = me,
    {
        height:rootNodeHeight
    } = rootNode,
    maxTopRightXY = {
        x:0,
        y:0
    },
    maxBottomRightXY = {
        x:0,
        y:0
    };

    layout.call(me , rootNode , maxTopRightXY , maxBottomRightXY) ;

    region.right = maxTopRightXY.x ;
    
    region.bottom = maxBottomRightXY.y - maxTopRightXY.y;

    let size = getSize() ;

    move(rootNode , {
        x:padding,
        y:size.height / 2 - rootNodeHeight / 2 + padding
    }) ;

    me.fireEvent('draw' , nodes(visibilityNodes.values()) , size) ;
}

function layout(node , maxTopRightXY , maxBottomRightXY){

    let {
        x:maxTopRightX,
        y:maxTopRightY
    } = maxTopRightXY,
    {
        x:maxBottomRightX,
        y:maxBottomRightY
    } = maxBottomRightXY,
    {
        x:topRightX,
        y:topRightY
    } = getTopRightXY(node),
    {
        x:bottomRightX,
        y:bottomRightY
    } = getBottomRightXY(node);

    if(maxTopRightX < topRightX){

        maxTopRightXY.x = topRightX ;
    }

    if(maxTopRightY > topRightY){

        maxTopRightXY.y = topRightY ;
    }

    if(maxBottomRightX < bottomRightX){

        maxBottomRightXY.x = bottomRightX ;
    }

    if(maxBottomRightY < bottomRightY){

        maxBottomRightXY.y = bottomRightY ;
    }

    let {
        expanded
    } = node,
    me = this,
    {
        nodeVerticalSeparationDistance,
        nodeHorizontalSeparationDistance
    } = me;

    if(expanded){

        let {
            children
        } = node,
        childCountHeight = 0;

        for(let {
            height
        } of children){

            childCountHeight += height ;
        }

        childCountHeight += nodeVerticalSeparationDistance * (children.length - 1) ;

        let {
            y:centerY
        } = getCenterXY(node),
        {
            x:rightX
        } = getRightXY(node),
        childX = rightX + nodeHorizontalSeparationDistance,
        childY = centerY - childCountHeight / 2,
        previousChildNodes = [];

        for(let childNode of children){

            let {
                height
            } = childNode ;

            childNode.x = childX ;

            childNode.y = childY ;

            layout.call(me , childNode , maxTopRightXY , maxBottomRightXY) ;

            let {
                y:scopeRegionY,
                height:scopeRegionHeight
            } = getScopeRegion(childNode) ;

            if(height === scopeRegionHeight){

                childY += height + nodeVerticalSeparationDistance;
            
            }else{

                moveY(previousChildNodes , scopeRegionY - childY) ;

                childY = scopeRegionY + scopeRegionHeight + nodeVerticalSeparationDistance ;
            }

            previousChildNodes.push(childNode) ;
        }
    }

}
 