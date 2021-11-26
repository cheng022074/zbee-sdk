
/**
 * 
 * 布局后刷新
 * 
 * @import getData from .node.data scoped
 * 
 * @import from from math.region.from
 * 
 * @import getRegion from .node.region.self scoped
 * 
 * @import getAnchorXY from math.region.xy.anchor
 * 
 * @import getParentNode from .node.parent scoped
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
        offset,
        getLines
    } = layoutData,
    {
        nodes,
        selectedNode
    } = getNodeDataset(layoutNodes , offset) ;

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