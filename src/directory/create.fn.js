
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
    mkdir
} = require('fs'),
folderRe = /(?:^\/)|(?:[^\/\\]+(?:[\/\\]|$))/g;

async function main(path){

    let folderNames = path.match(folderRe),
        folderPath = '';

    for(let folderName of folderNames){

        folderPath += folderName ;

        if(folderName !== '/' && !await isDirectory(folderPath)){

            await new Promise((resolve , reject) => mkdir(folderPath , error => error ? reject(error) : resolve())) ;
        }
    }
}
