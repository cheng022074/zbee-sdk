
/**
 * 
 * 设置节点重构标识
 * 
 * @param {data.Record} node 节点
 * 
 * @param {boolean} restructure 重构标识
 * 
 * @return {boolean} 重构标识值 
 * 
 */

 let me = this ;

if(restructure){

   me.restructuredNode = node ;

}else{

    delete me.restructuredNode ;
}

return restructure ;