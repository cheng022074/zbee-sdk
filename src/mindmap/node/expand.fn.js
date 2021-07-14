
/**
 * 
 * 展开节点
 * 
 * @import show from .show scoped
 * 
 * @import from from .from scoped
 * 
 * @import append from .sync.append scoped
 * 
 * @import remove from .sync.delete scoped
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

    let {
        expanded,
        loaded,
        loadChildrenData
    } = node;

    if(!expanded){

        let me = this,
        {
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

            node.loaded = true ;
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