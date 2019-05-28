
/**
 * 
 * 初始化数据存储器
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

me.recordset = createRecordset(me) ;

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