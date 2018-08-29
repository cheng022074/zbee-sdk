/**
 * 
 * 根据信息包中信息执行相关函数
 * 
 * @import is.array
 * 
 * @param {object} message 信息
 * 
 * @async
 * 
 */

let {
    action,
    data
} = message ;

if(isArray(data)){

    return await include(action)(...data) ;
}

return await include(action)(data) ;