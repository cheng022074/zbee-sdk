
/**
 * 
 * 内存键值存储器
 * 
 * @import Storage from ..storage value
 * 
 * @import remove from array.remove
 * 
 * @import save from file.write.json
 * 
 * @import is.defined
 * 
 * @param {object} [config = {}] 配置
 * 
 */

 async function doStorage(){

    let me = this,
    {
      storagePath,
      storage,
      storageVersion,
      storageLocked
    } = me ;

    if(isDefined(storagePath) && storageLocked !== true){

      me.storageLocked = true ;

      await save(storagePath , storage) ;

      while(storageVersion !== me.storageVersion){

        storageVersion = me.storageVersion ;

        await save(storagePath , storage) ;

      }

      me.storageLocked = false ;
    }
 }

 class main{

    constructor({
      storagePath
    }){

      let me = this ;

      me.storage = {} ;

      me.keys = [] ;

      me.storagePath = storagePath ;

      me.storageVersion = 0 ;
    }

    setItem(key , value){

      let me = this,
      {
         storage,
         keys
      } = me ;

      if(!keys.includes(key)){

        keys.push(key) ;

      }

      storage[key] = value ;

      me.storageVersion ++ ;

      doStorage.call(me) ;
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

      return storage[key] || null;
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