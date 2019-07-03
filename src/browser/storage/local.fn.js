
/**
 * 
 * 本地键值存储器
 * 
 * @import Storage from ....storage
 * 
 * @singleton
 * 
 */

 class main extends Storage{

    doSetItem(key , value){

        return localStorage.setItem(key , value) ;
    }

    doGetItem(key){

        return localStorage.getItem(key) ;
    }
 }