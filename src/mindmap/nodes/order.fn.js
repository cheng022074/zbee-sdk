
/**
 * 
 * 修改一组节点的排序序号
 * 
 * @import fireDrawEvent from ..fire.draw scoped
 * 
 * @param {object} orders 排序序号集合
 * 
 */

 let {
     nodes
 } = this,
 ids = Object.keys(orders);

 for(let id of ids){

    if(nodes.has(id)){

        nodes.get(id).order = orders[id] ;
    }
 }

 fireDrawEvent() ;