
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

    readjust.call(me , rootNode) ;

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

function isLeafNode({
    expanded,
    children
}){

    return !expanded || children.length === 0 ;
}

function readjust(node){

    let {
        expanded,
        children
    } = node,
    me = this,
    {
        nodeVerticalSeparationDistance
    } = me;

    if(expanded){

        let {
            length
        } = children,
        nodeWidth = 0,
        regionBottom = 0,
        nodeBottom = 0,
        isLeaf = false;

        for(let i = 0 ; i < length ; i ++){

            let childNode = children[i] ;

            readjust.call(me , childNode) ;

            if(i === 0){

                let {
                    y,
                    height
                } = getScopeRegion(childNode) ;

                regionBottom = y + height ;

                nodeWidth = childNode.width ;

                nodeBottom = childNode.y + childNode.height ;

                isLeaf = isLeafNode(childNode) ;
            
            }else if(isLeafNode(childNode)){

                if(childNode.width <= nodeWidth){

                    moveToY(childNode , nodeBottom +　nodeVerticalSeparationDistance) ;
                
                }else{

                    moveToY(childNode , regionBottom + nodeVerticalSeparationDistance);
                }

                nodeWidth = childNode.width ;

                nodeBottom = childNode.y + childNode.height ;

                if(regionBottom < nodeBottom){

                    regionBottom = nodeBottom ;
                }

                isLeaf = true ;
            
            }else{

                let region = getScopeRegion(childNode),
                    offset = childNode.y - region.y,
                    regionHeight = region.height;

                if(region.width <= nodeWidth){

                    moveToY(childNode , nodeBottom +　nodeVerticalSeparationDistance + offset) ;
                
                }else if(childNode.width >= nodeWidth &&　isLeaf){

                    let position = i - 1,
                        moveToYValue,
                        minMoveToYValue = nodeBottom +　nodeVerticalSeparationDistance,
                        width = childNode.width;

                    while(position --){

                        moveToYValue = 0 ;

                        let previousNode = children[position],
                            previousWidth;

                        if(isLeafNode(previousNode)){

                            moveToYValue = previousNode.y + previousNode.height ;

                            previousWidth = previousNode.width ;

                        }else{

                            let {
                                y,
                                width,
                                height
                            } = getScopeRegion(previousNode) ;

                            moveToYValue = y + height ;

                            previousWidth = width ;
                        }

                        moveToYValue += nodeVerticalSeparationDistance + offset ;

                        if(moveToYValue < minMoveToYValue){

                            moveToYValue = minMoveToYValue ;

                            break ;
                        }

                        if(width < previousWidth){

                            break ;
                        }

                    }
                    
                    moveToY(childNode , moveToYValue) ;

                }else{

                    moveToY(childNode , regionBottom + nodeVerticalSeparationDistance + offset);
                }

                nodeWidth = childNode.width ;

                let currentRegionBottom = childNode.y - offset + regionHeight ;

                nodeBottom = childNode.y + childNode.height ;

                if(regionBottom < currentRegionBottom){

                    regionBottom = currentRegionBottom ;
                }

                isLeaf = false ;
            }
        }
    }
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

        let children = getChildNodes(node),
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

            layout.call(me , childNode) ;

            let {
                y:scopeRegionY,
                height:scopeRegionHeight
            } = getScopeRegion(childNode) ;

            if(height === scopeRegionHeight){

                childY += height + nodeVerticalSeparationDistance;
            
            }else{

                moveY(previousChildNodes , scopeRegionY - childY) ;

                childY = scopeRegionY + scopeRegionHeight + nodeVerticalSeparationDistance;
            }

            previousChildNodes.push(childNode) ;
        }
    }

}
 