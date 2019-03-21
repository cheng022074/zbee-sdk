
/**
 * 
 * 执行 AJAX 请求操作
 * 
 * @import assign from object.assign
 * 
 * @import ajax from data.connection.ajax
 * 
 * @param {object} [config = {}] AJAX 配置
 * 
 * 
 */

 let me = this,
 {
     url,
     ajaxConfig
 } = me ;

 ajax(url , assign({} , config , ajaxConfig)).then(({
     data
 }) => me.emit('load' , data)) ;