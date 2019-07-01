
/**
 * 
 * 取消单次订阅
 * 
 * @param {string} name 订阅名称
 * 
 * @param {string} fn 订阅函数
 * 
 * @param {mixed} scope 订阅函数作用域
 * 
 */

let me = this,
    {
        subscribers
    } = me,
    subscriber = subscribers.get(name) ;

if(subscriber){

    subscriber.unbind(fn , scope) ;

    if(!subscriber.hasBind){

        subscriber.destroy() ;

        subscribers.delete(name) ;
    }
}