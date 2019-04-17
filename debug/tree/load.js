
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

tree.addListener('load' , nodes =>{

    console.log('加载' , nodes) ;

}) ;

tree.load({
 id:'root',
 cn:[{
     id:'child1'
 },{
    cn:[
        {},
        {}
    ]
 }]
}) ;