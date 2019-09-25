
/**
 * 
 * 记录器在浏览器端实现
 * 
 * @import join from url.join
 * 
 * @require axios
 * 
 * @param {string} name 记录名称
 * 
 * @param {mixed} data 记录数据
 * 
 * @param {number} [port] 设置请求端口号
 * 
 */

 if(process.env.NODE_ENV === 'development'){

    const axios = require('axios') ;

    let url = `/recorder/${name}` ;

    if(port){

      url = join(`http://${location.hostname}:${port}` , url) ;
    }

    axios.post(url , data) ;
 }