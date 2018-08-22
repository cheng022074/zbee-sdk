/**
 * 
 * 格式化 HTML 文件内容
 * 
 * @import is.string
 * 
 * @param {mixed} data HTML 文件内容
 * 
 * @return {string} 格式化后的 HTML 文件内容
 * 
 */

const {
    minify
} = require('html-minifier'),
{
    html
} = require('js-beautify');

if(!isString(data)){

   data = `<!DOCTYPE html>\n${data.documentElement.outerHTML}` ;
}

return html(minify(data , {
    collapseWhitespace:true
})) ;