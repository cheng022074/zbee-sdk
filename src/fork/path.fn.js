
/**
 * 
 * 当前子进程主入口代码地址
 * 
 * @import getName from environment.name
 * 
 * @return {string} 子进程主入口代码地址 
 * 
 * @once
 * 
 */

const {
    env
} = process,
{
    join
} = require('path');

switch(getName()){
    
    case 'zbee':

        return join(env['ZBEE-APPLICATION-ROOT-PATH'] , 'bin' , 'header.js') ;

        break ;

    case 'node':

        return __filename ;

        break ;

    default:

        return ;
};