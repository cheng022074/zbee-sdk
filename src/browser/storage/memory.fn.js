
/**
 * 
 * 内存键值存储器
 * 
 * @import Storage from ....storage value
 * 
 * @import clear from object.clear
 * 
 * @import remove from array.remove
 * 
 * @singleton
 * 
 */

 class main extends Storage{

    constructor(){

      let me = this ;

      me.storage = {} ;

      me.keys = [] ;
    }

    get length(){

      let {
         keys
      } = this ;

      return keys.length ;
    }

    doSetItem(key , value){

      let {
         storage,
         keys
      } = this ;

      storage[key] = value ;

      if(!keys.includes(key)){

         keys.push(key) ;
      }

    }

    doGetItem(key){

      let {
         storage
      } = this ;

      return storage[key] ;
    }

    doRemoveItem(key){

      let {
         storage
      } = this ;

      if(keys.includes(key)){

         remove(keys , key) ;

         delete storage[key] ;
      }
   }

   doClear(){

      let {
         storage
      } = this ;

      clear(storage) ;
   }

   doKey(index){

      let {
         keys
      } = this ;

      return keys[index] ;
   }
 }