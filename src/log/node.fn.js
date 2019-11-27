
/**
 * 
 * Node 版 日志
 *
 * @import format from date.format
 * 
 * @import createStream from file.stream.write
 * 
 * @param {string} path 日志路径
 * 
 */

 const {
    Console
 } = require('console'),
 {
    join
 } = require('path');

 class main{

    constructor(path){

        this.console = new Console(createStream(join(path , `${format(new Date() , 'YYYYMMDD')}.log`) , {
            flags:'a'
        })) ;
    }

    log(...args){

        doMethod.call(this , 'log' , ...args) ;
    }
 }

 function doMethod(method , ...args){

    let {
        console
    } = this ;

    console[method](format(new Date() , 'YYYY-MM-DD HH:mm:ss') , ...args) ;
 }