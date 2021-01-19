
/**
 * 
 * 以外部数据创建脑图节点
 * 
 * @param {array} data 脑图节点数据
 * 
 * @return {data.Record} 创建后的脑图节点 
 * 
 */

let me = this,
{
   reader,
   readConfig
} = me ;

return reader.read(data , {
  ...readConfig,
  multi:false
});
