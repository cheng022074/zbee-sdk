
/**
 * 
 * 启动作业任务
 * 
 * @param {string} cron CRON 字符串
 * 
 * @param {function} fn 作业任务函数
 * 
 * @param {mixed} scope 作业任务函数的作用域
 * 
 * @return {Job} 作业任务对象
 * 
 * @scoped
 * 
 */

const {
    scheduleJob
} = require('node-schedule') ;

function main(corn , fn , scope){

    return scheduleJob(corn , fn.bind(scope)) ;
}