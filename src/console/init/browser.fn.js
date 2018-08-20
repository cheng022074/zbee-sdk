/**
 * 
 * 初始化浏览器日志系统
 * 
 * @config rules from console
 * 
 * @import print from console.print
 * 
 * @once
 * 
 * @alias console.init
 * 
 */

let types = Object.keys(rules) ;

for(let type of types){

    console[type] = print(type , console[type].bind(console) , rules[type]) ;
}



