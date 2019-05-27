/**
 * 
 * 使用JSON数据进行脑图初始化 
 * 
 * 初始化脑图中的所有节点都是展开状态
 * 
 * @import data.store.tree
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

 

 store.addListeners({
    load(store , records){

        for(let record of records){

            record.syncSize(100 , 100) ;
        }
    },
    layout(store , records){

        for(let {
            id,
            x,
            y,
            width,
            height
        } of records){
    
            console.log(id , x , y , width , height) ;
        }
    
    }
 }) ;

store.load([{
    f_id:'3671',
    f_pid:'0'
},{
   f_id:'4116',
   f_pid:'3671'
},{
    f_id:'4117',
    f_pid:'3671'
 },{
    f_id:'5112',
    f_pid:'4117'
 },{
    f_id:'5113',
    f_pid:'4117'
 },{
    f_id:'5114',
    f_pid:'4117'
 }]) ;


store.layout() ;