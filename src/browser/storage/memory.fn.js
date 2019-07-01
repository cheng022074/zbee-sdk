
/**
 * 
 * 内存键值存储器
 * 
 * @import clear from object.clear
 * 
 * @import remove from array.remove
 * 
 * @return {Storage} 键值存储器 
 * 
 */

 class main{

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

    clear(){

      let {
         storage
      } = this ;

      clear(storage) ;
    }

    key(index){

      let {
         keys
      } = this ;

      return keys[index] ;
    }
 }