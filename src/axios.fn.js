
/**
 * 
 * 基于 axios 的再封装
 * 
 * @import from from array.from
 * 
 * @import generate from id.generate
 * 
 * @param {object} params 请求参数
 * 
 * @param {function} [callback = ()=>{}] 请求回调
 * 
 * @return {function} 取消请求函数  
 * 
 * @require axios
 * 
 * @require fs
 * 
 */

 const 
 axios = require('axios'),
 {
    stringify
 } = require('qs'),
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

 function processParams({
     form = false,
     params,
     files,
     ...options
 }){

    if(form && options.method !== 'GET'){

       return processForm(options , params) ;
    }

    if(files){

        return processUpload(options , from(files)) ;
    }

    return {
        params,
        ...options
    } ;
 }

 function processForm(options , params){

    return {
        ...options,
        data:stringify(params)
    } ;
 }

 function processUpload(options , files){

    let data = new FormData() ;

    for(let file of files){

        data.append(generate('file-') , file) ;
    }

    options.method = 'POST' ;

    return {
        ...options,
        data
    } ;
 }