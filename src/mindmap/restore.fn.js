
/**
 * 
 * 基于快照数据恢复先前保存的脑图数据
 * 
 * @import assign from object.assign
 * 
 */

 function main(){

    let {
        rootNode,
        snapshotData
    } = this ;
    
 }

 function restore(node , {
     ...properties,
     children:items
 }){

    assign(node , properties) ;

    let {
        children
    } = node,
    {
        length
    } = children;

    for(let i = 0 ; i < length ; i ++){

        restore(children[i] , items[i]) ;
    }
    
 }