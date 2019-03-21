/**
 * 
 * 基于 AJAX 进行数据交互存储器
 * 
 * @import load from .load scoped
 * 
 * @param {string} url 请求路径
 * 
 * @param {object} [config = {}] 请求配置
 * 
 * 
 */

 let {
     autoLoad = true,
     ...ajaxConfig
 } = config ;

 let me = this ;

 me.ajaxConfig = ajaxConfig ;

 me.url = url ;

 if(autoLoad){

    load() ;
 }