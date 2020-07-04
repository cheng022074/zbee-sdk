
/**
 * 
 * 可视化节点集合
 * 
 * @import getCenterXY from math.region.xy.center
 * 
 * @import getRightXY from math.region.xy.right
 * 
 * @import getDistance from math.point.distance
 * 
 * @import getRelationNodes from .relation scoped
 * 
 * @import getRegion from ..node.region.scope scoped
 * 
 * @import from from math.region.from
 * 
 * @import getOutOfBoundOffsetY from math.region.bound.out.y
 * 
 * @import is from ..node.is.normal
 * 
 * @import is.defined
 * 
 */


 class main extends Map{

    constructor(){

        super() ;

        let me = this ;
        
        me.sortedXNodeIndexes = new Map() ;

        me.sortedYNodeIndexes = new Map() ;
    }

    resort(){

        let me = this,
        nodes = me.nodes = Array.from(me.values()).map(node => {

            let region = from(node) ;

            return {
                xy:getCenterXY(region),
                rightXY:getRightXY(region),
                node
            } ;

        }),
        {
            sortedXNodeIndexes,
            sortedYNodeIndexes
        } = me;

        sortedXNodeIndexes.clear() ;

        sortedYNodeIndexes.clear() ;

        me.sortedXNodes = nodes.sort(({
            xy:startXY
        } , {
            xy:endXY
        }) => startXY.x - endXY.x).map(({
            xy,
            node
        } , index) => {

            sortedXNodeIndexes.set(node , index) ;

            return {
                value:xy.x,
                xy,
                node
            } ;
        }) ;

        me.sortedYNodes = nodes.sort(({
            xy:startXY
        } , {
            xy:endXY
        }) => startXY.y - endXY.y).map(({
            xy,
            node
        } , index) => {

            sortedYNodeIndexes.set(node , index) ;

            return {
                value:xy.y,
                xy,
                node
            } ;
        }) ;
    }

    getNearestParentNode(xy){

        let {
            nodes
        } = this;

        for(let {
            node
        } of nodes){

            if(!is(node)){

                continue ;
            }

            let parentNode = getNearestParentNode(node , xy) ;

            if(parentNode){

                return parentNode ;
            }
        }
    }

    getNearestNode(node , direction){

        let {
            sortedYNodes,
            sortedYNodeIndexes,
            sortedXNodes,
            sortedXNodeIndexes
        } = this,
        xy,
        nodes;

        if(!sortedYNodeIndexes.has(node)){

            return ;
        }

        switch(direction){

            case 'right':

                {
                    let index = sortedXNodeIndexes.get(node),
                        info = sortedXNodes[index];
                        
                    xy = info.xy ;

                    nodes = getNearestNodes(sortedXNodes.slice(index + 1) , info.value , getRelationNodes(node)) ;

                    break ;
                }

            case 'up':

                {
                    let index = sortedYNodeIndexes.get(node),
                        info = sortedYNodes[index];
                        
                    xy = info.xy ;

                    nodes = getNearestNodes(sortedYNodes.slice(0 , index).reverse() , info.value , getRelationNodes(node)) ;


                    break ;
                }

            case 'down':

                {
                    let index = sortedYNodeIndexes.get(node),
                        info = sortedYNodes[index];
                        
                    xy = info.xy ;

                    nodes = getNearestNodes(sortedYNodes.slice(index + 1) , info.value , getRelationNodes(node)) ;

                }
        }

        let {
            length
        } = nodes ;

        if(length){

            if(length === 1){

                return nodes[0].node ;
            }

            let nearestNode,
                minDistance = Infinity;

            for(let {
                xy:nodeXY,
                node
            } of nodes){

                let distance =  getDistance(xy , nodeXY) ;

                if(minDistance > distance){

                    minDistance = distance ;

                    nearestNode = node ;
                }
            }

            return nearestNode ;
        }
    }
 }

 function getNearestParentNode(node , xy){

    let {
        x,
        y
    } = xy,
    {
        right
    } = from(node);

    if(!(x >= right)){

        return ;
    }

    let offsetY = getOutOfBoundOffsetY(from(getRegion(node)) , y) ;

    if(offsetY === 0){

        let {
            children,
            expanded
        } = node ;

        if(expanded){

            for(let childNode of children){

                if(!is(childNode)){

                    continue ;
                }    
    
                let parentNode = getNearestParentNode(childNode , xy) ;
        
                if(parentNode){
                    
                    return parentNode ;
                }
            }
        }
    
        return node ;
    }
 }

 function getNearestNodes(infos , ignoreValue , ignoreNodes){

    let value,
        result = [];

    for(let info of infos){

        let {
            value:nodeValue,
            node
        } = info ;

        if(nodeValue === ignoreValue || ignoreNodes.includes(node)){

            continue ;
        }
 
        if(!isDefined(value)){

            value = nodeValue ;

        }

        result.push(info) ;
    }

    return result ;
 }