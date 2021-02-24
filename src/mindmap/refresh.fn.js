
/**
 * 
 * 刷新
 * 
 * @import getData from .layout.node.data scoped
 * 
 * @import from from math.region.from
 * 
 * @import getRegion from .layout.node.region.self scoped
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
        selectedNode
    } = getNodeDataset(layoutNodes , offset);

    me.fireEvent('draw' , {
        nodes:getNodes(nodes),
        lines:getLines(nodes),
        selectedNode,
        selectedNodeRegion:getRegion(selectedNode),
        canvas:size
    }) ;
 }

 function getNodes(nodes){

    nodes = nodes.values() ;

    let result = [] ;

    for(let {
        data
    } of nodes){

        result.push(data) ;
    }

    return result ;
 }

 function getLines(nodes){

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
                indicated:layoutNode.placeholder,
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
        selectedNode;

    for(let node of nodes){

        let data = getData(node , offset),
            region = from(data);

        if(data.selected){

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
        selectedNode
    } ;
 }



