
/**
 * 
 * 刷新
 * 
 * @import getData from .layout.node.data.draw scoped
 * 
 * @import from from math.region.from
 * 
 * @import getAnchorXY from math.region.xy.anchor
 * 
 * @import getParentNode from .layout.node.parent scoped
 * 
 */

 function main(){

    let me = this,
    {
        layoutNodes,
        layoutData
    } = me,
    {
        size,
        offset
    } = layoutData,
    {
        nodes,
        selectedNode,
        placeholderNode
    } = getNodeDataset(layoutNodes , offset) ;

    me.fireEvent('draw' , {
        nodes:Array.from(nodes.values()),
        lines:getLines(nodes , placeholderNode),
        selectedNode,
        canvas:size
    }) ;
 }

 function getLines(nodes , placeholderNode){

    let layoutNodes = nodes.keys(),
        lines = [];

    for(let layoutNode of layoutNodes){

        let parentNode = getParentNode(layoutNode) ;

        if(parentNode){

            let {
                data:start,
                centerXY:startCenterXY,
                rightXY:startRightXY
            } = nodes.get(parentNode),
            {
                data:end,
                leftXY:endLeftXY
            } = nodes.get(layoutNode);

            lines.push({
                indicated:layoutNode === placeholderNode,
                start,
                startCenterXY,
                startRightXY,
                end,
                endLeftXY
            }) ;
        }
    }

    return lines ;
 }

 function getNodeDataset(nodes , offset){

    let result = new Map(),
        selectedNode,
        placeholderNode;

    for(let node of nodes){

        let data = getData(node , offset),
            region = from(data);

        if(data.placeholder){

            placeholderNode = data ;
        
        }else if(data.selected){

            selectedNode = data ;
        }

        result.set(node , {
            data,
            centerXY:getAnchorXY(region , 'c'),
            rightXY:getAnchorXY(region , 'r'),
            leftXY:getAnchorXY(region , 'l')
        })
    }

    return {
        nodes:result,
        selectedNode,
        placeholderNode
    } ;
 }



