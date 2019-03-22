
/**
 * 
 * 绑定目标对象
 * 
 * @import doAction from .doAction scoped
 * 
 * @param {mixed} target 目标对象
 * 
 */

 let me = this,
 {
  target:currentTarget,
  messages
 } = me;

 if(!currentTarget){

  for(let message of messages){

    doAction(target , message) ;

  }

  messages.length = 0 ;

  me.target = target ;

 }
