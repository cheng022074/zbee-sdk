
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
 * @import data from ..node.data scoped
 * 
 * @import order from ..order scoped
 * 
 * @param {object} [node = {}] 子节点配置信息
 * 
 * @param {string} id 父节点编号
 * 
 */

 let parentNode = query(id) ;

 if(parentNode){

    node = append(parentNode , node) ;

    let {
        hidden,
        expanded
    } = parentNode,
    me = this;

    me.fireEvent('nodeappend' , data(node) , data(parentNode)) ;

    order(parentNode) ;

    if(!hidden && expanded){

        await tryLayout();
    
    }
 }