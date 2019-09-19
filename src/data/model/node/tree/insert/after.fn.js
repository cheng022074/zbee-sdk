
/**
 * 
 * 在指定节点之前插入
 * 
 * @import resetProperty from object.property.reset
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
    expanded,
    hidden
  } = me;

  if(children.includes(existNode)){

    let nodes = store.insert(store.indexOf(existNode) + 1 , node) ;

    me.set('leaf' , false) ;

    if(expanded && !hidden){

        for(let node of nodes){
    
            node.show() ;
        }
    }

    me.resetProperties([
        'children',
        'leafNode'
    ]) ;

    me.fireEvent('insertafter' , nodes , existNode) ;
  }