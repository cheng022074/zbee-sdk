
/**
 * 
 * 在指定节点之前插入
 * 
 * @param {mixed} node 插入节点
 * 
 * @param {data.model.tree.Node} existNode 节点
 * 
 */

 let me = this,
 {
    store,
    children,
    expanded
  } = me;

  if(children.includes(existNode)){

    if(!expanded){

        node.hide() ;
    }

    let nodes = store.insert(store.indexOf(existNode) + 1 , node) ;

    if(!expanded){

        for(let node of nodes){
    
            node.hide() ;
        }
    }

    me.fireEvent('insertafter' , nodes , existNode) ;
  }