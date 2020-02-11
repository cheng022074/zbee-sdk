
/**
 * 
 * 调试消息通道主进程
 * 
 * @import createChannel from data.message.channel.process.main
 * 
 */

 (async () =>{

    let channel = createChannel({
        childProcesses:fork('data.message.channel.process.child')
    }) ;
   
    await channel.send('single' , '陈治文').then(result => console.log('返回信息' , result)) ;
   
    try{
   
       await channel.send('single_error' , '陈治文') ;
   
    }catch(err){
   
        console.log('错误' , err) ;
    }

    channel.connect('multi' , 'Hello').then(result => console.log('推送消息' , result)) ;

    channel.connect('multi' , 'World').then(result => console.log('推送消息' , result)) ;

 })() ;

 