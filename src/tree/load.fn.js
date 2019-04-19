
/**
 * 
 * 重新载入树形数据
 * 
 * @param {mixed} data 树型数据
 * 
 */

 let me = this ;

 me.clear() ;

 me.loading = true ;

 let rootNode = me.read(data);

 if(rootNode){

    me.rootNode = rootNode ;

    let {
      nodes,
      proxy
    } = me ;

    nodes.push(rootNode) ;

    nodes.push(...rootNode.descendants) ;

    proxy.callIf('load' , me.data) ;

 }

 me.loading = false ;

