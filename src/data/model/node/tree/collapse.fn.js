
/**
 * 
 * 收起
 * 
 */

let me = this,
{
    expanded,
    childNodes
} = me ;

if(expanded){

    for(let childNode of childNodes){

        childNode.hide() ;
    }

    me.set('expanded' , false) ;
}