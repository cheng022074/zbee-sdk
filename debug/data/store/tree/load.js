
/**
 * 
 * 载入树型数据
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

store.on('load' , (store , records) =>{

   for(let record of records){

      console.log(record.get('name') , record.get('job')) ;
   }

   console.log('loaded') ;

}) ;

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