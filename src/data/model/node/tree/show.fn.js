
/**
 * 
 * 显示节点
 * 
 */

let me = this,
{
    children,
    store
} = me,
{
    selectedNode
} = store;


me.set('hidden' , false) ;

for(let childNode of children){

    childNode.show() ;
}