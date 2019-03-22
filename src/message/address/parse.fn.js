
/**
 * 
 * 解析消息地址
 * 
 * @param {string} address 消息地址
 * 
 * @return {object} 地址解析后的结果 
 * 
 */

let match = address.match(/^([^\:]+)\:{2}([^\:]+)$/) ;

if(match){

    let [
        ,
        address,
        action
    ] = match ;

    return {
        address,
        action
    } ;
}