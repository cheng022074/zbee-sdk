
/**
 * 
 * 初始化脑图
 * 
 * @import createReader from data.reader.json
 * 
 * @param {object} config 脑图配置
 * 
 * @param {data.Reader} config.reader 数据读取配置
 * 
 * @param {data.Reader} [config.readerAsRoot] 数据读取根路径设置
 * 
 * @param {object} [...config.options] 其它脑图配置
 * 
 */

 let me = this ;

 me.reader = createReader(reader) ;

 me.readerAsRoot = readerAsRoot ;

 me.onRootNodePropertyChange = (ob , node , name , value) => {

    console.log(name , value) ;

 } ;