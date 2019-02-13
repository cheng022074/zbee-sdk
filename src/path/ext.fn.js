
/**
 * 
 * 获得路径的后缀名
 * 
 * @param {string} path 路径
 * 
 * @return {string} 后缀名
 * 
 */

const extRe = /\.[^\/\\]+$/ ;

function main(path){

    let result = path.match(extRe) ;

    if(result){

        return result[0] ;
    }
}