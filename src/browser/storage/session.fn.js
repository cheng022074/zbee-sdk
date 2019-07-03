
/**
 * 
 * 会话键值存储器
 * 
 * @import Storage from ....storage
 * 
 * @singleton
 * 
 */

class main extends Storage{

    doSetItem(key , value){

        return sessionStorage.setItem(key , value) ;
    }

    doGetItem(key){

        return sessionStorage.getItem(key) ;
    }
 }