
/**
 * 
 * 以外部数据创建脑图节点
 * 
 * @import is.defined
 * 
 * @param {array} data 脑图节点数据
 * 
 * @param {mixed} [readAsRoot] 获得脑图节点根读取入口
 * 
 * @return {data.Record} 创建后的脑图节点 
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

return reader.read(data , {
  ...readConfig,
  multi:false
});
