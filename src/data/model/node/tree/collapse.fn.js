
/**
 * 
 * 收起
 * 
 * @param {boolean} [deep = false] 是否级联收起节点，默认为 false
 * 
 */

let me = this,
{
    expanded,
    childNodes
} = me ;

if(expanded){

    for(let childNode of childNodes){

        if(deep){

            childNode.suspendEvents() ;

            childNode.collapse(deep) ;

            childNode.resumeEvents() ;
        }

        childNode.hide() ;
    }

    me.set('expanded' , false) ;

    me.fireEvent('collapse') ;
}