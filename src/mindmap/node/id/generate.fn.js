/**
 * 
 * 生成节点唯一编号
 * 
 * @import is.function
 * 
 * @import generate from id.generate
 * 
 */

let me = this,
{
    generateNodeId
} = me ;

return generateNodeId.call(me) || generate('node-');