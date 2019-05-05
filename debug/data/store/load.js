
/**
 * 
 * 载入数据
 * 
 * @import createStore from data.store.create
 * 
 */

 let store = createStore({
   fields:[
      'name'
   ],
   idProperty:'name'
 }) ;

 store.on('load' , (store , records) => console.log('加载数据' , records)) ;

 store.load([{
    name:'陈治文'
 },{
   name:'苏大强'
},{
   name:'宁小小'
}]) ;