
/**
 * 
 * HTTP 调试
 * 
 * @import http
 * 
 */

http.get('http://116.62.209.247:8004/api/dealerList').catch(err =>{

    console.log(err.message) ; 

})
.then(data =>{

    console.log(data) ;
}) ;
