/**
 * 
 * 调试树型结构
 * 
 * @import createTree from tree.mind
 * 
 */

let tree = createTree({
    load(data){

        console.log('加载后的所有节点' , data) ;

    },
    layout(data){

        console.log('布局后的所有节点' , data) ;
 

    },
    insert(data){

        console.log('新添节点' , data) ;
    },
    remove(index){

        console.log('删除节点' , index) ;
    }
} , {
    defaultNodeConfig:{
        width:100,
        height:50
    },
    rootXY:{
        x:100,
        y:50
    }
}) ;

tree.load({
    cn:[{},{
        cn:{}
    }]
}) ;

let {
    rootNode
} = tree ;

tree.layout() ;