
/**
 * 
 * 获得所有的子孙节点
 * 
 * @return {array} 子孙节点集合
 * 
 */

let me = this,
{
    $descendants
} = me ; 

if($descendants){

    return $descendants ;
}

let nodes = [],
{
    children
} = me;

for(let child of children){

    nodes.push(child) ;

    if(!child.isLeaf){

        nodes.push(...child.descendants) ;
    }
}

return me.$descendants = nodes ;

