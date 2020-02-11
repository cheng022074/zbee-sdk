
/**
 * 
 * SDK
 * 
 * @import create from promise.create
 * 
 * @import createChannel from data.message.channel.process.child
 * 
 */

let channel = createChannel() ;

setTimeout(async() =>{

    console.log('开始') ;

    let result = await channel.send('single' , '陈治文') ;

    console.log('返回数据' , result) ;

    try{
   
        await channel.send('single_error' , '陈治文') ;
    
    }catch(err){

        console.log('错误' , err) ;
    }

    console.log('结束') ;

} , 1000) ;