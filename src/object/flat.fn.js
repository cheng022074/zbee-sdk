
/**
 * 
 * 将对象扁平化处理
 * 
 * @import join from object.key.join
 * 
 * @import isObject from is.object.simple
 * 
 * @param {object} data 对象
 * 
 * @return {object} 扁平化后的对象 
 * 
 */

function main(data){

    return flat(data) ;
 }
 
 function flat(data , rootKey){
 
     let result = {} ;
 
     if(isObject(data)){
 
         let keys = Object.keys(data) ;
 
         for(let key of keys){
 
             Object.assign(result , flat(data[key] , join(rootKey , key))) ;
         }
     
     }else if(rootKey){
 
         result[rootKey] = data ;
     }
 
     return result ;
}

 