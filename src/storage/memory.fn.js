
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
      storageVersion
    } = me ;

    if(isDefined(storagePath)){

      await save(storagePath , storage) ;

      if(storageVersion !== me.storageVersion){

        await doStorage() ;

      }
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