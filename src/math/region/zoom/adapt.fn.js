
/**
 * 
 * 自适应缩放
 * 
 * @import contains from ..contains
 * 
 * @import width from ..width
 * 
 * @import height from ..height
 * 
 * @param {object} baseRegion 参照范围
 * 
 * @param {object} region 范围
 * 
 */

 switch(contains(baseRegion , region) ? 'in' : 'out'){

    case 'in':

        if(op === 'out'){

            return ;
        }

        let offsetX = width(baseRegion) - width(region),
            offsetY = height(baseRegion) - height(region);

        

        break ;

    case 'out':

        if(op === 'in'){

            return ;
        }
 }

 

 