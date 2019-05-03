
/**
 * 
 * 载入树型数据
 * 
 * @import createStore from data.store
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
                associatedName:"cn"
            }
        }
     ],
     idProperty:'name'
}) ;

let store = createStore({
    model:Node
  }) ;

store.on('load' , (store , records) => {

   let record = records[0] ;

   console.log(record.get('name')) ;

   setTimeout(() =>{

      console.log(record.get('childNodes').records) ;

   } , 1000) ;

   

}) ;

store.load([{
   name:'陈治文',
   cn:[{
      name:'苏大强'
   },{
      name:'宁小小'
   }]
}]) ;