
/**
 * 
 * 触发脑图节点上的指示器输入事件
 * 
 * @import info from ..info scoped
 * 
 * @param {object} node 脑图节点数据
 * 
 * @param {object} indicator 指示器配置
 * 
 * @param {array} indicators 指示器配置
 * 
 */

 let me = this ;

 me.fireEvent('nodeindicatorinput' , node , indicator) ;

info({
   indicators
} , node , false) ;