
/**
 * 
 * 数据代理
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
 * 
 * @import data.proxy.memory
 * 
 * @import getReader from data.reader
 * 
 * @return {data.Proxy} 数据代理类型引用
 * 
 * @once 
 * 
 */

 const Reader = getReader() ;

 const API_NAMES = [
    'find',
    'findOne',
    'insertOne',
    'insertMany',
    'updateOne',
    'updateMany',
    'deleteOne',
    'deleteMany'
 ];

 class Proxy{

   static create(config){

      if(isString(config)){

         return include(config)() ;
     
      }else if(isObject(config)){

            let {
               type,
               ...proxyConfig
            } = this ;

            return include(`data.proxy.${type || 'memory'}`)(proxyConfig) ;
      }

      return include('data.proxy.memory')() ;
   }

   constructor({
      api = {}
   }){

      let names = API_NAMES,
         me = this,
         currentAPI = me.api = {};

      me.apiCache = {} ;

      for(let name of names){

         currentAPI[name] = me.processAPIConfig(api[name]) ;
      }
   }

   getAPIConfigItem(apiName , itemName){

      let me = this,
      {
         api,
         apiCache
      } = me,
      cacheKey = `${apiName}-${itemName}`;

      if(apiCache.hasOwnProperty(cacheKey)){

         return apiCache[cacheKey] ;
      }

      if(api.hasOwnProperty(apiName)){

         let target = api[apiName] ;

         if(target.hasOwnProperty(itemName)){

            return apiCache[cacheKey] = me.getAPIConfigItemValue(itemName , target[itemName]) ;
         }
      }
   }

   getAPIConfigItemValue(name , value){

      switch(name){

         case 'reader':

            return Reader.create(value || 'json') ;
      }
   }

   processAPIConfig(config = {}){

      if(isString(config)){

         return {
            reader:config
         } ;

      }else if(isObject(config)){

         return config ;
      }

      return {
         reader:'json'
      } ;
   }

   find(){
   }

   findOne(){
   }

   insertOne(){

   }

   insertMany(){

   }

   updateOne(){


   }

   updateMany(){


   }

   deleteOne(){


   }

   deleteMany(){


   }
 }

 return Proxy ;
