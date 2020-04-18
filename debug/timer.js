
/**
 * 
 * 调试代码说明
 * 
 * @import createTimer from timer
 * 
 */

 let count = 0 ;

 function timeout(){

    console.log('timeout' , count ++) ;
 }

 let timer1 = createTimer({
     duration:3000,
     listeners:{
         timeout
     }
 }) ;

 let timer2 = createTimer({
    duration:3000,
    listeners:{
        timeout
    }
}) ;