
/**
 * 
 * 展开节点 
 * 
 */

let me = this,
{
    expanded
} = me ;



if(!expanded){

    me.set('expanded' , true) ;

    let {
        childNodes
    } = me ;

    for(let childNode of childNodes){

        childNode.show() ;
    }
}