
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
 * @return {array} 多个文件路径
 * 
 */

function main(path){

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
    
                paths.push(targetPath) ;
            
            }else{
    
                paths.push(...main(targetPath)) ;
            }
        }
    
        return paths ;
    }
    
    return [] ;
}