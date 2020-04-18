
/**
 * 
 * @require localforage
 * 
 * @config name from storage...name
 * 
 * @return {Storage} 键值存储器 
 * 
 */

 const localforage = require('localforage') ;

 localforage.config({
   driver: localforage.INDEXEDDB,
   name
 }) ;

 function main(){

    return localforage ;
 }