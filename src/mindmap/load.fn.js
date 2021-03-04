
/**
 * 
 * 初始化脑图数据
 * 
 * @import is.defined
 * 
 * @import register from .node.register scoped
 * 
 * @param {mixed} data 数据
 * 
 * @param {mixed} [readAsRoot] 获得脑图节点根读取入口
 * 
 */



let me = this,
{
  reader,
  readConfig
} = me ;

if(isDefined(readAsRoot)){

  readConfig = Object.assign({} , readConfig , {
    root:readAsRoot
  }) ;
}

let rootNode = reader.read(data , {
  ...readConfig,
  multi:false
});

if(rootNode){

    register(rootNode) ;

    me.rootNode = rootNode ;

    return rootNode ;

}