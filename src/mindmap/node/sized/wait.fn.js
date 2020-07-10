
/**
 * 
 * 等待所有节点都获取了尺寸
 * 
 * 
 */

let me = this,
{
    unsizedNodes
} = me ;

if(unsizedNodes.size){

    return new Promise(callback =>   add(me , 'nodesized' , callback , {
        once:true
    })) ;

}
