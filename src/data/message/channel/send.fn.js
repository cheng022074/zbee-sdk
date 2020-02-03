
/**
 * 
 * 发送消息
 * 
 * @import copy from object.copy
 * 
 * @import isObject from is.object.simple
 * 
 * @import create from data.message.create
 * 
 * @param {mixed} address 接收消息地址
 * 
 * @param {mixed} data 发送的数据
 * 
 * @param {object} [config = {}] 发送配置
 * 
 */

 let {
     proxy
 } = this,
 {
     message,
     promise
 } = create(address , data , config);

 proxy.call('onSend' , message) ;

 return promise ;