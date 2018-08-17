
/**
 * 
 * 基于集群方案的调试
 * 
 * @import fork from fork.master
 * 
 * @import debug::cluster.worker
 * 
 * @return {mixed} 返回说明 
 * 
 */

let workers = fork([
    'debug::cluster.worker'
]) ;

let worker = workers['debug::cluster.worker'],
    count = 0 ;

setInterval(() =>{

    worker.send(count ++).then(data =>{

        console.log(data) ;

    });

} , 1000) ;

   
