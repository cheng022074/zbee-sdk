
/**
 * 
 * 调试 axios 数据通道
 * 
 * @import data.channel.client.axios
 * 
 * @import Channel from data.channel value
 * 
 */

 let client = Channel.client('data.channel.client.axios') ;

 const {
    stringify
 } = require('qs') ;

 console.log(await client.send({
     method:'POST',
     url:'http://121.40.177.191:8880/api2e/ESBServlet',
     data:stringify({
        command: 'api2e.GetCheckSubTree',
        sid: 'c39b623f-b9be-4232-b5b9-560ddbed9267',
        astree: false,
        f_id: 13621
     })
 })) ;