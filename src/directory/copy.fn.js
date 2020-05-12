
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
 * @import emptyFn from function.empty value
 * 
 * @param {string} src 拷贝的源文件夹目录
 * 
 * @param {string} dest 目标文件夹目录
 * 
 * @param {boolean} [isCopySrcFolder = true] 是否不拷贝源文件夹目录
 * 
 * @param {fuction} [fn] 回调函数 
 * 
 */

 const {
    copyFileSync
 } = require('fs'),
 {
    dirname
 } = require('path'),
 destPaths = [];

 fn = fn || emptyFn ;

 if(isDirectory(src)){

    let paths = getAllFilePaths(src);

    for(let path of paths){

        let destPath = path.replace(isCopySrcFolder ? dirname(src) : src , dest) ;

        createDirectory(dirname(destPath)) ;

        copyFileSync(path , destPath) ;

        fn(path , destPath) ;

        destPaths.push(destPath) ;
    }
 }

 return destPaths ;