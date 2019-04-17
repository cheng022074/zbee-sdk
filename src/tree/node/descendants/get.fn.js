
/**
 * 
 * 获得所有的子孙节点
 * 
 * @return {array} 子孙节点集合
 * 
 */

let nodes = [],
{
    children
} = this;

for(let child of children){

    nodes.push(child) ;

    if(!child.isLeaf){

        nodes.push(...child.descendants) ;
    }
}

return nodes ;

