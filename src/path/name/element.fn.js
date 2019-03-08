/**
 * 
 * 将路径转换成元素名称
 * 
 * @import getShortPath from path.short
 * 
 * @param {string} rootPath 根路径
 * 
 * @param {string} path 路径
 * 
 * @return {string} 短路径
 * 
 */

 const splitRe = /\//g ;

function main(rootPath , path){

    let shortPath = getShortPath(rootPath , path) ;

    if(shortPath){

        return shortPath.replace(splitRe , '-') ;
    }

}
