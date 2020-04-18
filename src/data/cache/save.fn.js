
/**
 * 
 * 数据保存
 * 
 */

 let me = this,
 {
    saveTimeoutId,
    proxy
 } = me;

 if(saveTimeoutId){

    clearTimeout(saveTimeoutId) ;
 }

 me.saveTimeoutId = setTimeout(() => {

   proxy.call('saveCache') ;

   me.fireEvent('save' , me.data) ;

 } , 0) ;