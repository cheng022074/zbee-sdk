/**
 * 
 * 针对 WebSocket 进行调试
 * 
 */

 const io = require('socket.io-client') ;

var time = new Date().getTime();
        var socket = io.connect('http://118.31.105.13:83/message', {
            'force new connection': true,
            'transports': ['websocket', 'polling']
        });

        socket.on('connect', function() {

            console.info('连接成功' , new Date().getTime()-time);

            socket.emit('msg', {
                data:'sdfsdfsdfsdf'
            });
          
        });

        socket.on('msg', function(msg) {

            console.log('消息' , msg);

        });

        socket.on('disconnect', function() {

            console.log('断开') ;
        });

        function sendDisconnect() {
            
            socket.disconnect();
        }

        function sendMessage() {


            var jsonObject = {subs: [{appId:"12312312",groupId:"",userId:"aaa"},{appId:"12312312",groupId:"111",userId:"aaa"}]};
            // var jsonObject = {subs: [{symbol: "SH.600000", dataType: "16"}]};
            // var jsonObject = {subs: [{symbol: "SH.000001", dataType: "17",  order: ""}]};
            // var jsonObject = {subs: [{symbol: "SH.000001", dataType: "18",  order: ""}]};
            //  var jsonObject = {subs: [{symbol: "AG", dataType: 19, order: "netChangeRatio_desc", start: 0, end: 20}]};
            //  var jsonObject = {subs: [{symbol: "1", dataType: 23,length: 10}]};
            console.log({time:new Date(), data: jsonObject})
            socket.emit('sub', jsonObject);
        }

        setInterval() ;
