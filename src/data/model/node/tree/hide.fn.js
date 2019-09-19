
/**
 * 
 * 隐藏节点
 * 
 * @param {boolean} [isPassive = false] 是否被动隐藏
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

if(selectedNode === me){

    let {
        parentNode
    } = me ;

    while(parentNode){

        if(parentNode.hidden === false){

            parentNode.select() ;

            break ;
        
        }else{

            parentNode = parentNode.parentNode ;
        }
    }
}

me.set({
    hidden:true,
    x:0,
    y:0
}) ;

me.resetProperties([
    'leafNode'
]) ;

if(!isPassive){

    me.resetAncestorProperties([
        'leafNode'
    ]) ;
}


for(let childNode of children){

    childNode.hide(true) ;
}