
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
      proxy
    } = me ;

    me.list = rootNode.list ;

    console.log('初始化列表' , me.list) ;

    proxy.callIf('load' , me.data) ;

 }

 me.loading = false ;

