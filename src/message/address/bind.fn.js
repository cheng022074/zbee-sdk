
/**
 * 
 * 绑定目标对象
 * 
 * @param {mixed} target 目标对象
 * 
 */

 let {
    targets,
    messages
 } = this ;

 for(let {
   payload,
   method
} of messages){

   if(method in target){

      await target[method](payload) ;

  }
 }

 targets.push(target) ;
