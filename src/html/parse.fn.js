/**
 * 
 * 解析HTML格式内容
 * 
 * @param {string} html HTML格式内容
 * 
 * @return {Document} HTML文档对象
 * 
 */
const {
    JSDOM
} = require('jsdom'),
{
    window
} = new JSDOM(html , {
    features:{
        FetchExternalResources:false,
        ProcessExternalResources:false
    }
}) ;

return window.document ;