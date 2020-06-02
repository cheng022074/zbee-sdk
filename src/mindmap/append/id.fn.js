
/**
 * 
 * 在选定节点下添加一个子节点
 * 
 * @import append from ..node.append scoped
 * 
 * @import tryLayout from ..layout.try scoped
 * 
 * @import query from ..node.query scoped
 * 
 * @param {object} [node = {}] 子节点配置信息
 * 
 * @param {string} id 父节点编号
 * 
 */

 let parentNode = query(id) ;

 if(parentNode){

    append(parentNode , node) ;

    let {
        hidden,
        expanded
    } = parentNode ;

    if(!hidden && expanded){

        tryLayout() ;
    }

 }