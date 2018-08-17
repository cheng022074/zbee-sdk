
/**
 * 
 * 分支一个子工作进程用于独立的处理并等待响应
 * 
 * @import getPath from fork.path
 * 
 * @param {string} name 程序名称
 * 
 * @return {Worker}
 * 
 */

const {
    fork,
    setupMaster,
    isMaster
} = require('cluster'),
{
    env
} = process;

if(isMaster){

    setupMaster({
        exec:getPath()
    }) ;
    
    return fork({
        'ZBEE-APPLICATION-ROOT-PATH':env['ZBEE-APPLICATION-ROOT-PATH'],
        'ZBEE-ENTRY-NAME':name
    }) ;
}
