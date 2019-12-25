
/**
 * 
 * 调试进程守护能力
 * 
 * @import createProcess from process.spawn
 * 
 */

 let process = createProcess({
     command:'node'
 }) ;

 process.on('start' , () => {

    console.log('开始') ;

 }) ;

 process.on('crash' , () =>{

   console.log('崩溃') ;

 }) ;

 process.on('exit' , () => {

    console.log('结束') ;

 }) ;