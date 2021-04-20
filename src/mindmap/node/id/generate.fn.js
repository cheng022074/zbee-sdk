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

if(isFunction(generateNodeId)){

    return generateNodeId.call(me) ;
}

return generate('node-') ;