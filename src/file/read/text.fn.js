/**
 * 
 * 读取文本文件
 * 
 * @require chokidar
 * 
 * @import read from file.read
 * 
 * @param {string} path 文本文件路径
 * 
 * @param {function} [watchFn] 是否以监听方式获取文件内容
 * 
 * @return {string} 文本文件内容
 * 
 */

 const chokidar = require('chokidar'),
       cacheFiles = {} ;

 async function main(path , watchFn){

    if(!watchFn){

        return await getText(path) ;
    
    }else{

        if(cacheFiles.hasOwnProperty(path)){

            watchFn(cacheFiles[path]) ;
        
        }else{

            chokidar.watch(path).on('change' , async path => watchFn(cacheFiles[path] = await getText(path))) ;

            watchFn(cacheFiles[path] = await getText(path)) ;
        }   
    }
 }

 async function getText(path) {
     
    let data = await read(path) ;

    if(data){

        return data.toString('utf8') ;
    }
 }
