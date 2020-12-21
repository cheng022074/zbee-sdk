
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
        } = children ;

        for(let i = 0 ; i < length ; i ++){

            let childNode = children[i] ;

            if(!isLeafNode(childNode)){

                readjust.call(me , childNode) ;

                let {
                    width
                } = childNode,
                {
                    y:scopeRegionY,
                    height:scopeRegionHeight
                } = getScopeRegion(childNode) ;

                {
                    let position = i,
                        startMoveToY = childNode.y ;

                    while(position --){

                        let previousNode = children[position],
                            previousNodeWidth,
                            previousNodeHeight,
                            previousOffset;

                        if(!isLeafNode(previousNode)){

                            let region = getScopeRegion(previousNode) ;

                            previousNodeWidth = region.width ;

                            previousNodeHeight = region.height ;

                            previousOffset = previousNode.y - region.y ;
                        
                        }else{

                            previousNodeWidth = previousNode.width ;

                            previousNodeHeight = previousNode.height ;

                            previousOffset = 0 ;
                        }

                        let y = startMoveToY - nodeVerticalSeparationDistance ;

                        if(y >= scopeRegionY && width < previousNodeWidth){

                            startMoveToY = scopeRegionY - nodeVerticalSeparationDistance - previousNodeHeight;

                        }else{

                            startMoveToY = y - previousNodeHeight;
                        }

                        moveToY(previousNode , startMoveToY + previousOffset) ;
                    }
                }

                {
                    let position = i,
                        startMoveToY = childNode.y + childNode.height;

                    while(++ position < length){

                        let nextNode = children[position],
                            nextNodeWidth,
                            nextNodeHeight,
                            nextOffset;

                        if(!isLeafNode(nextNode)){

                            let region = getScopeRegion(nextNode) ;

                            nextNodeWidth = region.width ;

                            nextNodeHeight = region.height ;

                            nextOffset = nextNode.y - region.y ;
                        
                        }else{

                            nextNodeWidth = nextNode.width ;

                            nextNodeHeight = nextNode.height ;

                            nextOffset = 0 ;
                        }

                        let scopeRegionBottom = scopeRegionY + scopeRegionHeight,
                            y = startMoveToY + nodeVerticalSeparationDistance ;

                        if(y <= scopeRegionBottom && width < nextNodeWidth){

                            startMoveToY = scopeRegionBottom + nodeVerticalSeparationDistance ;

                        }else{

                            startMoveToY = y;
                        }

                        moveToY(nextNode , startMoveToY + nextOffset) ;

                        startMoveToY += nextNodeHeight ;
                    }
                }
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
 