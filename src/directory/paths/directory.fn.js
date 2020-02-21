
/**
 * 
 * 读取目录下所有的直接文件夹路径
 * 
 * @import is.directory
 * 
 * @param {string} path 文件夹目录路径
 * 
 * @return {array} 多个文件夹路径
 * 
 */

if(isDirectory(path)){

    const {
        readdirSync
    } = require('fs'),
    {
        join
    } = require('path');

    let names = readdirSync(path),
        paths = [];

    for(let name of names){

        let targetPath = join(path , name) ;

        if(isDirectory(targetPath)){

            paths.push(targetPath) ;
        }
    }

    return paths ;
}

return [] ;