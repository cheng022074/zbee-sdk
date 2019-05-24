/**
 * 
 * 使用JSON数据进行脑图初始化 
 * 
 * 初始化脑图中的所有节点都是展开状态
 * 
 * @import create from data.store.create
 * 
 * @import Model from data.model.node.tree value
 * 
 * @import define from class.define
 * 
 * @import data.store.tree
 * 
 */

 store = create({
     type:'tree',
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
    },{
        name:'margin-bottom',
        persistent:true,
        defaultValue:10
    },{
        name:'margin-right',
        persistent:true,
        defaultValue:10
    }]
 }) ;

 store.load([{
     f_id:'3671',
     f_pid:'0'
 },{
    f_id:'4116',
    f_pid:'3671'
 }]) ;

 store.each(record =>{

    record.syncSize(128 , 345) ;

    let {
        id,
        x,
        y,
        width,
        height
    } = record ;

    console.log(id , x , y , width , height) ;

 }) ;