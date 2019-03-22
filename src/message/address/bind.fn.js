
/**
 * 
 * 绑定目标对象
 * 
 * @import doAction from .doAction scoped
 * 
 * @param {mixed} target 目标对象
 * 
 */

 let {
    targets,
    messages
 } = this ;

 for(let message of messages){

   doAction(target , message) ;
 }

 targets.push(target) ;
