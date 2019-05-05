
/**
 * 
 * 修改树型数据
 * 
 * @import createStore from data.store.tree
 * 
 */

let store = createStore({
    fields:[
       'name',{
           name:'job',
           mapping:'job',
           defaultValue:'其它'
       }
    ],
    idProperty:'name'
   });

store.load({
   name:'陈治文',
   job:'程序员',
   cn:[{
      "name":"英雄",
      job:'厨师'
   },{
      name:'苏大强',
      job:'销售',
      cn:[{
         name:'小朋友'
      },{
         name:'小朋友2'
      }]
   },{
      name:'宁小小'
   }]
}) ;

store.on('update' , (record ,  name , value) =>{

    console.log('update' , record.get('name') , name , value) ;

    let {
        records
    } = store ;

    for(let record of records){

        console.log(record.get('name') , record.get('job')) ;
     }

}) ;

store.on('load' , () =>{

    store.getById('陈治文').set('job' , '工程师') ;

    store.getById('宁小小').set('job' , 'xxxxxx') ;

}) ;


