
/**
 * 
 * 设置根节点
 * 
 * @import add from event.listener.add
 * 
 * @import remove from event.listener.remove
 * 
 * @import get from object.property.inner.get
 * 
 * @param {data.Record} rootNode 根节点
 * 
 */

 let me = this,
 {
    $rootNode,
    onRootNodePropertyChange
 } = me ;

 if($rootNode){

    remove(get($rootNode , 'observable') , {
        propertychange:onRootNodePropertyChange
    }) ;
 }

 add(get(rootNode , 'observable') , {
    propertychange:onRootNodePropertyChange
 }) ;

 me.$rootNode = rootNode ;