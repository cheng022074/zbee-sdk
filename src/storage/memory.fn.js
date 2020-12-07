
/**
 * 
 * 内存键值存储器
 * 
 * @import Storage from ..storage value
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

    setItem(key , value){

      let {
         storage,
         keys
      } = this ;

      storage[key] = value ;

      if(!keys.includes(key)){

         keys.push(key) ;
      }

    }

    length(){

      return this.keys.length ;
    }

    key(index){

      return this.keys[index] ;
    }

    getItem(key){

      let {
         storage
      } = this ;

      return storage[key] ;
    }

    removeItem(key){

      let {
         storage
      } = this ;

      if(keys.includes(key)){

         remove(keys , key) ;

         delete storage[key] ;
      }
   }
 }