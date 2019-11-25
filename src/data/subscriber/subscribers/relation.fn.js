/**
 * 
 * 执行相关联的订阅器的动作
 * 
 * @param {string} method 动作名称
 * 
 */

 let {
    relationSubscribers
 } = this ;

for(let relationSubscriber of relationSubscribers){

    relationSubscriber[method]() ;
}