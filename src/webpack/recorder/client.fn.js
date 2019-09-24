
/**
 * 
 * 记录器在浏览器端实现
 * 
 * @require axios
 * 
 * @param {string} name 记录名称
 * 
 * @param {mixed} data 记录数据
 * 
 */

 if(process.env.NODE_ENV === 'development'){

    const axios = require('axios') ;

    axios.post(`/recorder/${name}` , data) ;
 }