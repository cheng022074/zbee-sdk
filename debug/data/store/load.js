
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
   ]
 }) ;

 function onLoad(store , data){

    console.log('加载数据' , data) ;
 }

 store.addListener('load' , onLoad) ;

 store.load([{
    name:'x'
 },{
   name:'xx'
},{
   name:'xxx'
}]) ;