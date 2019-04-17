
/**
 * 
 * 初始化树
 * 
 * @import createRead from tree.reader.json
 * 
 * @import create from ..create scoped
 * 
 * @param {class} Node 构建树型节点类  
 * 
 * @param {object} [readerConfig = {}] 读取器配置
 * 
 */

 let me = this ;

 me.nodes = [] ;

 me.Node = Node ;

 me.read = createRead(Object.assign({} , readerConfig , {
    fields:[
       'id'
    ],
    childrenField:'children',
    create
 })) ;