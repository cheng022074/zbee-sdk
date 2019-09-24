
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
 * @param {number} [port] 设置请求端口号
 * 
 * @param {mixed} data 记录数据
 * 
 */

 if(process.env.NODE_ENV === 'development'){

    const axios = require('axios') ;

    let url = `/recorder/${name}` ;

    if(port){

      url = join(`${location.host}:${port}` , url) ;
    }

    axios.post(url , data) ;
 }