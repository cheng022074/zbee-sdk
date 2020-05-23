
/**
 * 
 * 可视化节点集合
 * 
 * @import getCenterXY from math.region.xy.center
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
        nodes = Array.from(me.values()).map(node => {

            return {
                xy:getCenterXY(node),
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

    getNearestNode(node , direction){

        let {
            sortedYNodes,
            sortedYNodeIndexes
        } = this,
        xy,
        nodes;

        if(!sortedYNodeIndexes.has(node)){

            return ;
        }

        switch(direction){

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