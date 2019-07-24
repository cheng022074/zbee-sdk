
/**
 * 
 * 添加节点
 * 
 * @import resetProperty from object.property.reset
 * 
 * @param {mixed} node 节点信息
 * 
 */

let me = this,
{
    store,
    expanded,
    hidden
} = me,
nodes = store.insert(store.indexOf(me.lastLeafNode || me) + 1 , node) ;

me.set('leaf' , false) ;

if(expanded && !hidden){

    for(let node of nodes){

        node.show() ;
    }
}

resetProperty(me , 'children') ;

me.fireEvent('append' , nodes) ;

return nodes ;
