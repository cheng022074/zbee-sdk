import { isString } from "util";

/**
 * 
 * 注销地址
 * 
 * @import is.string
 * 
 * @param {message.Address | string} address 消息地址
 * 
 */

 let {
    addresses
 } = this ;

 if(isString(address)){

   delete addresses[address] ;
 
 }else{

   delete addresses[address.name] ;

 }