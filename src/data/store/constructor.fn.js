/**
 * 
 * 初始化数据存储器
 * 
 * @import createProxy from data.proxy.create
 * 
 * @import onProxyRead from .proxy.read
 * 
 * @import createModel from data.model.create
 * 
 * @import is.string
 * 
 * @param {object} [options = {}] 配置
 * 
 * @param {string} [options.proxy = 'memory'] 数据代理
 * 
 * @param {mixed} [options.fields = []] 字段定义
 * 
 * @param {string} [options.model] 数据模型
 * 
 */

 let me = this ;

 if(!model){

    model = createModel(fields) ;
 }

 if(isString(proxy)){

    proxy = {
        name:proxy
    } ;
 }

 (me.proxy = createProxy({
     ...proxy,
     model
 })).addListeners({
     read:onProxyRead,
     scope:me
 }) ;

 me.$data = [] ;