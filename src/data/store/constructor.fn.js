
/**
 * 
 * 初始化数据存储器
 * 
 * @import create from data.model.create
 * 
 * @import get from data.model.get
 * 
 * @import assign from object.assign
 * 
 * @import createProxy from data.proxy.create
 * 
 * @import isMemoryProxy from is.proxy.memory
 * 
 * @import createReader from data.reader.json
 * 
 * @import createRecordset from data.recordset
 * 
 * @param {object} config 配置
 * 
 * @param {object} [config.proxy = {}] 数据代理
 * 
 * @param {mixed} [config.data] 初始数据
 * 
 * @param {boolean} [config.autoLoad = false] 自动加载
 * 
 * @param {array} [config.fields] 数据字段定义
 * 
 * @param {data.Model} [config.model] 数据模型
 * 
 * 
 */

if(fields){

    model = create({
        fields
    }) ;

}

if(model){

    model = get(model) ;

}

let me = this ;

me.fireEventDataCacheCount = 1 ;

(me.proxy = createProxy(assign({
    type:'memory',
    model,
    reader:{
        type:'json'
    }
} , proxy))).addListeners({
    read:'onProxyRead',
    scope:me
}) ;

let recordset = me.recordset = createRecordset(me) ;

if(data){

    let {
        proxy
    } = me ;

    if(isMemoryProxy(proxy)){

        proxy.read(data)
    }

}else if(autoLoad){

    me.load() ;
}

me.reader = createReader({
    model
}) ;

recordset ;