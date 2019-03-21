
/**
 * 
 * 基于已有链接附加查询信息
 * 
 * @import is.string
 * 
 * @param {string} url 链接
 * 
 * @param {mixed} data 附加查询信息
 * 
 * @return {mixed} 拼接了查询信息的链接 
 * 
 */

let querystring ;

if(isString(data)){

    querystring = data ;

}else{

    querystring = [];

    let names = Object.keys(data) ;

    for(let name of names){

        querystring.push(`${name}=${encodeURIComponent(data[name])}`) ;
    }

    querystring = querystring.join('&') ;

}

if(querystring){

    if(url.includes('?')){

        return `${url}&${querystring}` ;
    }
    
    return `${url}?${querystring}` ;

}

return url ;
