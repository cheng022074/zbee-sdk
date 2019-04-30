
/**
 * 
 * 载入数据
 * 
 * @import createStore from data.store
 * 
 */

 let store = createStore() ;

 function onLoad(store , data){

    store.removeListener('load' , onLoad) ;

    console.log('加载数据' , data) ;
 }

 store.addListener('load' , onLoad) ;

 store.load([]) ;

 store.load([]) ;