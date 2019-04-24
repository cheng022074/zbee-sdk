/**
 * 
 * 调试树型结构
 * 
 * @import createTree from tree.mind
 * 
 */

let tree = createTree({

    layout(data , region){

        //console.log('布局后的所有节点' , data , region) ;
 

    },
    insert(data){

        //console.log('新添节点' , data) ;
    },
    remove(index){

       // console.log('删除节点' , index) ;
    }
} , {
    defaultNodeConfig:{
        width:100,
        height:50
    },
    rootXY:{
        x:100,
        y:150
    },
    fields:[
        'detail'
    ]
}) ;

tree.load({
    id1:'1',
    cn:[{
        id1:'x1',
    },{
        id1:'x2',
        cn:{
            id1:'last'
        }
    }]
}) ;

let {
    rootNode
} = tree ;

tree.layout() ;

console.log(rootNode.relationship.lastNode.up()) ;