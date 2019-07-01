
/**
 * 
 * 批量取消订阅
 * 
 * @param {object} config 批量订阅配置
 * 
 */

let {
   scope,
   ...subscribers
} = config,
me = this,
names = Object.keys(subscribers);

for(let name of names){

   let target = subscribers[name];

   if(isString(target)){

       subscriber = me.unsubscribe(name , target , scope) ;

   }else if(isObject(target)){

       let {
           fn
       } = target ;

       subscriber = me.unsubscribe(name , fn , scope) ;
   }
}
