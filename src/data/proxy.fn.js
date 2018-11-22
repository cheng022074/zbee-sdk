
/**
 * 
 * 数据代理
 * 
 * @import data.reader.json
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
 * 
 * @return {data.Proxy} 数据代理类型引用
 * 
 * @once 
 * 
 */

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

            value = value || 'json' ;

            if(isString(value)){

               return include(`data.reader.${value}`)() ;
            
            }else if(isObject(value)){

               let {
                  type,
                  ...config
               } = value ;

               type = type || 'json' ;

               return include(`data.reader.${type}`)(config) ;
            }

            throw new Error(`${value} 不是一个合法的读取器配置`) ;
      }
   }

   processAPIConfig(config = {}){

      if(isString(config)){

         return {
            reader:config
         } ;

      }else if(isObject(config)){

         return {
            ...config
         } ;
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
