
/**
 * 
 * 调试树型JSON数据读取器
 * 
 * @import getReader from tree.reader.json
 * 
 * @import getNode from tree.node
 * 
 */

 let Node = getNode(),
    read = getReader({
    fields:[
        'id'
    ],
    create:config => new Node(config)
 }) ;

 let {
    children
 } = read({
     id:'root',
     cn:[{
         id:'child1'
     },{
        cn:{}
     }]
 }) ;

 for(let child of children){

    console.log(child) ;
 }