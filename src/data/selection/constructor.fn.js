
/**
 * 
 * 构造选定器
 * 
 * @param {mixed} target 需要选定能力的组件对象
 * 
 * @param {object} [config] 选定配置
 * 
 * @param {string} [config.selectItemField = 'selected'] 项目选定标识字段
 * 
 * @param {boolean} [config.mode = 'single'] 选定模式，默认是单选
 * 
 */

 let me = this ;

 me.selectItemField = selectItemField ;

 me.selectionMode = mode ;

 me.selectedItems = [] ;