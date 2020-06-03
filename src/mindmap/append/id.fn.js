
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
 * @param {object} [node = {}] 子节点配置信息
 * 
 * @param {string} id 父节点编号
 * 
 */

 let parentNode = query(id) ;

 if(parentNode){

    node = append(parentNode , node) ;

    if(node === false){

        return ;
    }

    let {
        hidden,
        expanded
    } = parentNode,
    me = this;

    if(!hidden && expanded){

        tryLayout().then(() => me.fireEvent('nodeappend' , data(node) , data(parentNode))) ;
    
    }else{

        me.fireEvent('nodeappend' , data(node) , data(parentNode)) ;
    }

 }