
/**
 * 
 * 分支一个子进程用于独立的处理并返回
 * 
 * @import getPath from fork.path
 * 
 * @param {string} name 程序名称
 * 
 * @param {mixed[]} [...args] 参数
 * 
 * @return {Promise} 
 * 
 */

const {
    fork
} = require('child_process') ;

return new Promise((resolve , reject) =>{

    fork(getPath() , {
        env:{
            'ZBEE-APPLICATION-ROOT-PATH':env['ZBEE-APPLICATION-ROOT-PATH'],
            'ZBEE-ENTRY-NAME':name,
            'ZBEE-ENTRY-ARGS':JSON.stringify(args)
        }
    }).on('message' , resolve).on('error' , reject) ;

}) ;