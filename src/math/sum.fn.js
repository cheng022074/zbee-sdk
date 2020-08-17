
/**
 * 
 * 求和
 * 
 * @import is.array
 * 
 * @import sum from .sum
 * 
 * @param {array} [...values] 一组待求和的值
 * 
 * @return {number} 值
 * 
 */

 let result = 0 ;

 for(let value of values){

   if(isArray(value)){

      result += sum(...value) ;

   }else{

      result += value ;
   }    
 }

 return result ;