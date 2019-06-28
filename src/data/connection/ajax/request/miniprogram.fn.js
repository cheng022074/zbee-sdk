
/**
 * 
 * 基于小程序的 AJAX 请求实现
 * 
 * @import request from ....request
 * 
 * @param {string} url 请求路径
 * 
 * @param {object} [config] 请求配置
 * 
 */

let {
    url:requestURL,
    method,
    data,
    form,
    responseHeaders
} = request(url , config),
header = {};

if(form === true){

    header['content-type'] = 'application/x-www-form-urlencoded' ;
}

return new Promise(callback =>{

    wx.request({
        header,
        url:requestURL,
        method,
        data,
        success({
            data,
            header
        }){
    
            if(responseHeaders){

                callback({
                    data,
                    header
                }) ;
            
            }else{

                callback(data) ;
            }
        }
    }) ;

}) ;


