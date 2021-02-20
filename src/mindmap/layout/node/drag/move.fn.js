
/**
 * 
 * 拖曳节点
 * 
 * @import getAnchorY from math.region.y.anchor
 * 
 * @import from from math.region.from
 * 
 * @import fromNode from mindmap.node.from scoped
 * 
 * @import insertBefore from mindmap.node.insert.before scoped
 * 
 * @import insertAfter from mindmap.node.insert.after scoped
 * 
 * @import expand from mindmap.node.expand scoped
 * 
 * @import append from mindmap.node.append scoped
 * 
 * @param {object} xy 坐标
 * 
 * @param {number} xy.y 纵坐标
 * 
 * @param {object} originXY 原始坐标
 * 
 * @param {object} [node] 节点
 * 
 */

 

if(node){

    let region = from(node),
        centerY = getAnchorY(region , 'center'),
        {
            placeholderNode,
            draggingNode
        } = this;

    node = fromNode(node) ;

    if(node === draggingNode || node === placeholderNode){

        return false ;
    }

    if(y > centerY){

        return insertAfter(placeholderNode , node) ;
    
    }else{

        return insertBefore(placeholderNode , node) ;
    }
    
}else{

    let {
        dragNodeDiscernRadius,
        placeholderNode
    } = this,
    directions = [{
        direction:'top',
        property:'y',
        offset:-dragNodeDiscernRadius
    },{
        direction:'bottom',
        property:'y',
        offset:dragNodeDiscernRadius
    },{
        direction:'left',
        property:'x',
        offset:-dragNodeDiscernRadius
    }];

    for(let {
        direction,
        property,
        offset
    } of directions){

        let {
            x,
            y
        } = originXY ;

        switch(property){

            case 'x':

                x += offset ;

                break ;

            case 'y':

                y += offset ;
        }

        let el = document.elementFromPoint(x , y),
        {
            id
        } = el.dataset;

        if(id){

            let node = fromNode(id) ;

            switch(direction){

                case 'top':

                    return insertAfter(placeholderNode , node) ;

                case 'bottom':

                    return insertBefore(placeholderNode , node) ;

                case 'left':

                    expand(node) ;

                    return append(placeholderNode , node);

                
            }

            break ;
        }
    }


}


