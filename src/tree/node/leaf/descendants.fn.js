
/**
 * 
 * 所有叶子子孙节点
 * 
 * @return {array} 子孙节点集合
 * 
 */

 
let nodes = [],
{
    descendants
} = this;

for(let descendant of descendants){

    if(descendant.isLeaf){

        nodes.push(descendant) ;
    }
}

return nodes ;