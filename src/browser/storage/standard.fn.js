
/**
 * 
 * 标准键值存储器
 * 
 * @import Storage from ....storage value
 * 
 * @singleton
 * 
 */

class main extends Storage{

    doSetItem(key , value){

        return this.storage.setItem(key , value) ;
    }

    doGetItem(key){

        return this.storage.getItem(key) ;
    }

    doRemoveItem(key){

        this.storage.removeItem(key) ;
    }

    doKey(index){

        return this.storage.key(index) ;
    }

    doClear(){

        this.storage.clear() ;
    }
 }