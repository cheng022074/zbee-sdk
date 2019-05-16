
/**
 * 
 * 调试 AJAX 请求
 * 
 * @import request from data.connection.ajax.request
 * 
 */

 request('http://121.40.177.191:8880/api2e/ESBServlet' , {
    method:'POST',
    params:{
        command: 'api2e.GetCheckSubTree',
        sid: 'bad9d2d4-9c4f-4728-b006-9be3bdd7eb52',
        astree: false,
        f_id: 2457

    }
 }).then(data =>{

    console.log(data) ;

 }) ;