
/**
 * 
 * 载入数据
 * 
 * @import createStore from data.store
 * 
 */

 let store = createStore({
   fields:[
      'name'
   ],
   idProperty:'name'
 }) ;

 store.on('load' , (store , data) => console.log('加载数据' , data)) ;

 store.load([{
    name:'x'
 },{
   name:'xx'
},{
   name:'xxx'
}]) ;