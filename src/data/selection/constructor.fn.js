
/**
 * 
 * 构造选定器
 * 
 * @import getProxy from object.proxy
 * 
 * @param {mixed} target 需要选定能力的组件对象
 * 
 * @param {object} [config] 选定配置
 * 
 * @param {string} [config.itemSelectField = 'selected'] 项目选定标识字段
 * 
 * @param {string} [config.itemsField = 'items'] 项目集合字段
 * 
 * @param {boolean} [config.mode = 'single'] 选定模式，默认是单选
 * 
 */

 let me = this ;

 me.itemSelectField = itemSelectField ;

 me.itemsField = itemsField ;

 me.selectionMode = mode ;

 me.$selectedItems = [] ;

 me.proxy = getProxy(target) ;