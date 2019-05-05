
/**
 * 
 * 载入树型数据
 * 
 * @import createStore from data.store.tree
 * 
 * @import createModel from data.model.create
 * 
 */

const Node = createModel({
    fields:[
        'name',
        {
            "name":"childNodes",
            "hasMany":{
                autoLoad:true,
                associatedName:"cn"
            }
        }
     ],
     idProperty:'name'
}) ;

let store = createStore({
    model:Node
  });

store.on('load' , (store , records) =>{

   console.log(records) ;

}) ;

store.load({
   name:'陈治文',
   cn:[{
      "name":"英雄"
   },{
      name:'苏大强',
      cn:[{
         name:'小朋友'
      },{
         name:'小朋友2'
      }]
   },{
      name:'宁小小'
   }]
}) ;