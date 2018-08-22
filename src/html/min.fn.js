/**
 * 
 * 压缩 HTML 文件内容
 * 
 * @import is.string
 * 
 * @param {mixed} data HTML 文件内容
 * 
 * @return {string} 压缩后的 HTML 文件内容
 * 
 */

const {
    minify
} = require('html-minifier'),
config = {
    collapseWhitespace:true
};

if(isString(data)){

    return minify(data , config) ;
}

return minify(`<!DOCTYPE html>\n${data.documentElement.outerHTML}` , config) ;