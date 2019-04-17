
/**
 * 
 * 调试树型结构
 * 
 * @import createTree from tree
 * 
 * @import getNode from tree.node
 * 
 */

let tree = createTree(getNode()) ;

tree.addListener('create' , node =>{

    console.log('新节点' , node) ;

}) ;

tree.load({
 id:'root',
 cn:[{
     id:'child1'
 },{
    cn:{}
 }]
}) ;