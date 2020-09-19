
/**
 * 
 * 重置所有快照数据
 * 
 * @import has from object.property.inner.has
 * 
 * @import get from object.property.inner.get
 * 
 * @import getInnerPropertyName from mindmap.data.node.property.name scoped
 * 
 */


 let {
     nodes
 } = this ;

 nodes.forEach(node => {

    let data = get(node , getInnerPropertyName(node , 'data')) ;

    if(data){

        get(data , 'reset')() ;
    }

 }) ;

 