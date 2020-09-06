
/**
 * 
 * 触发脑图节点上的指示器输入事件
 * 
 * @param {object} node 脑图节点数据
 * 
 * @param {object} indicator 指示器配置
 * 
 * @param {array} oldIndicators 指示器配置
 * 
 */

 let me = this ;

 me.fireEvent('nodeindicatorinput' , node , indicator) ;

 let {
    indicators
 } = node ;

 me.fireEvent('nodeindicatorschange' , indicators , oldIndicators) ;

 me.fireEvent('nodechange' , 'indicators' , indicator , oldIndicators) ;