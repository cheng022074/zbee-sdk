
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

            return {
                xy:getCenterXY(node),
                rightXY:getRightXY(node),
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
        } = this,
        minDistance = Infinity,
        minNode,
        minDistance2 = Infinity,
        minNode2,
        {
            x
        } = xy;

        for(let {
            rightXY:nodeXY,
            node
        } of nodes){

            let distance =  getDistance(xy , nodeXY) ;

            if(x > nodeXY.x){

                if(minDistance > distance){

                    minDistance = distance ;

                    minNode = node ;
                }
            
            }
            
            if(minDistance2 > distance){

                minDistance2 = distance ;

                minNode2 = node ;
                
            }
        }

        return minNode || minNode2;
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