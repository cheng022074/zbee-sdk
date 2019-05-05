/**
 * 
 * 初始化数据存储器
 * 
 * @import createProxy from data.proxy.create
 * 
 * @import createModel from data.model.create
 * 
 * @import is.string
 * 
 * @param {object} [options = {}] 配置
 * 
 * @param {string} [options.proxy = 'memory'] 数据代理
 * 
 * @param {mixed} [options.fields] 字段定义
 * 
 * @param {mixed} [options.idProperty] 字段定义
 * 
 * @param {mixed} [options.modelClass] 数据模型类引用
 * 
 * @param {string} [options.model] 数据模型
 * 
 * @param {boolean} [options.autoLoad = false] 是否自动载入
 * 
 * @param {mixed} [options.defaultLoadOptions] 默认载入时所需要的参数
 * 
 */

 let me = this,
 {
    onProxyRead
 } = me;

 if(!model){

    model = createModel({
        fields,
        idProperty,
        modelClass
    }) ;
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

 me.records = [] ;

 me.recordMap = new Map() ;

 me.defaultLoadOptions = defaultLoadOptions ;

 me.model = model ;

 if(autoLoad === true){

    me.load() ;
 }