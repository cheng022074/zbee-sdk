
/**
 * 
 * 初始化布局
 * 
 * @import getCenterXY from ..node.xy.center scoped
 * 
 * @import getRightXY from ..node.xy.right scoped
 * 
 * @import getScopeRegion from ..node.region.scope scoped
 * 
 * @import moveY from ..node.move.y scoped
 * 
 * @import clone from array.clone
 * 
 * @return {mixed} 返回说明 
 * 
 */

function main(){

    let me = this,
    {
        rootNode,
        visibilityNodes
    } = me ;

    layout.call(me , rootNode) ;

    me.fireEvent('draw' , clone(visibilityNodes.values())) ;
}

function layout(node){

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

        let {
            y:centerY
        } = getCenterXY(node),
        {
            x:rightX
        } = getRightXY(node),
        childX = rightX + nodeHorizontalSeparationDistance,
        childY = centerY + childCountHeight / 2,
        previousChildNodes = [];

        for(let childNode of children){

            let {
                height
            } = childNode ;

            childNode.x = childX ;

            childNode.y = childY ;

            layout.call(me , childNode) ;

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
 