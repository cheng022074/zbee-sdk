
/**
 * 
 * 读取目录下所有文件的路径
 * 
 * @import is.directory
 * 
 * @import is.file
 * 
 * @param {string} path 文件夹目录路径
 * 
 * @param {RegExp} [testRe] 路径匹配正则表达式
 * 
 * @return {array} 多个文件路径
 * 
 */

function main(path , testRe){

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
    
            if(isFile(targetPath)){

                if(testRe && !testRe.test(targetPath)){

                    continue ;
                }
    
                paths.push(targetPath) ;
            
            }else{
    
                paths.push(...main(targetPath , testRe)) ;
            }
        }
    
        return paths ;
    }
    
    return [] ;
}