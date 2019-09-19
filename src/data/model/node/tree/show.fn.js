
/**
 * 
 * 显示节点
 * 
 * @param {boolean} [isPassive = false] 是否被动显示
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

me.resetProperties([
    'leafNode'
]) ;

if(!isPassive){

    me.resetAncestorProperties([
        'leafNode'
    ]) ;
}

if(expanded){

    for(let childNode of children){

        childNode.show(true) ;
    }
}