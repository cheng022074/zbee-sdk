
/**
 * 
 * 基于 axios 的再封装
 * 
 * @param {object} params 请求参数
 * 
 * @param {function} [callback = ()=>{}] 请求回调
 * 
 * @return {function} 取消请求函数  
 * 
 * @require axios
 * 
 */

 const 
 axios = require('axios'),
 CancelToken = axios.CancelToken;

 function main(params , callback){

    let source = CancelToken.source();

    axios({
        ...processParams(params),
        cancelToken: source.token
    })
    .then(response => callback(true , response.data , response))
    .catch(error => {

        if(!axios.isCancel(error)){

            callback(false , error.message , error) ;
        }

    });

    return () => source.cancel() ;
 }

 function processParams(params){

    return params ;
 }

 