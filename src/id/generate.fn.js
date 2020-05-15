
/**
 * 
 * 生成唯一的编号
 * 
 * @import getName from environment.name
 * 
 * @param {string} prefix 编号前缀
 * 
 * @param {boolean} [isUUID = false] 是否使用UUID
 * 
 * @return {string} 生成后的唯一编号
 * 
 * @require uuid
 * 
 */

 let count = 1 ; 

 function main(prefix = 'zb-'){

    return `${prefix}${count ++}` ;

 }