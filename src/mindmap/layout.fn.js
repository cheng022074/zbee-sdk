
/**
 * 
 * 初始化布局
 * 
 * @import getCenterXY from .node.xy.center scoped
 * 
 * @import getRightXY from .node.xy.right scoped
 * 
 * @import getScopeRegion from .node.region.scope scoped
 * 
 * @import moveY from .node.move.y
 * 
 *  @import moveX from .node.move.x
 * 
 * @import moveToY from .node.move.to.y
 * 
 * @import getRegion from .region scoped
 * 
 * @import fireDrawEvent from .fire.draw scoped
 * 
 * @import defer from function.defer
 * 
 * @import getRootNode from .node.root scoped
 * 
 * @import getParentNode from .node.parent scoped
 * 
 * @import getChildNodes from .nodes.child.visible scoped
 * 
 * @import isRootNode from .node.is.root scoped
 * 
 * @import getDeepestNode from .node.leaf.deepest scoped
 * 
 * @import getLevel from .node.level scoped
 * 
 * @import from from math.region.from
 * 
 * @import getData from .node.data scoped
 * 
 * @import getNodeSeparationDistance from .node.distance.separation scoped
 * 
 * @import getTop from .node.top scoped
 * 
 * @import getBottom from .node.bottom scoped
 * 
 * @param {boolean} [isFireDrawEvent = true] 是否派发绘制事件
 * 
 */

function main(isFireDrawEvent){

    let me = this,
    {
        height:mindmapHeight,
        visibilityNodes,
        nodeHorizontalSeparationDistance
    } = me,
    rootNode = getRootNode();

    rootNode.x = 0 ;

    delete me.region ;

    layout.call(me , rootNode) ;

    if(nodeHorizontalSeparationDistance === 0){
        
        let {
                padding,
                width
            } = me,
            {
                width:nodeWidth
            } = rootNode,
            regionWidth = (width - padding * 2 - nodeWidth) / (getLevel(getDeepestNode(rootNode)) - 1);
            
        visibilityNodes.forEach(node => {

            if(!isRootNode(node)){

                let {
                    right:parentNodeRight
                } = from(getParentNode(node)),
                {
                    right:nodeRight
                } = from(node);

                let distance = regionWidth - (nodeRight - parentNodeRight - node.width),
                {
                    maxNodeHorizontalSeparationDistance,
                    minNodeHorizontalSeparationDistance
                } = me;

                if(distance < minNodeHorizontalSeparationDistance){

                    distance = minNodeHorizontalSeparationDistance ;

                }else if(distance > maxNodeHorizontalSeparationDistance){

                    distance = maxNodeHorizontalSeparationDistance;
                }

                moveX(node , distance) ;
                
            }

        }) ;
    }

    let {
        top,
        height
    } = getRegion() ;

    if(mindmapHeight === height){

        let {
            height:rootNodeHeight
        } = rootNode ;

        moveToY(rootNode , height / 2 - rootNodeHeight / 2) ;

    }else{

        moveY(rootNode , -top) ;
    }

    defer(() => visibilityNodes.resort()) ;

    if(isFireDrawEvent){

        fireDrawEvent() ;
    }
}

function layout(node){

    let {
        expanded,
        children
    } = node,
    me = this,
    {
        nodeHorizontalSeparationDistance
    } = me,
    {
        length
    } = children;

    if(expanded && length){
        
        let {
            y,
            height
        } = node,
        {
            x:rightX
        } = getRightXY(node),
        childX = rightX + nodeHorizontalSeparationDistance,
        childY = y;

        for(let i = 0 ; i < length ; i ++){

            let childNode = children[i],
                dataChildNode = getData(childNode);

            childNode.x = childX ;

            childNode.y = childY ;

            layout.call(me , childNode) ;

            let {
                height:scopeRegionHeight
            } = getScopeRegion(childNode) ;

            childY += scopeRegionHeight;

            let bottomSeparationDistance = getNodeSeparationDistance('bottom' , dataChildNode , i , length) ;

            if(bottomSeparationDistance){

                childY += bottomSeparationDistance ;
            }

        }

        let {
            height:scopeRegionHeight
        } = getScopeRegion(node) ;

        if(scopeRegionHeight > height){

            node.y += scopeRegionHeight / 2  - height / 2 - 5;
        
        }else{

            console.log('没有布局' , getParentNode(node).text);
        }
    }

}
 