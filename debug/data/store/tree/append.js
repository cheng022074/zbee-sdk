/**
 * 
 * 使用JSON数据进行脑图初始化 
 * 
 * 初始化脑图中的所有节点都是展开状态
 * 
 * @import data.store.tree
 * 
 * @import create from data.store.create
 * 
 */

 store = create({
     type:'tree',
     margin:{
        right:10,
        bottom:10
    },
     rootConfig:{
        x:100,
        y:100
     },
     fields:[{
        name:'id',
        mapping:'f_id'
    },{
       name:'parentId',
       mapping:'f_pid'
    }]
 }) ;


store.load([{
    f_id:'3671',
    f_pid:'0'
},{
   f_id:'4116',
   f_pid:'3671'
}]) ;

let {
    rootNode
} = store ;

console.log(rootNode.childNodes.length) ;

rootNode.appendChild({
    f_id:'4117',
    f_pid:'3671'
}) ;

console.log(rootNode.childNodes.length) ;