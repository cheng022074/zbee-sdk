
/**
 * 
 * 基于数据连接的模块封装
 * 
 * @import empty from function.empty value
 * 
 * @import deploy from ..lifecycle
 * 
 * @param {object} connections 订阅对象
 * 
 * @param {object} module 组件定义对象
 * 
 * @return {object} 增加订阅功能的组件定义对象
 * 
 */

 let {
     mounted
 } = deploy(connections , module) ;

 mounted.call(module) ;

 return module ;