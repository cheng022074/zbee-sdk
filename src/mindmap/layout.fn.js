
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
    me = this;

    if(expanded){

        let previousReadjustNodes = [] ;

        for(let childNode of children){

            readjust.call(me , childNode) ;

            moveToY(node , getReadjustNodeY.call(me , previousReadjustNodes , node)) ;

            previousReadjustNodes.unshift(getReadjustNode.call(me , node)) ;
        }
    }
}

function getReadjustNode(node){


}

function getReadjustNodeY(previousReadjustNodes , node){

    let me = this ;

    if(isLeafNode(node)){

        return getReadjustLeafNodeY.call(me , previousReadjustNodes , node) ;
    }

    return getReadjustNonLeafNodeY.call(me , previousReadjustNodes , node) ;
}

function getReadjustLeafNodeY(previousReadjustNodes , node){

    let {
        y,
        width
    } = node,
    {
        nodeVerticalSeparationDistance
    } = this;

    if(previousReadjustNodes.length){

        let {
            width:previousNodeWidth,
            bottom:previousNodeBottom,
            regionBottom:previousNodeRegionBottom,
            leaf
        } = previousReadjustNodes[0] ;

        if(leaf || width <= previousNodeWidth){

            return previousNodeBottom + nodeVerticalSeparationDistance ;
        
        }

        return previousNodeRegionBottom + nodeVerticalSeparationDistance ;
    }

    return y ;
}

function getReadjustNonLeafNodeY(previousReadjustNodes , node){

    let {
        y,
        width
    } = node,
    {
        y:regionY,
        width:regionWidth
    } = getScopeRegion(node),
    offset = y - regionY,
    me = this,
    {
        nodeVerticalSeparationDistance
    } = me;

    if(previousReadjustNodes.length){

        let {
            width:previousNodeWidth,
            bottom:previousNodeBottom,
            regionBottom:previousNodeRegionBottom,
            leaf
        } = previousReadjustNodes[0] ;

        if(leaf){

            if(previousNodeWidth <= width){

                return Math.max(previousNodeBottom + nodeVerticalSeparationDistance , getReadjustNonLeafNearestBottom.call(me , previousReadjustNodes , width , regionWidth , offset)) ;
            
            }

            return previousNodeBottom + nodeVerticalSeparationDistance + offset ;
        }

        if(regionWidth <= previousNodeWidth){

            return previousNodeBottom + nodeVerticalSeparationDistance + offset ;
        }

        return previousNodeRegionBottom + nodeVerticalSeparationDistance + offset ;
    }

    return y ;
}

function getReadjustNonLeafNearestBottom(previousReadjustNodes , width , regionWidth , offset){

    let {
        nodeVerticalSeparationDistance
    } = this ;

    for(let {
        width:previousNodeWidth,
        bottom:previousNodeBottom,
        regionWidth:previousNodeRegionWidth,
        regionBottom:previousNodeRegionBottom,
        leaf
    } of previousReadjustNodes){

        if(leaf){

            if(previousNodeWidth > width){

                return previousNodeBottom +　nodeVerticalSeparationDistance + offset;
            }
        
        }else{

            if(previousNodeWidth > width){

                return previousNodeBottom +　nodeVerticalSeparationDistance ;
            
            }else if(previousNodeRegionWidth <= width){

                return previousNodeRegionBottom + nodeVerticalSeparationDistance + offset;
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
 