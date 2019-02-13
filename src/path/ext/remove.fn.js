
/**
 * 
 * 去除路径后缀名
 * 
 * @param {string} path 路径
 * 
 * @return {string} 去除后缀名的路径 
 * 
 */

const extRe = /\.[^\/\\]+$/ ;

function main(path){

    return path.replace(extRe , '') ;

}