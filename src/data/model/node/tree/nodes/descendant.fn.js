
/**
 * 
 * 获得所有子孙节点
 * 
 * @return {array} 节点集合 
 * 
 */
 
let me = this,
    {
        expanded
    } = me;

if(!expanded){

    return [] ;
}

let {
        children
    } = me,
    result = [];

for(let childNode of children){

    result.push(childNode , ...childNode.descendantNodes) ;

}

return result ;