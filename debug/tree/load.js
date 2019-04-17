
/**
 * 
 * 调试树型结构
 * 
 * @import createTree from tree
 * 
 * @import getNode from tree.node
 * 
 */

let tree = createTree({
    load(data){

        console.log('加载后的所有节点' , data) ;

    },
    insert(data){

        console.log(data) ;
    },
    clear(){

        console.log('清除所有节点') ;
    }
}) ;

tree.load({
 id:'root',
 cn:[{
     id:'child1'
 },{
    cn:[
        {},
        {
            id:'ccc'
        }
    ]
 }]
}) ;