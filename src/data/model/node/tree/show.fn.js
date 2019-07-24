
/**
 * 
 * 显示节点
 * 
 */

let me = this,
{
    children,
    store,
    expanded
} = me,
{
    selectedNode
} = store;


me.set('hidden' , false) ;

if(expanded){

    for(let childNode of children){

        childNode.show() ;
    }
}