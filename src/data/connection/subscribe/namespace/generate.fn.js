
/**
 * 
 * 生成可用的命名空间
 * 
 * @import generate from id.generate
 * 
 * @import getName from ....name
 * 
 * @param {string} name 订阅名称
 * 
 * @return {string} 命名空间 
 * 
 */

 let {
    subscribers
 } = this,
 fullName;

 do{

    fullName = getName(name , generate('connection-')) ;

 } while(subscribers.has(fullName)) ;

 return fullName ;

 