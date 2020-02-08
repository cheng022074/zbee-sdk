
/**
 * 
 * 生成唯一的编号
 * 
 * @import getName from environment.name
 * 
 * @param {string} prefix 编号前缀
 * 
 * @return {string} 生成后的唯一编号 
 * 
 */

 let count = 1 ; 

 function main(prefix = 'zb-'){

    if(getName() === 'node'){

      return `${process.pid}-${prefix}${count ++}` ;
 
    }

    return `${prefix}${count ++}` ;

 }