
/**
 * 
 * 调试观察者模式的缓存机制
 * 
 * @import observable from mixin.observable
 * 
 */

 class Test extends mixins({
     mixins:[
        observable
     ]
 }){

    get fireEventDataCacheCount(){

        return 2 ;
    }

 }

 let test = new Test() ;

 test.fireEvent('debug' , '哈哈') ;

 test.fireEvent('debug' , '嘿嘿') ;

 test.on('debug' , (test , text) =>{

    console.log(text) ;

 } , undefined , {
    getOldFireEventData:'all'
 }) ;