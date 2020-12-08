
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
 * @import read from file.read.json
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

 async function doLoad(){

    let me = this,
    {
      storagePath
    } = me,
    storage = await read(storagePath) ;

    me.storage = storage ;

    me.keys = Object.keys(storage) ;

    doLoad = () => {} ;
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

    async setItem(key , value){

      let me = this ;

      await doLoad.call(me) ;

      let {
         storage,
         keys
      } = me ;

      if(!keys.includes(key)){

        keys.push(key) ;

      }

      storage[key] = value ;

      me.storageVersion ++ ;

      await doStorage.call(me) ;
    }

    get length(){

      let me = this ;

      return new Promise(async callback => {

        await doLoad.call(me) ;

        callback(me.keys.length) ;

      }) ;

    }

    async key(index){

      let me = this ;

      await doLoad.call(me) ;

      return me.keys[index] ;
    }

    async getItem(key){

      let me = this ;

      await doLoad.call(me) ;

      let {
         storage
      } = me ;

      return storage[key] || null;
    }

    async removeItem(key){

      let me = this ;

      await doLoad.call(me) ;

      let {
         storage
      } = me ;

      if(keys.includes(key)){

         remove(keys , key) ;

         delete storage[key] ;
      }
   }
 }