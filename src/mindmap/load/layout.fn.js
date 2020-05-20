
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
 * @import getScopeRegion from ..node.region.scope scoped
 * 
 * @import moveY from ..node.move.y
 * 
 * @import move from ..node.move
 * 
 * @import nodes from ..nodes
 * 
 * @return {mixed} 返回说明 
 * 
 */

function main(){

    let me = this,
    {
        rootNode,
        visibilityNodes
    } = me,
    mindmapTopRightXY = {
        x:0,
        y:0
    };

    layout.call(me , rootNode , mindmapTopRightXY) ;

    moveY(rootNode , -mindmapTopRightXY.y) ;

    move(rootNode , {
        x:15,
        y:15
    }) ;

    me.fireEvent('draw' , nodes(visibilityNodes.values())) ;
}

function layout(node , mindmapTopRightXY){

    let {
        x:mindmapTopRightX,
        y:mindmapTopRightY
    } = mindmapTopRightXY,
    {
        x:topRightX,
        y:topRightY
    } = getTopRightXY(node);

    if(mindmapTopRightX < topRightX){

        mindmapTopRightXY.x = topRightX ;
    }

    if(mindmapTopRightY > topRightY){

        mindmapTopRightXY.y = topRightY ;
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

            layout.call(me , childNode , mindmapTopRightXY) ;

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
 