
/**
 * 
 * 初始化数据缓存
 * 
 * @import createProxy from object.proxy
 * 
 * @import processData from .data scoped
 * 
 * @import is.defined
 * 
 * @param {object} options = {} 配置
 * 
 * @param {boolean} [options.proxy = true] 是否启用 Proxy 模式，默认启用
 * 
 * @param {string} options.schema 数据缓存结构名称
 * 
 * @param {string} options.name 数据缓存名称
 * 
 * @param {boolean} [options.recordset = true] 初始化数据
 * 
 * @param {mixed} [options.init] 初始化数据方式
 * 
 */

 let me = this ;

 me.isUseProxy = proxy;

 me.schema = schema ;

 me.name = name ;

 let data = (me.proxy = createProxy(me)).call('getCache') ;

 if(!isDefined(data)){

      data = recordset ? [] : {} ;
 }

 me.data = processData(data);

 if(isDefined(init)){

   me.init(init) ;
   
 }

