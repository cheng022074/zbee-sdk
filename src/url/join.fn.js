/**
 * 
 * 将多个链接进行拼接并返回
 * 
 * @import isAbsolute from url.isAbsolute
 * 
 * @param {string[]} ...urls 多个 URL 链接
 * 
 * @return {string} 拼接后的拼接
 * 
 * @scoped
 * 
 */

const urlSuffixRe = /\/$/ ;

function main(...urls){

    let len = urls.length,
        i = 0,
        result = [];

    for(; i < len ; i ++){

        let part = urls[i] || '';

        part = part.replace(urlSuffixRe , '') ;

        if(isAbsolute(part)){

            result.length = 0 ;

            result.push(part) ;
        
        }else if(part){

            result.push(part) ;
        }
    }

    return result.join('/') ;
}



