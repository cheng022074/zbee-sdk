
/**
 * 
 * 增量载入数据
 * 
 * @import createStore from data.store.create
 * 
 */

 let store = createStore({
   fields:[
      'name'
   ],
   idProperty:'name',
   fullLoad:false
 }) ;

 store.on('load' , store => {

   console.log('载入数据')

   let records = store.toArray() ;

   for(let record of records){

      console.log('' , record.get('name')) ;
   }

 }) ;

store.load([{
    name:'陈治文'
 },{
   name:'苏大强'
},{
   name:'宁小小'
}]) ;

store.load([{
    name:'陈炳昌'
 }]) ;