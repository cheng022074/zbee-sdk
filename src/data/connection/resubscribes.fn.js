
/**
 * 
 * 重新订阅
 * 
 */

let {
    subscribers
} = this;

subscribers.forEach(subscriber => subscriber.reopen()) ;