
/**
 * 
 * 创建不存在的目录，如果存在的话，则维持现状
 * 
 * @import is.directory
 * 
 * @param {string} path 目录路径
 * 
 * @return {mixed} 返回说明 
 * 
 * @scoped
 * 
 */

const {
    mkdirSync
} = require('fs'),
folderRe = /(?:^\/)|(?:[^\/\\]+(?:[\/\\]|$))/g;

function main(path){

    let folderNames = path.match(folderRe),
        folderPath = '';

    for(let folderName of folderNames){

        folderPath += folderName ;

        if(folderName !== '/' && !isDirectory(folderPath)){

            mkdirSync(folderPath) ;
        }
    }
}
