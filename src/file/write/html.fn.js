/**
 * 
 * 保存HTML文件
 * 
 * @import write from file.write
 * 
 * @param {string} path 保存文件路径
 * 
 * @param {mixed} doc 保存文件内容
 * 
 */

 const {
     html
 } = require('js-beautify') ;

write(path , html(`<!DOCTYPE html>\n${doc.documentElement.outerHTML}`)) ;