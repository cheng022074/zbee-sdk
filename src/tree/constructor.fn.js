
/**
 * 
 * 初始化树
 * 
 * @import createRead from tree.reader.json
 * 
 * @import getNodeClass from tree.node scoped
 * 
 * @param {object} [readerConfig = {}] 读取器配置
 * 
 */

 let me = this,
 Node = getNodeClass();

 me.nodes = [] ;

 me.read = createRead(Object.assign({
   create(config){

      return new Node(config) ;

   },
   fields:[
      'id'
   ]
 } , readerConfig , {
    childrenField:'children'
 })) ;