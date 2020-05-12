
/**
 * 
 * 拷贝文件夹
 * 
 * @import is.directory
 * 
 * @import getAllFilePaths from .paths.file.all
 * 
 * @import createDirectory from directory.create
 * 
 * @param {string} src 拷贝的源文件夹目录
 * 
 * @param {string} dest 目标文件夹目录
 * 
 * @param {boolean} [isCopySrcFolder = true] 是否不拷贝源文件夹目录
 * 
 */

 const {
    copyFileSync
 } = require('fs'),
 {
    dirname
 } = require('path'),
 destPaths = [];

 if(isDirectory(src)){

    let paths = getAllFilePaths(src);

    for(let path of paths){

        let destPath = path.replace(isCopySrcFolder ? dirname(src) : src , dest) ;

        createDirectory(dirname(destPath)) ;

        copyFileSync(path , destPath) ;

        destPaths.push(destPath) ;
    }
 }

 return destPaths ;