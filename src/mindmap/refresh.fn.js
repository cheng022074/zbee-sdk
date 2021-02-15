
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
    } = layoutData;

    me.fireEvent('draw' , {
        nodes:nodes(layoutNodes , offset),
        lines:lines(layoutNodes),
        selectedNode:selectedNode(layoutNodes),
        canvas:size
    }) ;
 }

 function getNodes(nodes , offset){

    let result = new Map() ;

    for(let node of nodes){

        let data = getData(node , offset),
            region = from(data);

        result.set(node , {
            data,
            centerXY:getAnchorXY(region , 'c'),
            rightXY:getAnchorXY(region , 'r'),
            leftXY:getAnchorXY(region , 'l')
        })
    }

    return result ;
 }



