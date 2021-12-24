
/**
 * 
 * 展开节点
 * 
 * @import show from .show scoped
 * 
 * @import from from .from scoped
 * 
 * @import append from .api.append scoped
 * 
 * @import remove from .api.delete scoped
 * 
 * @import register from .register scoped
 * 
 * @param {mixed} node 节点
 * 
 * @return {boolean} 如果正确展开则返回 true , 否则返回 false
 * 
 */

node = from(node) ;

if(node){

    let me = this,
    {
        expanded,
        hidden,
        loaded,
        loadChildrenData
    } = node;

    me.fireEvent('beforelayout') ;

    if(!hidden && !expanded){

        let {
            reader
        } = me ;

        if(!loaded){

            let childNodes = Array.from(node.children) ;

            for(let childNode of childNodes){

                remove(childNode) ;
            }

            childNodes = await loadChildrenData(reader) ;

            for(let childNode of childNodes){

                append(register(childNode) , node) ;
            }
        }

        let {
            children
        } = node ;

        if(children.length){

            node.expanded = true ;

            for(let childNode of children){
    
                show(childNode) ;
            }

            return true ;
        
        }else if(!loaded){

            node.expanded = true ;

            return true ;
        }
    }
}

return false ;