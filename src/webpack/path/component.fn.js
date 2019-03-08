
/**
 * 
 * 路径转换成组件名称
 * 
 * @import getShortPath from path.short
 * 
 * @import getConfig from config.bootstrap
 * 
 * @param {string} path 路径
 * 
 * @return {string} 组件名称 
 * 
 */

 return getShortPath(path).replace(/^\.{2}[\\\/]([^\\\/]+)([\\\/])/ , (folder , separator) =>{

    let prefix = prefixes[folder] || false ;

    if(prefix === false){

        return '' ;
    }

    return `${prefix}${separator}` ;

 }).replace(/\/|\\/g , '-').toLowerCase() ;